import connection from "../model/db";

type TRowsArray = {
  idRow: number;
  region: string;
  price: string;
  priceNumber: number;
  currentcy: string;
  desc: string;
};

type TItem = {
  id: number;
  link: string;
  title: string;
  table: any;
  desc: string;
};

type TDelivery = {
  id: number;
  name: string;
  link: string;
  name_table: string;
  col1: string;
  col2: string;
  col3: string;
  desc: string;
}

type TDeliveryMain = {
  id: number;
  table: number;
  region: string;
  method_delivery: string;
  price_delivery: string;
  digit_price_delivery: number;
  price_currentcy: string;
  method_payment: string;
}

export default function getDelivery(req: any, res: any) {
  connection.query(
    "SELECT `id`, `name`, `link`, `name_table`, `col1`, `col2`, `col3`, `desc` FROM `lu__delivery_main` WHERE `activ` = 1;" +
    "SELECT `id`, `table`, `region`, `method_delivery`, `price_delivery`, `digit_price_delivery`, `price_currentcy`, `method_payment` FROM `lu__delivery` WHERE `activ` = 1;",
    function (err, result: [TDelivery[], TDeliveryMain[]]) {
      if (err) {
        throw err;
      }

      const arraySubMenu = [...result[0]];
      const arrayContent = [...result[1]];
      const tree: TItem[] = [];

      arraySubMenu.forEach((el) => {
        const titles = (el["col1"], el["col2"], el["col3"]);

        const rows: TRowsArray[] = [];

        for (let i = 0; i < arrayContent.length; i += 1) {
          if (el["id"] === arrayContent[i]["table"]) {
            let region;

            if (arrayContent[i]["table"] === 2) {
              region = arrayContent[i]["method_delivery"];
            } else {
              region = arrayContent[i]["region"];
            }

            const rowsArray: TRowsArray = {
              idRow: arrayContent[i]["id"],
              region: region,
              price: arrayContent[i]["price_delivery"],
              priceNumber: arrayContent[i]["digit_price_delivery"],
              currentcy: arrayContent[i]["price_currentcy"],
              desc: arrayContent[i]["method_payment"],
            };
            rows.push(rowsArray);
          }
        }

        const table = {
          titles,
          rows,
        };

        const item: TItem = {
          id: el["id"],
          link: el["link"],
          title: el["name"],
          table: table,
          desc: el["desc"],
        };

        tree.push(item);
      });

      res.json(tree);
    }
  );
}
