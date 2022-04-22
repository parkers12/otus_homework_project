import connection from '../model/db.mjs';

export default function getCategory(req, res) {
    connection.query(
        'SELECT a.`id`, a.`name`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`desc_short`, a.`desc_long`, a.`lenght`, a.`price`, c.`classrus`, d.`colorrus`, e.`formrus`, f.`metalrus`, g.`sortrus`, h.`size`, a.`activ`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h WHERE a.`category`=b.`id` AND a.`class`=c.`id` AND a.`color`=d.`id` AND a.`form`=e.`id` AND a.`metal`=f.`id` AND a.`sort`=g.`id` AND a.`size`=h.`id` AND a.`id`= ' + req.params.idItem + ';',
        function (err, result) {
            if (err) {
                throw err;
            }
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
    );
    // connection.end();
}