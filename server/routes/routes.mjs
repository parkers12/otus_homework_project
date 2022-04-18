import express from 'express';
import { resolve } from 'path';
import connection from '../model/db.mjs';

const router = express.Router();
// const app = express();


/* delivery */
router.get("/delivery", function (req, res) {
    connection.query(
        'SELECT `id`, `name`, `link`, `name_table`, `col1`, `col2`, `col3`, `desc` FROM `lu__delivery_main` WHERE `activ` = 1;' +
        'SELECT `id`, `table`, `region`, `method_delivery`, `price_delivery`, `digit_price_delivery`, `price_currentcy`, `method_payment` FROM `lu__delivery` WHERE `activ` = 1;',
        function (err, result) {
            if (err) {
                throw err;
            } else {
                const arraySubMenu = [...result[0]];
                const arrayContent = [...result[1]];
                const tree = [];

                arraySubMenu.forEach((el) => {
                    const titles = [];
                    titles.push(el["col1"], el["col2"], el["col3"]);

                    const rows = [];

                    for (let i = 0; i < arrayContent.length; i += 1) {
                        if (el["id"] === arrayContent[i]["table"]) {
                            let region;
        
                            if (arrayContent[i]["table"] === 2) {
                                region = arrayContent[i]["method_delivery"];
                            } else {
                                region = arrayContent[i]["region"];
                            }
        
                            const rowsArray = {
                                idRow: arrayContent[i]["id"],
                                region: region,
                                price: arrayContent[i]["price_delivery"],
                                priceNumber: arrayContent[i]["digit_price_delivery"],
                                currentcy: arrayContent[i]["price_currentcy"],
                                desc: arrayContent[i]["method_payment"]
                            }
                            rows.push(rowsArray);
                        }
                    }

                    const table = {
                        titles,
                        rows
                    }

                    const item = {
                        id: el["id"],
                        link: el["link"],
                        title: el["name"],
                        table: table,
                        desc: el["desc"]
                    }
                    tree.push(item);
                });
                res.json(tree);
            }
        }
    );
    // connection.end();
});

/* actions */
router.get("/actions", function (req, res) {
    connection.query(
        'SELECT `id`, `link`, `title`, `text`, `picture` FROM `lu__actions` WHERE `activ` = 1;',
        function (err, result) {
            if (err) {
                throw err;
            } else {
                console.log(result);
                res.json(result);
            }
        }
    );
    // connection.end();
});


/* map */
router.get("/map", function (req, res) {
    connection.query(
        'SELECT `id`, `namerus`, `nameeng`, `blok`, `order`, `head` FROM `lu__menu` WHERE `blok` = 1 OR `blok` = 5 OR `blok` = 6; SELECT `id`, `categoryrus`, `categoryeng` FROM `lu__category` WHERE `activ` = 1; SELECT b.`id`, b.`name`, a.`categoryeng`, b.`category`, b.`activ`, b.`bride` FROM `lu__category` a, `lu__catalog` b WHERE a.`id` = b.`category`;',
        function (err, result) {
            let mapSite;
            if (err) {
                throw err;
            } else {
                const arrayMenu = [...result[0]];
                const arrayCategory = [...result[1]];
                const arrayCatalog = [...result[2]];
                const tree = [];

                arrayMenu.forEach((el, j, arrayMenu) => {
                    if (el["head"] === 0) {
                        const childrenArray = [];
                        if (el["id"] === 33) {
                            let parentElem;
                            for (let i = 0; i < arrayCategory.length; i += 1) {
                                const elem = [];
                                for (let j = 0; j < arrayCatalog.length; j += 1) {
                                    let childElem;
                                    if (arrayCatalog[j]["activ"] === 1 && arrayCategory[i]["id"] === 8) {
                                        childElem = {
                                            "id": arrayCatalog[j]["id"],
                                            "name": arrayCatalog[j]["name"],
                                            "nameeng": arrayCatalog[j]["nameeng"]
                                        }

                                        elem.push(childElem);

                                    } else if (arrayCatalog[j]["activ"] === 1 && arrayCategory[i]["id"] === arrayCatalog[j]["category"]) {
                                        childElem = {
                                            "id": arrayCatalog[j]["id"],
                                            "name": arrayCatalog[j]["name"],
                                            "nameeng": arrayCatalog[j]["nameeng"]
                                        }

                                        elem.push(childElem);
                                    }
                                }

                                parentElem = {
                                    "namerus": arrayCategory[i]["namerus"],
                                    "nameeng": arrayCategory[i]["nameeng"],
                                    "children": elem
                                }

                                childrenArray.push(parentElem);
                            }
                        } else if (el["id"] === 34) {
                            let parentElem;
                            for (let i = 0; i < arrayCategory.length; i += 1) {
                                const elem = [];
                                for (let j = 0; j < arrayCatalog.length; j += 1) {
                                    let childElem;
                                    if (arrayCatalog[j]["activ"] === 0 && arrayCategory[i]["id"] === 8) {
                                        childElem = {
                                            "id": arrayCatalog[j]["id"],
                                            "name": arrayCatalog[j]["name"],
                                            "nameeng": arrayCatalog[j]["nameeng"]
                                        }

                                        elem.push(childElem);

                                    } else if (arrayCatalog[j]["activ"] === 0 && arrayCategory[i]["id"] === arrayCatalog[j]["category"]) {
                                        childElem = {
                                            "id": arrayCatalog[j]["id"],
                                            "name": arrayCatalog[j]["name"],
                                            "nameeng": arrayCatalog[j]["nameeng"]
                                        }

                                        elem.push(childElem);
                                    }
                                }

                                parentElem = {
                                    "namerus": arrayCategory[i]["namerus"],
                                    "nameeng": arrayCategory[i]["nameeng"],
                                    "children": elem
                                }

                                childrenArray.push(parentElem);
                            }
                        } else {
                            for (let i = 0; i < arrayMenu.length; i += 1) {
                                if (el["id"] === arrayMenu[i]["head"]) {
                                    const childElem = {
                                        "namerus": arrayMenu[i]["namerus"],
                                        "nameeng": arrayMenu[i]["nameeng"],
                                    }
                                    childrenArray.push(childElem);
                                }
                            }
                        }

                        const parentElem = {
                            "namerus": el["namerus"],
                            "nameeng": el["nameeng"],
                            "children": childrenArray
                        }
                        tree.push(parentElem);
                    }
                });
                mapSite = { tree };
            }
            res.json(mapSite);
        }
    );
    // connection.end();
});

/* filter */
router.get("/filter/:filter/:idFil/:idCat?/:page?", function (req, res) {
    const filterPartId = Number(req.params.filter);
    const filterId = Number(req.params.idFil);
    const filterCatId = Number(req.params.idCat);
    const page = Number(req.params.page);
    const items = [];
    const category = [];

    let query;
    let queryGroup = '';
    
    switch (filterPartId) {
        case 1: // class
            if (filterCatId) {
                query = ' AND a.`class`= ' + filterId + ' AND a.`category` = ' + filterCatId;
            } else {
                query = ' AND a.`class`= ' + filterId;
            }
        break;
        case 2: // color
            if (filterCatId) {
                query = ' AND a.`color`= ' + filterId + ' AND a.`category` = ' + filterCatId;
            } else {
                query = ' AND a.`color`= ' + filterId;
            }
        break;
        case 3: // size
            if (filterId === 2) { // 5 - 7 mm
                if (filterCatId) {
                    query = ' AND i.`id` >= 2 AND j.`id` <= 6 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND i.`id` >= 2 AND j.`id` <= 6';
                }
            } else if (filterId === 3) { // 7 - 9 mm
                if (filterCatId) {
                    query = ' AND i.`id` >= 6 AND j.`id` <= 10 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND i.`id` >= 6 AND j.`id` <= 10';
                }
            } else if (filterId === 11) { // 9 - 11 mm
                if (filterCatId) {
                    query = ' AND i.`id` >= 10 AND j.`id` <= 14 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND i.`id` >= 10 AND j.`id` <= 14';
                }
            } else {
                if (filterCatId) {
                    query = ' AND i.`id` >= 14 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND i.`id` >= 14';
                }
            }
        break;
        case 4: // form
            if (filterCatId) {
                query = ' AND a.`form`= ' + filterId + ' AND a.`category` = ' + filterCatId;
            } else {
                query = ' AND a.`form`= ' + filterId;
            }
        break;
        case 5: // metal
            if (filterCatId) {
                query = ' AND a.`metal`= ' + filterId + ' AND a.`category` = ' + filterCatId;
            } else {
                query = ' AND a.`metal`= ' + filterId;
            }
        break;
        case 6: // price
            if (filterId === 6) {
                if (filterCatId) {
                    query = ' AND a.`price` > 1000 AND a.`price` <= 3000 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND a.`price` > 1000 AND a.`price` <= 3000';
                }
            } else if (filterId === 7) {
                if (filterCatId) {
                    query = ' AND a.`price` > 3000 AND a.`price` <= 5000 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND a.`price` > 3000 AND a.`price` <= 5000';
                }
            } else if (filterId === 8) {
                if (filterCatId) {
                    query = ' AND a.`price` > 5000 AND a.`price` <= 7000 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND a.`price` > 5000 AND a.`price` <= 7000';
                }
            } else if (filterId === 9) {
                if (filterCatId) {
                    query = ' AND a.`price` > 7000 AND a.`price` <= 9000 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND a.`price` > 7000 AND a.`price` <= 9000';
                }
            } else if (filterId === 10) {
                if (filterCatId) {
                    query = ' AND a.`price` > 9000 AND a.`category` = ' + filterCatId;
                } else {
                    query = ' AND a.`price` > 9000';
                }
            }
        break;
        case 8: // group
            query = '';
            queryGroup = 'SELECT a.`id_group`, a.`id_item`, c.`name`, c.`price`, b.`namerus`, b.`link` FROM `lu__groups_item` a, `lu__groups` b, `lu__catalog` c WHERE a.`id_group` = b.`id` AND a.`id_item` = c.`id` AND c.`activ` = 1 AND a.`id_group` = ' + filterId + ';';
        break;
    }

    connection.query(
        'SELECT `id`, `table`, `filter` FROM `lu__filters` WHERE `id` = ' + filterPartId + ';' +
        'SELECT a.`id`, b.`id`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`name`, a.`desc_short`, a.`desc_long`, a.`price`, c.`classrus`, g.`sortrus`, d.`colorrus`, h.`size`, i.`id`, i.`data`, j.`id`, j.`data`, e.`formrus`, f.`metalrus`, a.`lenght`, a.`bride`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h, `lu__pearl_size_library` i, `lu__pearl_size_library` j WHERE a.`category` = b.`id` AND a.`class` = c.`id` AND a.`color` = d.`id` AND a.`form` = e.`id` AND a.`metal` = f.`id` AND a.`sort` = g.`id` AND a.`size` = h.`id` AND a.`size_start` = i.`id` AND a.`size_finish` = j.`id` AND a.`activ` = 1' + query + ';' +
        'SELECT `id`, `categoryrus`, `categoryeng` FROM `lu__category` WHERE `activ` = 1;' +
        queryGroup,
        function (err, result) {
            if (err) {
                throw err;
            } else {
                const filterListArr = {
                    "filterListId": result[0][0]["id"],
                    "filterListRus": result[0][0]["table"],
                    "filterListEng": result[0][0]["filter"],
                }

                if (filterPartId != 8) {
                    result[1].forEach((el) => {
                        const filterItemArr = {
                            "itemId": el["id"],
                            //"itemCatId": el["category"],
                            "itemCat": el["categoryrus"],
                            "itemCatEng": el["categoryeng"],
                            "itemArt": el["article"],
                            "itemName": el["name"],
                            "itemDesc": el["desc_short"],
                            "itemDescLong": el["desc_long"],
                            "itemClass": el["classrus"],
                            "itemSort": el["sortrus"],
                            "itemColor": el["colorrus"],
                            "itemSize": el["size"],
                            "itemForm": el["formrus"],
                            "itemMetal": el["metalrus"],
                            "itemLenght": el["lenght"],
                            "itemBride": el["bride"],
                            "itemNew": el["new"],
                            "itemHit": el["hit"],
                            "itemGift": el["gift"],
                        }
                        items.push(filterItemArr);
                    });
                }

                result[2].forEach((el) => {
                    const filterCategory = {
                        "filterCategoryId": el["id"],
                        "filterCategoryRus": el["categoryrus"],
                        "filterCategoryEng": el["categoryeng"],
                    }
                    category.push(filterCategory);
                });

                if (filterPartId === 8) {
                    result[3].forEach((el) => {
                        const filterGroup = {
                            "filterIdGroup": el["id_group"],
                            "filterIdItem": el["id_item"],
                            "filterName": el["name"],
                            "filterPrice": el["price"],
                            "filterNamerus": el["namerus"],
                            "filterLink": el["link"],
                        }
                        items.push(filterGroup);
                    });
                } 

                const filterArr = {
                    "filter": filterListArr,
                    "items": items,
                    "category": category
                }

                res.json(filterArr);
            }
        }
    );
    // connection.end();
});

/* item */
router.get("/:category/1/:idItem/", function (req, res) {
    connection.query(
        'SELECT a.`id`, a.`name`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`desc_short`, a.`desc_long`, a.`lenght`, a.`price`, c.`classrus`, d.`colorrus`, e.`formrus`, f.`metalrus`, g.`sortrus`, h.`size`, a.`activ`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h WHERE a.`category`=b.`id` AND a.`class`=c.`id` AND a.`color`=d.`id` AND a.`form`=e.`id` AND a.`metal`=f.`id` AND a.`sort`=g.`id` AND a.`size`=h.`id` AND a.`id`= ' + req.params.idItem + ';',
        function (err, result) {
            if (err) {
                throw err;
            } else {
                const itemData = result[0];
                const item = {
                    id: itemData["id"],
                    name: itemData["name"],
                    categoryrus: itemData["categoryrus"],
                    categoryeng: itemData["categoryeng"],
                    article: itemData["article"],
                    desc: itemData["desc_short"],
                    descLong: itemData["desc_long"],
                    lenght: itemData["lenght"],
                    price: itemData["price"],
                    classrus: itemData["classrus"],
                    colorrus: itemData["colorrus"],
                    formrus: itemData["formrus"],
                    metalrus: itemData["metalrus"],
                    sortrus: itemData["sortrus"],
                    size: itemData["size"],
                    activ: itemData["activ"],
                    new: itemData["new"],
                    hit: itemData["hit"],
                    gift: itemData["gift"]
                }
                res.json(item);
            }
        }
    );
    // connection.end();
});

/* category */
// router.get("/category", function (req, res) {
//     connection.query('SELECT `id`, `categoryrus`, `categoryeng`, `header`, `desc`, `desc_long` FROM `lu__category` WHERE `activ` = 1 ORDER by `order`;',
//     function (err, result) {
//         if (err) {
//             throw err;
//         } else {
//             res.json(result);
//         }
//     });
// });


/* category list */
/*
router.get("/:category", function (req, res) {
    // connection.query('SELECT `id`, `categoryrus`, `categoryeng`, `header`, `desc`, `desc_long` FROM `lu__category` WHERE `activ` = 1 ORDER by `order`;',
    connection.query(
        'SELECT a.`id`, b.`id`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`name`, a.`desc_short`, a.`desc_long`, a.`price`, c.`classrus`, g.`sortrus`, d.`colorrus`, h.`size`, i.`id`, i.`data`, j.`id`, j.`data`, e.`formrus`, f.`metalrus`, a.`lenght`, a.`bride`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h, `lu__pearl_size_library` i, `lu__pearl_size_library` j WHERE a.`category` = b.`id` AND a.`class` = c.`id` AND a.`color` = d.`id` AND a.`form` = e.`id` AND a.`metal` = f.`id` AND a.`sort` = g.`id` AND a.`size` = h.`id` AND a.`size_start` = i.`id` AND a.`size_finish` = j.`id` AND a.`category` = (SELECT `id` FROM `lu__category` WHERE `categoryeng` = "' + req.params.category + '");',
        function (err, result) {
            if (err) {
                throw err;
            } else {
                let items = [];
                result.forEach((el) => {
                    const filterArr = {
                        "itemId": el["id"],
                        //"itemCatId": el["category"],
                        "itemCat": el["categoryrus"],
                        "itemCatEng": el["categoryeng"],
                        "itemArt": el["article"],
                        "itemName": el["name"],
                        "itemDesc": el["desc_short"],
                        "itemDescLong": el["desc_long"],
                        "itemClass": el["classrus"],
                        "itemSort": el["sortrus"],
                        "itemColor": el["colorrus"],
                        "itemSize": el["size"],
                        "itemForm": el["formrus"],
                        "itemMetal": el["metalrus"],
                        "itemLenght": el["lenght"],
                        "itemBride": el["bride"],
                        "itemNew": el["new"],
                        "itemHit": el["hit"],
                        "itemGift": el["gift"],
                    }
                    items.push(filterArr);
                });
                res.json(items);
            }
        }
    );
    // // connection.end();
});
*/


/* other pages */
/*
router.get("/:page", function(req, res) {
    connection.query(
        'SELECT `id`, `header`, `content` FROM `lu__pages` WHERE `pages` = "' + req.params.page + '";',
        function (err, result) {
            if (err) {
                throw err;
            } else {
                res.json(result);
            }
        }
    );
    // connection.end();
});
*/

router.get("/:page", function(req, res) {
    connection.query(
        'SELECT a.`id`, b.`id`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`name`, a.`desc_short`, a.`desc_long`, a.`price`, c.`classrus`, g.`sortrus`, d.`colorrus`, h.`size`, i.`id`, i.`data`, j.`id`, j.`data`, e.`formrus`, f.`metalrus`, a.`lenght`, a.`bride`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h, `lu__pearl_size_library` i, `lu__pearl_size_library` j WHERE a.`category` = b.`id` AND a.`class` = c.`id` AND a.`color` = d.`id` AND a.`form` = e.`id` AND a.`metal` = f.`id` AND a.`sort` = g.`id` AND a.`size` = h.`id` AND a.`size_start` = i.`id` AND a.`size_finish` = j.`id` AND a.`category` = (SELECT `id` FROM `lu__category` WHERE `categoryeng` = "' + req.params.page + '");' +
        'SELECT `id`, `pages`, `header`, `content` FROM `lu__pages`;' +
        'SELECT `id`, `name_category`, `categoryrus`, `categoryeng` FROM `lu__category`;',
        function (err, result) {
            if (err) {
                throw err;
            } else {
                const page = req.params.page;
                const categoryList = result[2].find(obj => obj["categoryeng"] === page);
                const pageList = result[1].find(obj => obj["pages"] === page);
                let currentCat;
                let currentPage;
                if (categoryList !== undefined) {
                    currentCat = categoryList["categoryeng"];
                } else if (pageList !== undefined) {
                    currentPage = pageList["pages"];
                }

                if (currentCat === page) { 
                    let category = [];  
                    result[0].forEach((el) => {
                        const catArr = {
                            "catId": el["id"],
                            //"catCatId": el["category"],
                            "catRus": el["categoryrus"],
                            "catEng": el["categoryeng"],
                            "catArt": el["article"],
                            "catName": el["name"],
                            "catDesc": el["desc_short"],
                            "catDescLong": el["desc_long"],
                            "catClass": el["classrus"],
                            "catSort": el["sortrus"],
                            "catColor": el["colorrus"],
                            "catSize": el["size"],
                            "catForm": el["formrus"],
                            "catMetal": el["metalrus"],
                            "catLenght": el["lenght"],
                            "catBride": el["bride"],
                            "catNew": el["new"],
                            "catHit": el["hit"],
                            "catGift": el["gift"],
                        }
                        category.push(catArr);
                    });
                    res.json(category);
                } else if (currentPage === page) {
                    let pageData = [];
                    result[1].forEach((el) => {
                        if (page === el["pages"]) {
                            const pageArr = {
                                "pageId": el["id"],
                                "pageName": el["pages"],
                                "pageHead": el["header"],
                                "pageCont": el["content"],
                            }
                            pageData.push(pageArr);
                        }
                    });
                    res.json(pageData);
                } else {
                    res.status(404).sendFile(resolve("../public/404.html"));
                }
            }
        }
    );
    // connection.end();
});

/* 404 */
/*
router.get('*', (req, res) => {
    console.log(res);
    res.status(404).sendFile(resolve(__dirname, "../../public/404.html"));
})
*/

export default router;