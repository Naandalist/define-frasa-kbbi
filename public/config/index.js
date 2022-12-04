"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const Config = {
    kbbiUrl: "https://kbbi.kemdikbud.go.id/entri",
    baseUrl: process.env.BASE_URL || "http://localhost:5000",
};
exports.default = Config;
//# sourceMappingURL=index.js.map