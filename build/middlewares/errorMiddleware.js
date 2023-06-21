"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = __importDefault(require("../logging/logger"));
var errorHandler = function (err, req, res) {
    if (err) {
        logger_1.default.error("".concat(req.method, ": ").concat(req.url, " - ").concat(err.message));
        res.status(500).json({ message: err.message });
    }
};
exports.default = errorHandler;
