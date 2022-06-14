import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { getCatalog } from "../../fetchList";
import "./catalog.scss";

function Catalog() {
    const [error, setError] = useState(null);
    const [list, setList] = useState([]);

    useEffect(() => {
        getCatalog()
            .then(
                (result) => {
                    setList(result);
                },
                (error) => {
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else {
        return (
            <div className="catalog">
                {list.map(item => {
                    const imgUrl = `/images/categories/${item.photo}.jpg`;
                    return (
                        <NavLink to={item.categoryeng} className="catalog__item">
                            <img src={imgUrl} alt={item.header} />
                        </NavLink>
                    );
                })}
            </div>
        );
    }
};

export default Catalog;