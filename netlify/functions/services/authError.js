const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const API_KEY = process.env.API_KEY;

module.exports = (queries) => {
    const { api_key: apiKey } = queries;

    if (apiKey === API_KEY) {
        return false;
    } else {
        return {
            statusCode: 401,
            name: "Unauthorized",
            message: "API_KEY not recognized!",
            date: new Date(),
            stack: (new Error()).stack
        };
    }
};
