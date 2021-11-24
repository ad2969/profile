const { ref, set } = require("firebase/database");
const { db } = require("../services/firebase");

module.exports = async (req, res) => {
    try {
        const { status } = req.body;
        if (status === null || status === undefined) {
            throw { // eslint-disable-line
                status: 400,
                name: "Request error",
                message: "No request body was found",
            };
        }
        // const stat = await get(ref(db, "/status"));
        await set(ref(db, "/status"), status);
        res.status(201).json({ message: "Successfully updated status!", new_online_status: status });
    } catch (err) {
        res.status(err.status || 500).json({
            status: err.status || 500,
            name: err.name || "Internal error",
            message: err.message || "An unknown error occured",
            date: new Date(),
            stack: err.stack || (new Error()).stack
        });
    }
};
