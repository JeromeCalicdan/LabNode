import { Model, Sequelize, DataTypes } from 'sequelize';
import { QueryHandlingAttributes } from '../attribute';

class QueryHandling extends Model implements QueryHandlingAttributes {
    public QID!: string;
    public Cust_ID!: string;
    public EmpID!: string;
    public Status!: string;
    public Feedback!: number;
    public Query_Text!: string;
    public Query_Response!: string;
    public readonly Sub_Date!: Date;
    public readonly Res_Date!: Date;

    static initModel(sequelize: Sequelize): void {
        QueryHandling.init(
            {
                QID: {
                    type: DataTypes.STRING,
                    primaryKey: true,
                    autoIncrement: false,
                    field: 'QID',
                },
                Cust_ID: {
                    field: 'Cust_ID',
                    type: DataTypes.STRING,
                },
                EmpID: {
                    field: 'EmpID',
                    type: DataTypes.STRING,
                },
                Status: {
                    field: 'Status',
                    type: DataTypes.STRING,
                },
                Feedback: {
                    field: 'Feedback',
                    type: DataTypes.INTEGER,
                },
                Query_Text: {
                    field: 'Query_Text',
                    type: DataTypes.STRING,
                },
                Query_Response: {
                    field: 'Query_Response',
                    type: DataTypes.STRING,
                },
                Sub_Date: {
                    field: 'Sub_Date',
                    type: DataTypes.DATE,
                },
                Res_Date: {
                    field: 'Res_Date',
                    type: DataTypes.DATE,
                },
            },
            {
                sequelize,
                underscored: false,
                tableName: 'QueryHandling',
                timestamps: false,
            }
        );
    }
}

export default QueryHandling;
