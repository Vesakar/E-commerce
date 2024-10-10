const ProductModel = require("../model/productModel")

//Get products API - api/v1/products
const getProducts = async(req,res,next )=>{

    const query = req.query.keyword?{ name : { 
        $regex: req.query.keyword,
        $options: 'i'
     }}:{}
    const products=await ProductModel.find(query)

    res.json({
        success : true,
        products
    })
}

//Get products API - api/v1/product/:id
const getSingleProduct = async(req,res,next) =>{
try {
     const product = await ProductModel.findById(req.params.id)
    res.json({
        success : true,
        product
    })
} catch (error) {
    res.status(404).json({
        success:false,
        message:error.message
    })
}
   
}

module.exports = {getProducts,getSingleProduct}