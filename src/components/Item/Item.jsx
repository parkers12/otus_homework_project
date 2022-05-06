import React from 'react';
import './item.scss';

class Item extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    finPrice = this.props.price - (this.props.price * this.props.sale) / 100;

    render() {
        return (
            <div className="item">
                <div className="item__photo">
                    <img src={ this.props.picture } alt="" />
                </div>
                <div className="item__text">
                    <div className="item__text-article">Артикул { this.props.article }</div>
                    <div className="item__text-desc">
                        { this.props.name }
                    </div>
                    <div className="item__text-price">
                        <div className="item__text-price-top">
                            <div className="item__text-price-old">{ this.props.price }</div>
                            <div className="item__text-price-sale">-{ this.props.sale }%</div>
                        </div>
                        <div className="item__text-price-new">{ this.finPrice }</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;
