import { Model, Sequelize, DataTypes } from 'sequelize';
import { ProductAttributes } from '../attribute/productAttributes';

class Product extends Model implements ProductAttributes {
    public ProdID!: string;
    public ProdName!: string;
    public Base_Cost!: number;

    static initModel(sequelize: Sequelize): void {
        Product.init(
            {
                ProdID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'ProdID',
                },
                ProdName: {
                    field: 'ProdName',
                    type: DataTypes.STRING,
                },
                Base_Cost: {
                    field: 'Base_Cost',
                    type: DataTypes.INTEGER,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Product',
                timestamps: false,
            }
        );
    }
}

export default Product;
