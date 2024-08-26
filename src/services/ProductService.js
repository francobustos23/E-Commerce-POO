import Product from "../models/Product.js";

class ProductService {
    constructor() { }

    async findAll() {
        return await Product.find();
    }

    async create(product) {
        return await Product.create(product);
    }

    async update(id, updateData) {
       
        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
            new: true, 
            runValidators: true 
        });

        if (!updatedProduct) {
            return null;
        }

        return updatedProduct;
    }

    async delete(id) {
        return await Product.findByIdAndDelete(id);}
}

export default new ProductService();
