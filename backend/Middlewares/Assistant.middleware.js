// Middlewares for Assistant JWT Authentication
import firebase from 'firebase-admin';
/**
 * Middleware to authenticate Token
 * @class
 */
export default class Authenticator{
    /**
     * Middleware to authenticate Token
     * @param {Object} req - The request object
     * @param {Object} res - The response object
     * @param {Function} next - The next middleware function
     * @returns {Object} - The response object
     */
    static async TokenAuthenticator(req, res, next){
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];
        // added comment
        if (!token) {
            return res.status(403).send({ message: "Unauthorized - No token provided!" });
        }
        try {
            // Verify the token using Firebase Admin SDK
            const decodedToken = await firebase.auth().verifyIdToken(token);
            console.log('decodedToken: ', decodedToken);
            req.user_decoded_details = decodedToken;
            next();
        } catch (error) {
            console.error(error);
            return res.status(401).json({ message: 'Unauthorized - Invalid token' });
        }
    }

}
  