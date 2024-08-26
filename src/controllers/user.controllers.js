import UserService from "../services/UserService.js";

export const getUsers = async (req, res) => {
    try {
        const users = await UserService.findAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const createUser = async (req, res) => {
    try {
        await UserService.create(req.body);
        return res.status(201).json({
            message: 'User created'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updateData = req.body;
    try {
        const updatedUser = await UserService.update(id, updateData);
        if (!updatedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.json(updatedUser);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await UserService.delete(id);
        if (!deletedUser) {
            return res.status(404).json({
                message: 'User not found'
            });
        }
        return res.json({
            message: 'User deleted'
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}