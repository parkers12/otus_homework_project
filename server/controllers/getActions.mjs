import connection from '../model/db.mjs';

export default function getActions(req, res) {
    connection.query(
        'SELECT `id`, `link`, `title`, `text`, `picture` FROM `lu__actions` WHERE `activ` = 1;',
        function (err, result) {
            if (err) {
                throw err;
            }
            res.json(result);
        }
    );
    // connection.end();
}