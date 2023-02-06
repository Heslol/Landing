const jwt = require('jsonwebtoken');

const authorized = async(req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if(token) {
        try {
            const decoded = jwt.verify(token, 'secret123');

            req.userId = decoded._id;

            next();
        } catch (error) {
            console.log(error)
            res.status(403).json({
                message : 'Acces denied'
            })
        }

    } else {
        res.status(403).json({
            message : 'Acces false'
        })
    };
};

module.exports = authorized;
