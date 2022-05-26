import connection from "../model/db";

type TItem = {
  id: number;
  name: string;
  categoryrus: string;
  categoryeng: string;
  article: number;
  desc_short: string;
  desc_long: string;
  price: number;
  classrus: string;
  colorrus: string;
  formrus: string;
  metalrus: string;
  sortrus: string;
  size_start: number | string;
  size_finish: number | string;
  activ: number;
  new: number;
  hit: number;
  gift: number;
};

// type TItem = {
//   itemId: number;
//   itemName: string;
//   itemCat: string;
//   itemCatEng: string;
//   itemArt: number;
//   itemDesc: string;
//   itemDescLong: string;
//   itemPrice: number;
//   itemClass: string;
//   itemColor: string;
//   itemForm: string;
//   itemMetal: string;
//   itemSort: string;
//   itemSize: string;
//   itemActive: number;
//   itemNew: number;
//   itemHit: number;
//   itemGift: number;
// };

type TSize = {
  id: number;
  data: string;
};

export default function getCategory(req: any, res: any) {
  connection.query(
    `SELECT a.id, a.name, b.categoryrus, b.categoryeng, a.article, a.desc_short, a.desc_long, a.price, c.classrus, d.colorrus, e.formrus, f.metalrus, g.sortrus, a.size_start, a.size_finish, a.activ, a.new, a.hit, a.gift FROM lu__catalog a, lu__category b, lu__pearl_class c, lu__pearl_color d, lu__pearl_form e, lu__pearl_metal f, lu__pearl_sort g, lu__pearl_size h WHERE a.category = b.id AND a.class = c.id AND a.color = d.id AND a.form = e.id AND a.metal = f.id AND a.sort = g.id AND a.size = h.id AND a.id = ${req.params.idItem};` +
      `SELECT id, data FROM lu__pearl_size_library`,
    (err, result: [TItem[], TSize[]]) => {
      if (err) {
        throw err;
      }
      const itemData = result[0][0];
      const sizes = result[1];

      const indexStart = sizes.find((item) => item.id === itemData.size_start);
      const indexFinish = sizes.find(
        (item) => item.id === itemData.size_finish
      );

      let sizeSt = "";
      let sizeFn = "";

      if (indexStart !== undefined && indexFinish === undefined) {
        sizeSt = indexStart.data;
      } else if (indexStart !== undefined && indexFinish !== undefined) {
        // size = `${indexStart["data"]}-${indexFinish["data"]}`;
        sizeSt = indexStart.data;
        sizeFn = indexFinish.data;
      }

      const item: TItem = {
        id: itemData.id,
        name: itemData.name,
        categoryrus: itemData.categoryrus,
        categoryeng: itemData.categoryeng,
        article: itemData.article,
        desc_short: itemData.desc_short,
        desc_long: itemData.desc_long,
        price: itemData.price,
        classrus: itemData.classrus,
        colorrus: itemData.colorrus,
        formrus: itemData.formrus,
        metalrus: itemData.metalrus,
        sortrus: itemData.sortrus,
        size_start: sizeSt,
        size_finish: sizeFn,
        activ: itemData.activ,
        new: itemData.new,
        hit: itemData.hit,
        gift: itemData.gift,
      };
      res.json(item);
    }
  );
  // connection.end();
}
