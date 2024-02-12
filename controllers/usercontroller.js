const user_model = require('../models/usermodel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const register = async(req,res) => {
    try {
        const {user_name,password} = req.body;
        const hash_password = await bcrypt.hash(password,10);
        const store = new user_model({user_name,password:hash_password})
        await store.save()
        res.status(200).json({message:'user added successfully'})
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
const login = async(req,res) =>{
    try {
        const {user_name,password} = req.body;
        const user = await user_model.findOne({user_name});
        if(!user)
        {
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
         return res.status(401).json({ error: 'password do not match' });
        }
       const token = jwt.sign({ userId: user._id }, '9j399dn2ndn39jakaka', {
        expiresIn: '1h',
       });
       res.status(200).json({ token });
       } catch (error) {
        res.status(500).json({message:error.message})
    }
}
module.exports = {register,login}