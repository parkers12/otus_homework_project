import express from "express";

import getData from "../controllers/getData";
import getDelivery from "../controllers/getDelivery";
import getActions from "../controllers/getActions";
import getMap from "../controllers/getMap";
import getFilter from "../controllers/getFilter";
import getItem from "../controllers/getItem";
import getPage from "../controllers/getPage";

const router = express.Router();

router.get("/data", getData);
router.get("/actions", getActions);
router.get("/delivery", getDelivery);
router.get("/map", getMap);
router.get("/filter/:filter/:idFil/:idCat?/:page?", getFilter);
router.get("/:category/1/:idItem/", getItem);
router.get("/:page", getPage);

export default router;
