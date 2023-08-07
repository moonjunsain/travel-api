const {Model, DataTypes} = require('sequelize')

class Trip extends Model {}

Trip.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        trip_budget: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        traveler_amount: {
            type: DataTypes.INTEGER,
            
        },
        traveler_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traveler',
                key: 'id'
            }
        },
        location_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'location',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        timestamps: false,
        modelName: 'trip'
    }
)

module.exports = Trip