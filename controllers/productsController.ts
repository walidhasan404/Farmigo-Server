import { Request, Response } from 'express';
import Product from '../models/productModel'; // Assuming the Product model is located in the models directory
import { log } from 'console';

interface User {
  id: string;
}

interface CustomRequest extends Request {
  user?: User;
}

export const createProduct = async (req: CustomRequest, res: Response) => {
  try {
    const user_Id = req.user?.id;
     console.log(user_Id, "products")
    const { product_name, description, price, quantity, category, images, rating} = req.body;

    // Validate the request body
    if (!product_name || !price || !category || !user_Id ) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: name, price, category, farmer_Id, and at least one image.'
      });
    }

    // Create the product
    const newProduct = new Product({
      farmer_id: user_Id,
      product_name,
      description,
      category,
      price,
      quantity: quantity || 0,  // Default to 0 if quantity is not provided
      rating: rating,
      images: images
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Respond with the saved product
    return res.status(201).json({
      success: true,
      message: 'Product created successfully!',
      data: savedProduct
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error.message
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};


export const getProducts = async (req: Request, res: Response) => {
  try {
    const { category, priceRange, search, sort, page = 1 } = req.query;

    // Build filter object
    const filter: any = {};

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by price range
    if (priceRange) {
      const [min, max] = (priceRange as string).split('-').map(Number);
      filter.price = { $gte: min, $lte: max };
    }

    // Search by product name or description
    if (search) {
      filter.$or = [
        { product_name: { $regex: search, $options: 'i' } }, // Case-insensitive
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Set default sorting options
    let sortOption: any = { created_at: -1 }; // Default sorting by latest products

    // Sorting logic
    if (sort) {
      if (sort === 'name') {
        sortOption = { product_name: 1 }; 
      } else if (sort === 'price') {
        sortOption = { price: 1 }; 
      } else if (sort === 'rating') {
        sortOption = { rating: -1 }; 
      }
    }

    // Pagination logic
    const limit = 10; // Limit products per page
  //  const skip = (Number(page) - 1) * limit;

    // Fetch products with filters, sorting, and pagination
    const products = await Product.find(filter)
      .sort(sortOption)
     


    // Get total count for pagination
    const totalProducts = await Product.countDocuments(filter);

    return res.status(200).json({
      success: true,
      data: products,
      total: totalProducts,
      currentPage: Number(page),
      totalPages: Math.ceil(totalProducts / limit)
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error.message
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
  }
};

export const getSingleProduct = async(req:Request, res:Response)=>{
  const productId = req.params?.id
   if(!productId){
    return res.status(404).json({message: "Product Id NOt Found"})
   }
   try {
    const product = await Product.findById(productId)
    return res.status(200).json({
      success:true,
      data: product,
    })
   } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: 'Server Error',
        error: error.message
      });
    } else {
      return res.status(500).json({
        success: false,
        message: 'An unknown error occurred',
      });
    }
   }


 
}


// get products By farmer id


export const getProductsByFarmerId = async (req: Request, res: Response) => {
  const { id } = req.params; // id is the farmer's ID

  console.log("Farmer ID:", id); // Only for debugging, remove in production
  
  try {
      const products = await Product.find({ farmer_id: id });
      console.log('====================================');
      console.log(products);
      console.log('====================================');
      if (!products || products.length === 0) {
          return res.status(404).json({ message: 'No products found for this farmer.' });
      }

      return res.status(200).json(products);
  } catch (error) {
      return res.status(500).json({
        message: 'Error fetching products',
        error: (error as Error).message
      });
  }
};


//get orders by farmer id

/* export const getOrdersByFarmerId = async (req: Request, res: Response) => {
  const { farmerId } = req.params;

  try {
      const orders = await Order.find({ farmer_id: farmerId });
      
      if (!orders || orders.length === 0) {
          return res.status(404).json({ message: 'No orders found for this farmer.' });
      }

      return res.status(200).json(orders);
  } catch (error) {
      return res.status(500).json({
        message: 'Error fetching orders',
        error: (error as Error).message
      });
  }
}; */