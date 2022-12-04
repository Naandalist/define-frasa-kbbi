"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SearchWord_1 = require("../utils/SearchWord");
class KbbiController {
    static async search(req, res) {
        try {
            const { kata } = req.params;
            const result = await (0, SearchWord_1.SearchWord)(kata);
            if (!result) {
                res.status(404).json({
                    status: false,
                    message: "Kata tidak ditemukan atau terkena limit",
                });
                return;
            }
            ;
            res.status(200).json({
                status: true,
                message: 'success',
                data: result,
            });
        }
        catch (error) {
            res.status(500).json({
                status: false,
                message: error.message || "Internal server error!",
            });
        }
    }
}
exports.default = KbbiController;
//# sourceMappingURL=KbbiController.js.map