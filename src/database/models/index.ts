import SequelizeConnection from '../configuration';
import Department from './department';
import Employee from './employee';
import Product from './product';
import QueryHandling from './queryHandling';
import CustomerTracking from './customerTracking';
const sequelize = SequelizeConnection.getInstance();
Department.initModel(sequelize);
Employee.initModel(sequelize);
Product.initModel(sequelize);
QueryHandling.initModel(sequelize);
CustomerTracking.initModel(sequelize);

export const db = {
    sequelize,
    Department,
    Employee,
    Product,
    QueryHandling,
    CustomerTracking,
};
