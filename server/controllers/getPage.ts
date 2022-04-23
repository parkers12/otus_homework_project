import connection from '../model/db';
import { resolve } from 'path';

export default function getPage(req, res) {
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
                    console.log(pageData);
                    res.json(pageData);
                } else {
                    res.status(404).sendFile(resolve("../public/404.html"));
                }
            }
        }
    );
    // connection.end();
}