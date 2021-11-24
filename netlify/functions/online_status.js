const { ref, set } = require("firebase/database");
const { db } = require("./services/firebase");
const authError = require("./services/authError");

exports.handler = async (event) => {
    try {
        const error = authError();
        if (error) throw error;

        const body = JSON.parse(event.body);
        if (body === null || body === undefined || body.status === null || body.status === undefined) {
            throw { // eslint-disable-line
                status: 400,
                name: "Request error",
                message: "No request body was found",
            };
        }
        // const stat = await get(ref(db, "/status"));
        await set(ref(db, "/status"), body.status);
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Successfully updated status!",
                new_online_status: body.status
            })
        };
    } catch (err) {
        return {
            statusCode: err.statusCode || 500,
            body: JSON.stringify({
                name: err.name || "Internal error",
                message: err.message || "An unknown error occured",
                date: new Date(),
                stack: err.stack || (new Error()).stack
            })
        };
    }
};
