import {DataTypes} from "sequelize";
import sequelize from "../connection-manager.js";
import logger from "../../lib/logger.js";
const UserModel = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
    },
});

UserModel.sync().then(()=>{
    logger.info('User Model Synced-------------')
}).catch((err)=>{
logger.error(err)
})

export default UserModel;