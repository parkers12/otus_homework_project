import connection from "../model/db";

function getActions(req: any, res: any) {
  connection.query(
    "SELECT `id`, `link`, `title`, `text`, `picture` FROM `lu__actions` WHERE `activ` = 1;",
    function (err, result) {
      // if (err) {
      //     throw err;
      // }
      res.json(result);
    }
  );
  // connection.end();
}

export default getActions;
