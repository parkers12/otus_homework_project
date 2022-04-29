import connection from '../model/db';

type TItem = {
    itemId: number,
    itemName: string,
    itemCat: string,
    itemCatEng: string,
    itemArt: number,
    itemDesc: string,
    itemDescLong: string,
    itemPrice: number,
    itemClass: string,
    itemColor: string,
    itemForm: string,
    itemMetal: string,
    itemSort: string,
    itemSize: string,
    itemActive: number,
    itemNew: number,
    itemHit: number,
    itemGift: number,
}

export default function getCategory(req: any, res: any) {
    connection.query(
        'SELECT a.`id`, a.`name`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`desc_short`, a.`desc_long`, a.`price`, c.`classrus`, d.`colorrus`, e.`formrus`, f.`metalrus`, g.`sortrus`, a.`size_start`, a.`size_finish`, a.`activ`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h WHERE a.`category`=b.`id` AND a.`class`=c.`id` AND a.`color`=d.`id` AND a.`form`=e.`id` AND a.`metal`=f.`id` AND a.`sort`=g.`id` AND a.`size`=h.`id` AND a.`id`= ' + req.params.idItem + ';' +
        'SELECT `id`, `data` FROM `lu__pearl_size_library`',
        function (err, result: [][]) {
            if (err) {
                throw err;
            }
            //const item = [...result[0]];
            const itemData = [...result[0]];

            const sizes = [...result[1]];
            const index_start = sizes.find((item) => item.id === itemData.size_start);
            const index_finish = sizes.find((item) => item.id === itemData.size_finish);
            
            let size: string;
            if(index_start !== undefined && index_finish === undefined) {
                size = index_start["data"];
            } else if(index_start !== undefined && index_finish !== undefined) {
                size = `${index_start["data"]}-${index_finish["data"]}`;
            }

            const item: TItem = {
                itemId: itemData.id,
                itemName: itemData.name,
                itemCat: itemData.categoryrus,
                itemCatEng: itemData.categoryeng,
                itemArt: itemData.article,
                itemDesc: itemData.desc_short,
                itemDescLong: itemData.desc_long,
                itemPrice: itemData.price,
                itemClass: itemData.classrus,
                itemColor: itemData.colorrus,
                itemForm: itemData.formrus,
                itemMetal: itemData.metalrus,
                itemSort: itemData.sortrus,
                itemSize: size,
                itemActive: itemData.activ,
                itemNew: itemData.new,
                itemHit: itemData.hit,
                itemGift: itemData.gift
            }
            res.json(item);
        }
    );
    // connection.end();
}