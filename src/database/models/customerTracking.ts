import { Model, Sequelize, DataTypes } from 'sequelize';
import { CustomerTrackingAttributes } from '../attribute/customerTrackingAttribute';

class CustomerTracking extends Model implements CustomerTrackingAttributes {
    public CustID!: string;
    public FName!: string;
    public LName!: string;
    public Address!: string;
    public Phone!: number;
    public email!: string;

    static initModel(sequelize: Sequelize): void {
        CustomerTracking.init(
            {
                CustID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: true,
                },
                FName: {
                    type: DataTypes.STRING,
                },
                LName: {
                    type: DataTypes.STRING,
                },
                Address: {
                    type: DataTypes.STRING,
                },
                Phone: {
                    type: DataTypes.STRING,
                },
                email: {
                    type: DataTypes.STRING,
                },
            },
            {
                sequelize,
                underscored: true,
                tableName: 'CustomerTracking',
            }
        );
    }
}

export default CustomerTracking;
