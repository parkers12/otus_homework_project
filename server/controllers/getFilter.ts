import connection from "../model/db";

type TFilterListArr = {
  id: number;
  table: string;
  filter: string;
};

type TFilterItemArr = {
  id: number;
  categoryrus: string;
  categoryeng: string;
  article: number;
  name: string;
  desc_short: string;
  desc_long: string;
  price: number;
  classrus: string;
  sortrus: string;
  colorrus: string;
  size: string;
  data: number;
  formrus: string;
  metalrus: string;
  lenght: number;
  bride: number;
  new: number;
  hit: number;
  gift: number;
};

type TFilterCategory = {
  id: number;
  categoryrus: string;
  categoryeng: string;
};

type TFilterGroup = {
  id_group: number;
  id_item: number;
  name: string;
  price: number;
  namerus: string;
  link: string;
};

// type TFilterGrCat = {
//   group: TFilterGroup;
//   category: TFilterCategory;
// };

/// type TFilterGrCat = [TFilterItemArr, TFilterGroup];

export default function (req: any, res: any) {
  const filterPartId = Number(req.params.filter);
  const filterId = Number(req.params.idFil);
  const filterCatId = Number(req.params.idCat);
  const page = Number(req.params.page);
  let items: Array<TFilterItemArr> = [];
  let group: Array<TFilterGroup> = [];
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
    "SELECT a.`id`, b.`categoryrus`, b.`categoryeng`, a.`article`, a.`name`, a.`desc_short`, a.`desc_long`, a.`price`, c.`classrus`, g.`sortrus`, d.`colorrus`, h.`size`, j.`data`, e.`formrus`, f.`metalrus`, a.`lenght`, a.`bride`, a.`new`, a.`hit`, a.`gift` FROM `lu__catalog` a, `lu__category` b, `lu__pearl_class` c, `lu__pearl_color` d, `lu__pearl_form` e, `lu__pearl_metal` f, `lu__pearl_sort` g, `lu__pearl_size` h, `lu__pearl_size_library` i, `lu__pearl_size_library` j WHERE a.`category` = b.`id` AND a.`class` = c.`id` AND a.`color` = d.`id` AND a.`form` = e.`id` AND a.`metal` = f.`id` AND a.`sort` = g.`id` AND a.`size` = h.`id` AND a.`size_start` = i.`id` AND a.`size_finish` = j.`id` AND a.`activ` = 1" +
      query +
      ";" +
    "SELECT `id`, `categoryrus`, `categoryeng` FROM `lu__category` WHERE `activ` = 1;" +
      queryGroup,
    function (err, result: [TFilterListArr[], TFilterItemArr[], TFilterCategory[], TFilterGroup[]?]) {
      if (err) {
        throw err;
      }
      
      const filter: TFilterListArr = {
        id: result[0][0].id,
        table: result[0][0].table,
        filter: result[0][0].filter
      };

      if (filterPartId != 8) {
        result[1].forEach((el: any) => {
          const filterItemArr: TFilterItemArr = {
            id: el["id"],
            categoryrus: el["categoryrus"],
            categoryeng: el["categoryeng"],
            article: el["article"],
            name: el["name"],
            desc_short: el["desc_short"],
            desc_long: el["desc_long"],
            price: el["price"], 
            classrus: el["classrus"],
            sortrus: el["sortrus"],
            colorrus: el["colorrus"],
            size: el["size"],
            data: el["formrus"],
            formrus: el["formrus"],
            metalrus: el["metalrus"],
            lenght: el["lenght"],
            bride: el["bride"],
            new: el["new"],
            hit: el["hit"],
            gift: el["gift"],
          };
          items.push(filterItemArr);
        });
      }

      result[2].forEach((el: any) => {
        const filterCategory: TFilterCategory = {
          id: el["id"],
          categoryrus: el["categoryrus"],
          categoryeng: el["categoryeng"],
        };
        category.push(filterCategory);
      });

      if (filterPartId === 8 && result[3] !== undefined) {
        result[3].forEach((el: any) => {
          const filterGroup: TFilterGroup = {
            id_group: el["id_group"],
            id_item: el["id_item"],
            name: el["name"],
            price: el["price"],
            namerus: el["namerus"],
            link: el["link"],
          };
          group.push(filterGroup);
        });
      }

      const filterArr = {
        filter,
        items,
        category,
        group
      };

      res.json(filterArr);
    }
  );
  // connection.end();
}
