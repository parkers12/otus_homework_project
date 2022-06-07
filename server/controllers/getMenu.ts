import connection from "../model/db";

type TMenuItem = {
    id: number;
    namerus: string;
    nameeng: string;
    head: number;
};

type TCatItem = {
    id: number;
    categoryrus: string;
    categoryeng: string;
};

type TCat = {
    // id: number;
    label: string;
    link: string;
};

type TMenu = {
    // id: number;
    label: string;
    link: string;
    items: TCat[];
};

function getMenu(req: any, res: any) {
    connection.query(
        "SELECT `id`, `namerus`, `nameeng`, `head` FROM `lu__menu` WHERE `blok` = 1 OR `blok` = 5 OR `blok` = 6 AND `activ` = 1 ORDER BY `order`;" +
        "SELECT `id`, `categoryrus`, `categoryeng` FROM `lu__category` WHERE `activ` = 1 ORDER BY `order`;",
        (err, result: [TMenuItem[], TCatItem[]]) => {
            if (err) {
                throw err;
            }

            const menu = result[0];
            const categorys = result[1];

            const topLevelItem: TMenu[] = [];
            const catArr: TCat[] = [];
            let subMenuList: TMenuItem[] = [];

            categorys.map(el => {
                const subItem = {
                    // id: el.id,
                    label: el.categoryrus,
                    link: el.categoryeng
                }
                catArr.push(subItem);
                return false;
            });

            menu.map(el => {
                let subItem;
                if (el.head === 0) {
                    subMenuList = menu.filter(item => el.id === item.head);
                    const subMenuArr = subMenuList.map(elem => ({
                        // id: elem.id,
                        label: elem.namerus,
                        link: elem.nameeng
                    }));
                    // console.log(subMenuList);
                    subItem = {
                        // id: el.id, 
                        label: el.namerus,
                        link: el.nameeng,
                        items: el.id === 33 ? catArr : subMenuArr
                    }
                    topLevelItem.push(subItem);
                }
                return false;
            })

            console.log(topLevelItem);
            res.json(topLevelItem);
        }
    );
    // connection.end();
}

export default getMenu;