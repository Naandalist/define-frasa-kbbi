import { Request, Response, Router } from "express";
import Config from "../config";
import KbbiController from "../controllers/KbbiController";

const router = Router();

router.get("/", function (req: Request, res: Response) {
  console.log("req: ", req.url);
  res.status(200).json({
    message: "Selamat datang di Servis API KBBI",
    data: [
      {
        info: "Sumber data sepenuhnya dari kbbi.kemdikbud.go.id!😃😊",
        author: "https://github.com/Naandalist",
        endpoint: "/entri/{frasa yang akan ditemukan}",
      },
    ],
  });
});

router.get("/entri/:kata", KbbiController.search);

export default router;
