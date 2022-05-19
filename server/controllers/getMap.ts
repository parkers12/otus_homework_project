import connection from "../model/db";

type TParentElem = {
  namerus: string;
  nameeng: string;
  children: any;
};

export default function geyMap(req: any, res: any) {
  connection.query(
    "SELECT `id`, `namerus`, `nameeng`, `blok`, `order`, `head` FROM `lu__menu` WHERE `blok` = 1 OR `blok` = 5 OR `blok` = 6; SELECT `id`, `categoryrus`, `categoryeng` FROM `lu__category` WHERE `activ` = 1; SELECT b.`id`, b.`name`, a.`categoryeng`, b.`category`, b.`activ`, b.`bride` FROM `lu__category` a, `lu__catalog` b WHERE a.`id` = b.`category`;",
    function (err, result: [][]) {
      let mapSite;
      if (err) {
        throw err;
      } else {
        const arrayMenu = [...result[0]];
        const arrayCategory = [...result[1]];
        const arrayCatalog = [...result[2]];
        const tree: TParentElem[] = [];

        arrayMenu.forEach((el, j, arrayMenu) => {
          if (el["head"] === 0) {
            const childrenArray = [];
            if (el["id"] === 33) {
              let parentElem;
              for (let i = 0; i < arrayCategory.length; i += 1) {
                const elem = [];
                for (let j = 0; j < arrayCatalog.length; j += 1) {
                  let childElem;
                  if (
                    arrayCatalog[j]["activ"] === 1 &&
                    arrayCategory[i]["id"] === 8
                  ) {
                    childElem = {
                      id: arrayCatalog[j]["id"],
                      name: arrayCatalog[j]["name"],
                      nameeng: arrayCatalog[j]["nameeng"],
                    };

                    elem.push(childElem);
                  } else if (
                    arrayCatalog[j]["activ"] === 1 &&
                    arrayCategory[i]["id"] === arrayCatalog[j]["category"]
                  ) {
                    childElem = {
                      id: arrayCatalog[j]["id"],
                      name: arrayCatalog[j]["name"],
                      nameeng: arrayCatalog[j]["nameeng"],
                    };

                    elem.push(childElem);
                  }
                }

                parentElem = {
                  namerus: arrayCategory[i]["namerus"],
                  nameeng: arrayCategory[i]["nameeng"],
                  children: elem,
                };

                childrenArray.push(parentElem);
              }
            } else if (el["id"] === 34) {
              let parentElem;
              for (let i = 0; i < arrayCategory.length; i += 1) {
                const elem = [];
                for (let j = 0; j < arrayCatalog.length; j += 1) {
                  let childElem;
                  if (
                    arrayCatalog[j]["activ"] === 0 &&
                    arrayCategory[i]["id"] === 8
                  ) {
                    childElem = {
                      id: arrayCatalog[j]["id"],
                      name: arrayCatalog[j]["name"],
                      nameeng: arrayCatalog[j]["nameeng"],
                    };

                    elem.push(childElem);
                  } else if (
                    arrayCatalog[j]["activ"] === 0 &&
                    arrayCategory[i]["id"] === arrayCatalog[j]["category"]
                  ) {
                    childElem = {
                      id: arrayCatalog[j]["id"],
                      name: arrayCatalog[j]["name"],
                      nameeng: arrayCatalog[j]["nameeng"],
                    };

                    elem.push(childElem);
                  }
                }

                parentElem = {
                  namerus: arrayCategory[i]["namerus"],
                  nameeng: arrayCategory[i]["nameeng"],
                  children: elem,
                };

                childrenArray.push(parentElem);
              }
            } else {
              for (let i = 0; i < arrayMenu.length; i += 1) {
                if (el["id"] === arrayMenu[i]["head"]) {
                  const childElem = {
                    namerus: arrayMenu[i]["namerus"],
                    nameeng: arrayMenu[i]["nameeng"],
                  };
                  childrenArray.push(childElem);
                }
              }
            }

            const parentElem = {
              namerus: el["namerus"],
              nameeng: el["nameeng"],
              children: childrenArray,
            };

            tree.push(parentElem);
          }
        });
        mapSite = { tree };
      }
      res.json(mapSite);
    }
  );
  // connection.end();
}
