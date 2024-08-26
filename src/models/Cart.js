import { Model, Schema } from "mongoose";

const CartSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
    },
    products: [
        {
            product: {
                type: Schema.Types.ObjectId,
                ref: 'products',
            },
            quantity: Number,
        },
    ],
}, {
    timestamps: true,
});

export default Model('cart', CartSchema);
