import connection from "../model/db";

type TCatArr = {
    id: number;
    categoryrus: string;
    categoryeng: string;
    article: number;
    name: string;
    desc_short: string;
    desc_long: string;
    classrus: string;
    sortrus: string;
    colorrus: string;
    size: string;
    formrus: string;
    metalrus: string;
    lenght: number;
    bride: number;
    new: number;
    hit: number;
    gift: number;
  };

  type TCategoryArr = {
    id: number;
    name_category: string;
    categoryrus: string;
    categoryeng: string;
  };

  type TSizeArr = {
    id: number;
    data: string;
  };

function getCatalog(req: any, res: any) {
    connection.query(
        `SELECT a.id, b.categoryrus, b.categoryeng, a.article, a.name, a.desc_short, a.desc_long, a.price, c.classrus, g.sortrus, d.colorrus, a.size_start, a.size_finish, e.formrus, f.metalrus, a.lenght, a.bride, a.new, a.hit, a.gift FROM lu__catalog a, lu__category b, lu__pearl_class c, lu__pearl_color d, lu__pearl_form e, lu__pearl_metal f, lu__pearl_sort g WHERE a.category = b.id AND a.class = c.id AND a.color = d.id AND a.form = e.id AND a.metal = f.id AND a.sort = g.id AND a.activ = 1 AND a.category = (SELECT id FROM lu__category WHERE categoryeng = "${req.params.category}");` +
        `SELECT id, name_category, categoryrus, categoryeng FROM lu__category;` +
        `SELECT id, data FROM lu__pearl_size_library`,
        (err, result: [TCatArr[], TCategoryArr[], TSizeArr[]]) => {
            if (err) {
                throw err;
            }

            const sizes = [...result[2]];
            const category: TCatArr[] = [];

            result[0].map((el: any) => {
                const indexStart = sizes.find((item) => item.id === el.size_start);
                const indexFinish = sizes.find((item) => item.id === el.size_finish);

                let size = "";
                if (indexStart !== undefined && indexFinish === undefined) {
                    size = indexStart.data;
                } else if (indexStart !== undefined && indexFinish !== undefined) {
                    size = `${indexStart.data}-${indexFinish.data}`;
                }

                const catArr: TCatArr = {
                    id: el.id,
                    categoryrus: el.categoryrus,
                    categoryeng: el.categoryeng,
                    article: el.article,
                    name: el.name,
                    desc_short: el.desc_short,
                    desc_long: el.desc_long,
                    classrus: el.classrus,
                    sortrus: el.sortrus,
                    colorrus: el.colorrus,
                    size,
                    formrus: el.formrus,
                    metalrus: el.metalrus,
                    lenght: el.lenght,
                    bride: el.bride,
                    new: el.new,
                    hit: el.hit,
                    gift: el.gift,
                  };

                category.push(catArr);
                return category;
            });
            console.log(category);
            res.json(category);
        }
    );
    // connection.end();
}

export default getCatalog;