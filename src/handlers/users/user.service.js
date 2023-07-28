import UserModel from "../../data-access/models/user.model.js";

export const getUsers = async() => {
    return await UserModel.findAll();
};

export const createUser = async (input) => {
    const {email, password} = input;
    return await UserModel.create({email, password})
};

export const loginUser = async (input) => {
    const {email, password} = input;
    const userData = await UserModel.findOne({where: {email: email , password: password}})
    if (!userData) {
        throw new Error('User not found!');
    }
    return userData;
};


