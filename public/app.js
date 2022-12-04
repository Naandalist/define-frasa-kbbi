"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const api_1 = require("./routes/api");
class App {
    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    async listen() {
        this.app.listen(process.env.PORT, () => {
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }
    getServer() {
        return this.app;
    }
    initializeMiddlewares() {
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
        this.app.use(express.json());
    }
    initializeRoutes() {
        this.app.use(api_1.default);
        this.app.use('*', function (req, res) {
            res.status(200).json({
                status: 404,
                message: 'Page Not Found'
            });
        });
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map