import connection from "../model/db";

type TFilterListArr = {
  filterListId: number;
  filterListRus: string;
  filterListEng: string;
};

type TFilterItemArr = {
  itemId: number;
  itemCat: string;
  itemCatEng: string;
  itemArt: number;
  itemName: string;
  itemDesc: string;
  itemDescLong: string;
  itemClass: string;
  itemSort: string;
  itemColor: string;
  itemSize: string;
  itemForm: string;
  itemMetal: string;
  itemLenght: number;
  itemBride: number;
  itemNew: number;
  itemHit: number;
  itemGift: number;
};

type TFilterCategory = {
  filterCategoryId: number;
  filterCategoryRus: string;
  filterCategoryEng: string;
};

type TFilterGroup = {
  filterIdGroup: number;
  filterIdItem: number;
  filterName: string;
  filterPrice: number;
  filterNamerus: string;
  filterLink: string;
};

// type TFilterGrCat = {
//   group: TFilterGroup;
//   category: TFilterCategory;
// };

type TFilterGrCat = [
  {"item": TFilterItemArr},
  {"group": TFilterGroup}
];

export default function (req: any, res: any) {
  const filterPartId = Number(req.params.filter);
  const filterId = Number(req.params.idFil);
  const filterCatId = Number(req.params.idCat);
  const page = Number(req.params.page);
  const items: TFilterGrCat[] = [];
  const category: TFilterCategory[] = [];

  let query;
  let queryGroup = "";

  switch (filterPartId) {
    case 1: // class
      if (filterCatId) {
        query =
          " AND a.`class`= " + filterId + " AND a.`category` = " + filterCatId;
      } else {
        query = " AND a.`class`= " + filterId;
      }
      break;
    case 2: // color
      if (filterCatId) {
        query =
          " AND a.`color`= " + filterId + " AND a.`category` = " + filterCatId;
      } else {
        query = " AND a.`color`= " + filterId;
      }
      break;
    case 3: // size
      if (filterId === 2) {
        // 5 - 7 mm
        if (filterCatId) {
          query =
            " AND i.`id` >= 2 AND j.`id` <= 6 AND a.`category` = " +
            filterCatId;
        } else {
          query = " AND i.`id` >= 2 AND j.`id` <= 6";
        }
      } else if (filterId === 3) {
        // 7 - 9 mm
        if (filterCatId) {
          query =
            " AND i.`id` >= 6 AND j.`id` <= 10 AND a.`category` = " +
            filterCatId;
        } else {
          query = " AND i.`id` >= 6 AND j.`id` <= 10";
        }
      } else if (filterId === 11) {
        // 9 - 11 mm
        if (filterCatId) {
          query =
            " AND i.`id` >= 10 AND j.`id` <= 14 AND a.`category` = " +
            filterCatId;
        } else {
          query = " AND i.`id` >= 10 AND j.`id` <= 14";
        }
      } else {
        if (filterCatId) {
          query = " AND i.`id` >= 14 AND a.`category` = " + filterCatId;
        } else {
          query = " AND i.`id` >= 14";
        }
      }
      break;
    case 4: // form
      if (filterCatId) {
        query =
          " AND a.`form`= " + filterId + " AND a.`category` = " + filterCatId;
      } else {
        query = " AND a.`form`= " + filterId;
      }
      break;
    case 5: // metal
      if (filterCatId) {
        query =
          " AND a.`metal`= " + filterId + " AND a.`category` = " + filterCatId;
      } else {
        query = " AND a.`metal`= " + filterId;
      }
      break;
    case 6: // price
      if (filterId === 6) {
        if (filterCatId) {
          query =
            " AND a.`price` > 1000 AND a.`price` <= 3000 AND a.`category` = " +
            filterCatId;
        } else {
          query = " AND a.`price` > 1000 AND a.`price` <= 3000";
        }
      } else if (filterId === 7) {
        if (filterCatId) {
          query =
            " AND a.`price` > 3000 AND a.`price` <= 5000 AND a.`category` = " +
            filterCatId;
        } else {
          query = " AND a.`price` > 3000 AND a.`price` <= 5000";
        }
      } else if (filterId === 8) {
        if (filterCatId) {
          query =
            " AND a.`price` > 5000 AND a.`price` <= 7000 AND a.`category` = " +
            filterCatId;
        } else {
          query = " AND a.`price` > 5000 AND a.`price` <= 7000";
        }
      } else if (filterId === 9) {
        if (filterCatId) {
          query =
            " AND a.`price` > 7000 AND a.`price` <= 9000 AND a.`category` = " +
            filterCatId;
        } else {
          query = " AND a.`price` > 7000 AND a.`price` <= 9000";
        }
      } else if (filterId === 10) {
        if (filterCatId) {
          query = " AND a.`price` > 9000 AND a.`category` = " + filterCatId;
        } else {
          query = " AND a.`price` > 9000";
        }
      }
      break;
    case 8: // group
      query = "";
      queryGroup =
        "SELECT a.`id_group`, a.`id_item`, c.`name`, c.`price`, b.`namerus`, b.`link` FROM `lu__groups_item` a, `lu__groups` b, `lu__catalog` c WHERE a.`id_group` = b.`id` AND a.`id_item` = c.`id` AND c.`activ` = 1 AND a.`id_group` = " +
        filterId +
        ";";
      break;
  }

  connection.query(
    "SELECT `id`, `table`, `filter` FROM `lu__filters` WHERE `id` = " +
      filterPartId +
      ";" +
      "SELECT a.`id`, b.`id`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`name`, a.`desc_short`, a.`desc_long`, a.`price`, c.`classrus`, g.`sortrus`, d.`colorrus`, h.`size`, i.`id`, i.`data`, j.`id`, j.`data`, e.`formrus`, f.`metalrus`, a.`lenght`, a.`bride`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h, `lu__pearl_size_library` i, `lu__pearl_size_library` j WHERE a.`category` = b.`id` AND a.`class` = c.`id` AND a.`color` = d.`id` AND a.`form` = e.`id` AND a.`metal` = f.`id` AND a.`sort` = g.`id` AND a.`size` = h.`id` AND a.`size_start` = i.`id` AND a.`size_finish` = j.`id` AND a.`activ` = 1" +
      query +
      ";" +
      "SELECT `id`, `categoryrus`, `categoryeng` FROM `lu__category` WHERE `activ` = 1;" +
      queryGroup,
    function (err, result: [][]) {
      if (err) {
        throw err;
      } else {
        // console.log(result, "!");
        //console.log(result[0][0], "!")
        // if(result[0][0] !== undefined){
          // const filterListArr: TFilterListArr = {
          //   filterListId: result[0][0].id,
          //   filterListRus: result[0][0].filter,
          //   filterListEng: result[0][0].table
          // };
        // }
        

        if (filterPartId != 8) {
          result[1].forEach((el: any) => {
            const filterItemArr: TFilterItemArr = {
              itemId: el["id"],
              itemCat: el["categoryrus"],
              itemCatEng: el["categoryeng"],
              itemArt: el["article"],
              itemName: el["name"],
              itemDesc: el["desc_short"],
              itemDescLong: el["desc_long"],
              itemClass: el["classrus"],
              itemSort: el["sortrus"],
              itemColor: el["colorrus"],
              itemSize: el["size"],
              itemForm: el["formrus"],
              itemMetal: el["metalrus"],
              itemLenght: el["lenght"],
              itemBride: el["bride"],
              itemNew: el["new"],
              itemHit: el["hit"],
              itemGift: el["gift"],
            };
            //--items.push(filterItemArr);
          });
        }

        result[2].forEach((el: any) => {
          const filterCategory: TFilterCategory = {
            filterCategoryId: el["id"],
            filterCategoryRus: el["categoryrus"],
            filterCategoryEng: el["categoryeng"],
          };
          category.push(filterCategory);
        });

        if (filterPartId === 8) {
          result[3].forEach((el: any) => {
            const filterGroup: TFilterGroup = {
              filterIdGroup: el["id_group"],
              filterIdItem: el["id_item"],
              filterName: el["name"],
              filterPrice: el["price"],
              filterNamerus: el["namerus"],
              filterLink: el["link"],
            };
            //--items.push(filterGroup);
          });
        }

        const filterArr = {
          //--filter: filterListArr,
          items: items,
          category: category,
        };

        res.json(filterArr);
      }
    }
  );
  // connection.end();
}
