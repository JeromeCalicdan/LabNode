"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var Department = /** @class */ (function (_super) {
    __extends(Department, _super);
    function Department() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Department.initModel = function (sequelize) {
        Department.init({
            id: {
                type: sequelize_1.DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: sequelize_1.DataTypes.STRING,
            },
            managerId: {
                field: 'manager_id',
                type: sequelize_1.DataTypes.INTEGER,
            },
            locationId: {
                field: 'location_id',
                type: sequelize_1.DataTypes.INTEGER,
            },
        }, {
            sequelize: sequelize,
            underscored: true,
            tableName: 'departments',
        });
    };
    return Department;
}(sequelize_1.Model));
exports.default = Department;
