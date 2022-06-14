import connection from "../model/db";

function getCatalog(req: any, res: any) {
  connection.query(
    "SELECT `categoryrus`, `categoryeng`, `header`, `photo` FROM `lu__category` WHERE `activ_main` = 1 ORDER by `order`;",
    (err, result) => {
      if (err) {
        throw err;
      }

      console.log(result);
      res.json(result);
    }
  );
  // connection.end();
}

export default getCatalog;