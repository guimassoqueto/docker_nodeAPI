import { Router } from "express";
import { getIndex, postIndex } from "../controllers/index.controller";

const router: Router = Router();

router.get('/', getIndex);
router.post('/', postIndex);

export default router;