import connection from "../model/db";

function getData(req: any, res: any) {
  connection.query(
    "SELECT `id`, `namerus`, `nameeng`, `namecss`, `link` FROM `lu__social` WHERE `activ` = 1 ORDER BY `order`;",
    function (err, result) {
      if (err) {
          throw err;
      }
      res.json(result);
    }
  );
  // connection.end();
}

export default getData;