"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const config_1 = require("../config");
const KbbiController_1 = require("../controllers/KbbiController");
const router = (0, express_1.Router)();
router.get("/", function (req, res) {
    res.status(200).json({
        message: "Selamat datang di Servis API KBBI",
        data: [
            {
                info: "Sumber data sepenuhnya dari kbbi.kemdikbud.go.id!😃😊",
                endpoint: "/entri/{frasa yang akan ditemukan}",
                example: [
                    `${config_1.default.baseUrl}/entri/investigasi`,
                    `${config_1.default.baseUrl}/entri/peperangan`,
                    `${config_1.default.baseUrl}/entri/berdagang`,
                ],
            },
        ],
    });
});
router.get("/entri/:kata", KbbiController_1.default.search);
exports.default = router;
//# sourceMappingURL=api.js.map