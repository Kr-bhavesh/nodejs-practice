const Product = require('../models/Productmodel')
// const express = require('express')

const insert_product = async (req, res) => {
    //creates a collection in db with provided data
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const all_products = async (req, res) => {
    // simply returns all the records present in specified collection
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
 const single_product = async (req, res) => {
    // gets single record based on given id
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const update_product=async (req, res) => {
    //gets the id and updates the record for the same along with given body
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndUpdate(id, req.body);
      const updated_product = await Product.findById(id);
      res.status(200).json(updated_product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const delete_product= async (req, res) => {
    //gets the id and deletes the record for the same
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
      res.status(200).json({ message: "successfully deleted the record" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = {
    insert_product,
    all_products,
    single_product,
    update_product,
    delete_product
}
