import connection from "../model/db";

function getData(req: any, res: any) {
  connection.query(
    "SELECT `id`, `namerus`, `nameeng`, `namecss`, `link` FROM `lu__social` WHERE `activ` = 1 ORDER BY `order`;",
    (err, result) => {
      if (err) {
        throw err;
      }
      // console.log(result, 1);
      res.json({result});
    }
  );
  // connection.end();
}

export default getData;
