import { Request, Response, Router } from "express";
import Config from "../config";
import KbbiController from "../controllers/KbbiController";

const router = Router();

router.get("/", function (req: Request, res: Response) {
  res.status(200).json({
    message: "Selamat datang di Servis API KBBI",
    data: [
      {
        info: "Sumber data sepenuhnya dari kbbi.kemdikbud.go.id!😃😊",
        endpoint: "/entri/{frasa yang akan ditemukan}",
        example: [
          `${Config.baseUrl}/entri/investigasi`,
          `${Config.baseUrl}/entri/peperangan`,
          `${Config.baseUrl}/entri/berdagang`,
        ],
      },
    ],
  });
});

router.get("/entri/:kata", KbbiController.search);

export default router;
