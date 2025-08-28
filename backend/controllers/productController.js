import {v2 as cloudinary} from 'cloudinary';
import productModel from "../models/productModel.js";

// Function for add product
const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestSeller } = req.body;

    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];  

    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    const imagesUrl = await Promise.all(
        images.map(async (item) => {
            let result = await cloudinary.uploader.upload(item.path, {resource_type: "image"});
            return result.secure_url;
        })
    )

    const productData = {
        name, 
        description,
        price,
        category,
        subCategory,
        sizes: JSON.parse(sizes),
        bestSeller: bestSeller === "true" ? true : false,
        image: imagesUrl,
        date: Date.now()
    }

    const product = new productModel(productData);

    await product.save()

    res.json({success: true, message: "Product Added successfully"})
  } catch (e) {
    res.json({ success: false, message: e.message });
  }
};



// Function to list products
const listProducts = async (req, res) => {
    try {
        const products = await productModel.find();

        res.json({success: true, message: products})
    } catch (e) {
        res.json({success: false, error: e.message})
    }
}

// Function for remove product
const removeProduct = async (req, res) => {
    try {
        const productToDelete = await productModel.findByIdAndDelete(req.body.id)

        if (!productToDelete) {
            return res.json({success: false, message: `Product Not Found !`});
        }

        return res.json({success: true, message: `Product ${productToDelete.name} was deleted Successfully !`});
    } catch (e) {
        res.json({success: false, error: e.message})
    }
}

// Function for single product
const singleProduct = async (req, res) => {
    try {
        const product = await productModel.findById(req.body.id)

        if (!product) {
            return res.json({success: false, message: "Product not Found !"})
        }

        res.json({success: true, message: product});

    } catch (e) {
        res.json({success: false, error: e.message})
    }
} 

export { addProduct, listProducts, removeProduct, singleProduct }