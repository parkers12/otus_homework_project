import express from 'express';

import getDelivery from '../controllers/getDelivery.mjs';
import getActions from '../controllers/getActions.mjs';
import getMap from '../controllers/getMap.mjs';
import getFilter from '../controllers/getFilter.mjs'; 
import getItem from '../controllers/getItem.mjs'; 
import getPage from '../controllers/getPage.mjs';

const router = express.Router();

router.get("/delivery", getDelivery);
router.get("/actions", getActions);
router.get("/map", getMap);
router.get("/filter/:filter/:idFil/:idCat?/:page?", getFilter);
router.get("/:category/1/:idItem/", getItem);
router.get("/:page", getPage);

export default router;