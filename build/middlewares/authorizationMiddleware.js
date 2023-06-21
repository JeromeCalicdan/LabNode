"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function authorizationMiddleware(req, resp, next) {
    var urlPath = req.url;
    var authorizationToken = req.headers['Authorization'];
    if (urlPath.startsWith('/api') && !authorizationToken) {
        resp.status(401).json({ message: 'invalid token' });
        return;
    }
    next();
}
exports.default = authorizationMiddleware;
