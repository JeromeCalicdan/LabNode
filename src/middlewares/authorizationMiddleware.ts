import { Request, Response, NextFunction } from 'express';

function authorizationMiddleware(
    req: Request,
    resp: Response,
    next: NextFunction
) {
    const urlPath = req.url;
    const authorizationToken = req.headers['Authorization'];
    if (urlPath.startsWith('/api') && !authorizationToken) {
        resp.status(401).json({ message: 'invalid token' });
        return;
    }
    next();
}
export default authorizationMiddleware;
