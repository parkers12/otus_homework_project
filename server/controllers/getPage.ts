import connection from "../model/db";
import { resolve } from "path";

type TCatArr = {
  catId: number;
  catRus: string;
  catEng: string;
  catArt: number;
  catName: string;
  catDesc: string;
  catDescLong: string;
  catClass: string;
  catSort: string;
  catColor: string;
  catSize: string;
  catForm: string;
  catMetal: string;
  catLenght: number;
  catBride: number;
  catNew: number;
  catHit: number;
  catGift: number;
};

type TPageArr = {
  pageId: number;
  pageName: string;
  pageHead: string;
  pageCont: string;
};

export default function getPage(req: any, res: any) {
  connection.query(
    'SELECT a.`id`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`name`, a.`desc_short`, a.`desc_long`, a.`price`, c.`classrus`, g.`sortrus`, d.`colorrus`, a.`size_start`, a.`size_finish`, e.`formrus`, f.`metalrus`, a.`lenght`, a.`bride`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g WHERE a.`category` = b.`id` AND a.`class` = c.`id` AND a.`color` = d.`id` AND a.`form` = e.`id` AND a.`metal` = f.`id` AND a.`sort` = g.`id` AND a.`category` = (SELECT `id` FROM `lu__category` WHERE `categoryeng` = "' +
      req.params.page +
      '");' +
    "SELECT `id`, `pages`, `header`, `content` FROM `lu__pages`;" +
    "SELECT `id`, `name_category`, `categoryrus`, `categoryeng` FROM `lu__category`;" +
    "SELECT `id`, `data` FROM `lu__pearl_size_library`",
    function (err, result: [][]) {
      if (err) {
        throw err;
      }
      const page = req.params.page;
      const categoryList = result[2].find(
        (obj) => obj["categoryeng"] === page
      );
      const pageList = result[1].find((obj) => obj["pages"] === page);
      let currentCat;
      let currentPage;
      if (categoryList !== undefined) {
        currentCat = categoryList["categoryeng"];
      } else if (pageList !== undefined) {
        currentPage = pageList["pages"];
      }

      if (currentCat === page) {
        const sizes = [...result[3]];

        let category: TCatArr[] = [];
        result[0].map((el: any) => {
          const index_start = sizes.find(
            (item) => item["id"] === el.size_start
          );
          const index_finish = sizes.find(
            (item) => item["id"] === el.size_finish
          );

          let size = "";
          if (index_start !== undefined && index_finish === undefined) {
            size = index_start["data"];
          } else if (
            index_start !== undefined &&
            index_finish !== undefined
          ) {
            size = `${index_start["data"]}-${index_finish["data"]}`;
          }

          const catArr: TCatArr = {
            catId: el.id,
            catRus: el.categoryrus,
            catEng: el.categoryeng,
            catArt: el.article,
            catName: el.name,
            catDesc: el.desc_short,
            catDescLong: el.desc_long,
            catClass: el.classrus,
            catSort: el.sortrus,
            catColor: el.colorrus,
            catSize: size,
            catForm: el.formrus,
            catMetal: el.metalrus,
            catLenght: el.lenght,
            catBride: el.bride,
            catNew: el.new,
            catHit: el.hit,
            catGift: el.gift,
          };
          category.push(catArr);
        });

        res.json(category);
      } else if (currentPage === page) {
        let pageData: TPageArr[] = [];
        result[1].forEach((el: any) => {
          if (page === el["pages"]) {
            const pageArr: TPageArr = {
              pageId: el["id"],
              pageName: el["pages"],
              pageHead: el["header"],
              pageCont: el["content"],
            };
            pageData.push(pageArr);
          }
        });

        res.json(pageData);
      } else {
        res.status(404).sendFile(resolve("../public/404.html"));
      }
    }
  );
  // connection.end();
}
