import { db } from '../database/models';
import Employee from '../database/models/employee';

class EmployeeService {
    private static instance: EmployeeService;

    static getInstance(): EmployeeService {
        if (!EmployeeService.instance) {
            EmployeeService.instance = new EmployeeService();
        }
        return EmployeeService.instance;
    }
    findAll = async () => {
        const employees: Employee[] = await Employee.findAll();
        return employees;
    };

    findById = async (id: string) => {
        const existingEmployee: Employee | null = await Employee.findByPk(id);
        return existingEmployee;
    };
    save = async (object: any) => {
        // eslint-disable-next-line no-useless-catch
        try {
            if (!object && Object.keys(object.length == 0)) {
                throw new Error('Object must contain at least one property');
            }
            const employee = await Employee.create({ ...object });
            return employee;
        } catch (err) {
            throw err;
        }
    };
    update = async (id: string, object: any) => {
        if (!object && Object.keys(object).length == 0) {
            throw new Error(
                'Object to be updated must contain at least one property.'
            );
        }

        let existingEmployee = await this.findById(id);
        if (!existingEmployee) {
            throw new Error('query_not_found');
        }

        // eslint-disable-next-line no-useless-catch
        try {
            await Employee.update(
                { ...object },
                {
                    where: { EmpID: id },
                }
            );

            existingEmployee = await this.findById(id);
            return existingEmployee;
        } catch (err) {
            throw err;
        }
    };

    deleteByPrimaryKey = async (id: string) => {
        const existingEmployee = await this.findById(id);
        if (!existingEmployee) {
            throw new Error('query_not_found');
        }

        // eslint-disable-next-line no-useless-catch
        try {
            await existingEmployee.destroy();
        } catch (err) {
            throw err;
        }
    };
}

export default EmployeeService;
