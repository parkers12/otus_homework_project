import connection from "../model/db";

type TArrayMenu = {
  id: number;
  namerus: string;
  nameeng: string;
  blok: number;
  order: number;
  head: number;
};

type TChildrenElem = {
  id: number;
  categoryrus: string;
  categoryeng: string;
};

type TArrayItems = {
  id: number;
  name: string;
  categoryeng: string;
  category: number;
  activ: number;
  bride: number;
};

// собранный элемент списка меню
type TChildElem = {
  id: number;
  name: string;
};

type TMiddleElem = {
  id: number;
  namerus: string;
  nameeng: string;
  children?: TChildElem[];
};

type TParentElem = {
  id: number;
  namerus: string;
  nameeng: string;
  children: TMiddleElem[];
};

function createChildElemMenu(
  arrayCateg: TChildrenElem[],
  arrayCatal: TArrayItems[],
  archiv: boolean
): TMiddleElem[] {
  const childrenArray: TMiddleElem[] = [];
  let parentElem: TMiddleElem;
  let elem: TChildElem[];
  let childElem: TChildElem;

  let active = 0; // меню архивная продукция
  if(archiv === false) {
    active = 1; // меню каталог продукции
  }
  
  for (let i = 0; i < arrayCateg.length; i += 1) {
    elem = [];
    for (let j = 0; j < arrayCatal.length; j += 1) {
      if (
        (arrayCatal[j].activ === active &&
        arrayCateg[i].id === 8) ||
        (arrayCatal[j].activ === active &&
        arrayCateg[i].id === arrayCatal[j].category)
      ) {
        childElem = {
          id: arrayCatal[j].id,
          name: arrayCatal[j].name
        };
        // console.log(childElem);
        // res.json(childElem);
        elem.push(childElem);
      }
    }

    parentElem = {
      id: arrayCateg[i].id,
      namerus: arrayCateg[i].categoryrus,
      nameeng: arrayCateg[i].categoryeng,
      children: elem,
    };

    // console.log(parentElem);
    // res.json(parentElem);
    childrenArray.push(parentElem);
  }
  return childrenArray;
}

function createParentElemMenu(
  menu: TParentElem[],
  elem: TArrayMenu,
  array: TMiddleElem[]
): TParentElem[] {
  const parentElement = {
    id: elem.id,
    namerus: elem.namerus,
    nameeng: elem.nameeng,
    children: array,
  };

  menu.push(parentElement);
  return menu;
}

function createElemMenu(
  array: TArrayMenu[],
  elem: TArrayMenu
) {
  const childrenArray: TMiddleElem[] = [];
  for (let i = 0; i < array.length; i += 1) {
    // if(i === 0){console.log(elem)}
    if (elem.id === array[i].head) {
      const childElem: TMiddleElem = {
        id: array[i].id,
        namerus: array[i].namerus,
        nameeng: array[i].nameeng
      };

      // console.log(childElem);
      // res.json(childElem);
      childrenArray.push(childElem);
    }
  }
  return childrenArray;
}

export default function geyMap(req: any, res: any) {
  connection.query(
    "SELECT `id`, `namerus`, `nameeng`, `blok`, `order`, `head` FROM `lu__menu` WHERE `blok` = 1 OR `blok` = 5 OR `blok` = 6; SELECT `id`, `categoryrus`, `categoryeng` FROM `lu__category` WHERE `activ` = 1; SELECT b.`id`, b.`name`, a.`categoryeng`, b.`category`, b.`activ`, b.`bride` FROM `lu__category` a, `lu__catalog` b WHERE a.`id` = b.`category`;",
    (err, result: [TArrayMenu[], TChildrenElem[], TArrayItems[]]): void => {
      // let mapSite;
      if (err) {
        // throw err;
        console.log(err);
        res.sendStatus(500);
        return;
      }

      const arrayMenu = [...result[0]]; // menu
      const arrayCategory = [...result[1]]; // category
      const arrayCatalog = [...result[2]]; // catalog
      let tree: TParentElem[] = [];

      arrayMenu.forEach((el, w, array) => {
        if (el.head === 0) {
          // const childrenArray: TMiddleElem[] = [];
          // const childrenArray: TMiddleElem[] = [];
          // const childrenCatArray: TChildElem[] = [];

          let ElemCat: TMiddleElem[];
          // const childrenArray = [];
          // let parentElem: TMiddleElem;
          if (el.id === 33) {
            // меню каталог продукции

            ElemCat = createChildElemMenu(arrayCategory, arrayCatalog, false);
            /*
            for (let i = 0; i < arrayCategory.length; i += 1) {
              const elem: TChildElem[] = [];
              for (let j = 0; j < arrayCatalog.length; j += 1) {
                let childElem: TChildElem;
                if (arrayCatalog[j].activ === 1 && arrayCategory[i].id === 8) {
                  childElem = {
                    id: arrayCatalog[j].id,
                    name: arrayCatalog[j].name,
                    // nameeng: arrayCatalog[j].categoryeng,
                  };
                  // console.log(childElem);
                  // res.json(childElem);
                  elem.push(childElem);
                } else if (
                  arrayCatalog[j].activ === 1 &&
                  arrayCategory[i].id === arrayCatalog[j].category
                ) {
                  childElem = {
                    id: arrayCatalog[j].id,
                    name: arrayCatalog[j].name,
                    // nameeng: arrayCatalog[j].categoryeng,
                  };
                  // console.log(childElem);
                  // res.json(childElem);
                  elem.push(childElem);
                }
              }

              parentElem = {
                id: arrayCategory[i].id,
                namerus: arrayCategory[i].categoryrus,
                nameeng: arrayCategory[i].categoryeng,
                children: elem,
              };

              // console.log(parentElem);
              // res.json(parentElem);
              childrenArray.push(parentElem);
            }
            */

          } else if (el.id === 34) {
            // меню архивная продукция

            ElemCat = createChildElemMenu(arrayCategory, arrayCatalog, true);
            
            /*
            for (let i = 0; i < arrayCategory.length; i += 1) {
              const elem: TChildElem[] = [];
              for (let j = 0; j < arrayCatalog.length; j += 1) {
                let childElem: TChildElem;
                if (arrayCatalog[j].activ === 0 && arrayCategory[i].id === 8) {
                  childElem = {
                    id: arrayCatalog[j].id,
                    name: arrayCatalog[j].name,
                    // nameeng: arrayCatalog[j].categoryeng,
                  };

                  elem.push(childElem);
                } else if (
                  arrayCatalog[j].activ === 0 &&
                  arrayCategory[i].id === arrayCatalog[j].category
                ) {
                  childElem = {
                    id: arrayCatalog[j].id,
                    name: arrayCatalog[j].name,
                    // nameeng: arrayCatalog[j].categoryeng,
                  };

                  elem.push(childElem);
                }
              }

              parentElem = {
                id: arrayCategory[i].id,
                namerus: arrayCategory[i].categoryrus,
                nameeng: arrayCategory[i].categoryeng,
                children: elem,
              };

              // console.log(parentElem);
              // res.json(parentElem);
              childrenArray.push(parentElem);
            }
            */

          } else {
            // любой другой пункт меню
            ElemCat = createElemMenu(array, el);
            
            /*
            for (let i = 0; i < array.length; i += 1) {
              if (el.id === array[i].head) {
                const childElem: TMiddleElem = {
                  id: array[i].id,
                  namerus: array[i].namerus,
                  nameeng: array[i].nameeng,
                  children: []
                };

                // console.log(childElem);
                // res.json(childElem);
                ElemCat.push(childElem);
              }
            }
            */
          }

          tree = createParentElemMenu(tree, el, ElemCat);
          
        }
      });
      // mapSite = { tree };
      // console.log(tree);
      res.json(tree);
    }
  );
  // connection.end();
}
