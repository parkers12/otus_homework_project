import connection from '../model/db';

export default function getDelivery(req, res) {
    connection.query(
        'SELECT `id`, `name`, `link`, `name_table`, `col1`, `col2`, `col3`, `desc` FROM `lu__delivery_main` WHERE `activ` = 1;' +
        'SELECT `id`, `table`, `region`, `method_delivery`, `price_delivery`, `digit_price_delivery`, `price_currentcy`, `method_payment` FROM `lu__delivery` WHERE `activ` = 1;',
        function (err, result) {
            if (err) {
                throw err;
            } else {
                const arraySubMenu = [...result[0]];
                const arrayContent = [...result[1]];
                const tree = [];

                arraySubMenu.forEach((el) => {
                    const titles = [];
                    titles.push(el["col1"], el["col2"], el["col3"]);

                    const rows = [];

                    for (let i = 0; i < arrayContent.length; i += 1) {
                        if (el["id"] === arrayContent[i]["table"]) {
                            let region;
        
                            if (arrayContent[i]["table"] === 2) {
                                region = arrayContent[i]["method_delivery"];
                            } else {
                                region = arrayContent[i]["region"];
                            }
        
                            const rowsArray = {
                                idRow: arrayContent[i]["id"],
                                region: region,
                                price: arrayContent[i]["price_delivery"],
                                priceNumber: arrayContent[i]["digit_price_delivery"],
                                currentcy: arrayContent[i]["price_currentcy"],
                                desc: arrayContent[i]["method_payment"]
                            }
                            rows.push(rowsArray);
                        }
                    }

                    const table = {
                        titles,
                        rows
                    }

                    const item = {
                        id: el["id"],
                        link: el["link"],
                        title: el["name"],
                        table: table,
                        desc: el["desc"]
                    }
                    tree.push(item);
                });
                res.json(tree);
            }
        }
    );
}