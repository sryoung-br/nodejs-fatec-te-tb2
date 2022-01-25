import { DataTypes, Model } from 'sequelize'
import sequelize from './../../config/database-connection.js'

class UserModel extends Model {}

UserModel.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        },
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            notEmpty: true
        },
        allowNull: false
    },
}, {
    sequelize,
    timestamps: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
    modelName: 'user'
})

export { UserModel }