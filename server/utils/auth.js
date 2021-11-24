const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const API_KEY = process.env.API_KEY;

module.exports = async (req, res, next) => {
    const { api_key: apiKey } = req.query;

    if (apiKey === API_KEY) {
        return next();
    } else {
        return res.status(401).json({
            status: 401,
            name: "Unauthorized",
            message: "API_KEY not recognized!",
            date: new Date(),
            stack: (new Error()).stack
        });
    }
};
