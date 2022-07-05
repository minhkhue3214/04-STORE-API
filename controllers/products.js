const Product = require('../models/product')
const getAllProductsStatic = async (req,res) =>{
    const search = 'ab'
    const products = await Product.find({
        name:{$regex:search,$options:'1'}
    })
    res.status(200).json({products,nbHits:products.length})
    // if(!products){
    //     throw new Error('Cant get data')
    // }
}

const getAllProducts = async (req,res) =>{
    const {featured,company,name} = req.query
    const queryObject = {}

    if(featured){
        queryObject.featured = featured === "true" ? true : false
    }
    if(company){
        queryObject.company = company
    }
    if(name){
        queryObject.name = name
    }
    // if featured is false ,we gat all the data
    console.log(queryObject)
    const products = await Product.find(queryObject)
    res.status(200).json({products,nbHits:products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}