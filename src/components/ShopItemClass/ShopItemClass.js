import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ShopItemClass extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="main-content">
        <h2>{this.props.item.brand}</h2>
        <h1>{this.props.item.title}</h1>
        <h3>{this.props.item.description}</h3>
        <div className="description">{this.props.item.descriptionFull}</div>
        <div className="highlight-window mobile">
          <div className="highlight-overlay" />
        </div>
        <div className="divider" />
        <div className="purchase-info">
          <div className="price">{this.props.item.currency + (Number.isInteger(this.props.item.price) ? this.props.item.price + '.00' : this.props.item.price)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
}

ShopItemClass.propTypes = {
  item: PropTypes.shape({
    brand: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    descriptionFull: PropTypes.string,
    price: PropTypes.number,
    currency: PropTypes.string
  })
}

ShopItemClass.defaultProps = {
  item: {
    brand: 'Sample text',
    title: 'Sample text',
    description: 'Sample text',
    descriptionFull: 'Sample text',
    price: 99,
    currency: '$'
  }
}

export default ShopItemClass;