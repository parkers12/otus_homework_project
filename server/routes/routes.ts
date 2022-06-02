import express from "express";

import getData from "../controllers/getData";
import getDelivery from "../controllers/getDelivery";
import getActions from "../controllers/getActions";
import getMap from "../controllers/getMap";
import getFilter from "../controllers/getFilter";
import getItem from "../controllers/getItem";
import getPage from "../controllers/getPage";

const router = express.Router();

router.get("/api/data", getData);
router.get("/api/actions", getActions);
router.get("/api/delivery", getDelivery);
router.get("/api/map", getMap);
router.get("/api/filter/:filter/:idFil/:idCat?/:page?", getFilter);
router.get("/api/:category/1/:idItem/", getItem);
router.get("/api/:page", getPage);

export default router;
