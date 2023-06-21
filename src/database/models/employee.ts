import { Model, Sequelize, DataTypes } from 'sequelize';
import { EmployeeAttributes } from '../attribute/employeeAttributes';

class Employee extends Model implements EmployeeAttributes {
    public EmpID!: string;
    public EFirstName!: string;
    public ELastName!: string;
    public Address!: string;
    public Age!: number;
    public Dept!: string;
    public Salary!: number;
    public readonly D_Join!: Date;

    static initModel(sequelize: Sequelize): void {
        Employee.init(
            {
                EmpID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: true,
                    field: 'EmpID',
                },
                EFirstName: {
                    field: 'EFirstName',
                    type: DataTypes.STRING,
                },
                ELastName: {
                    field: 'ELastName',
                    type: DataTypes.STRING,
                },
                Address: {
                    field: 'Address',
                    type: DataTypes.STRING,
                },
                Dept: {
                    field: 'Dept',
                    type: DataTypes.STRING,
                },
                Age: {
                    field: 'Age',
                    type: DataTypes.INTEGER,
                },
                Salary: {
                    field: 'Salary',
                    type: DataTypes.INTEGER,
                },
                D_Join: {
                    field: 'D_Join',
                    type: DataTypes.DATE,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'Employees',
                timestamps: false,
            }
        );
    }
}

export default Employee;
