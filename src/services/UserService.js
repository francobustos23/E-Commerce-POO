import User from "../models/User.js";

class UserService {
    constructor() { }

    async findAll() {
        return await User.find();
    }

    async create(user) {
        return await User.create(user);
    }

    async update(id, updateData) {
        const updatedUser = await User.findByIdAndUpdate(id, updateData, {
            new: true,
            runValidators: true
        });

        if (!updatedUser) {
            return null;
        }

        return updatedUser;
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

export default new UserService();