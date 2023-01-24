import { Component } from 'react';
import './productCard.css';
import PropTypes from 'prop-types';

class ProductCard extends Component {
  render() {
    const { payload: { thumbnail, title, price } } = this.props;
    return (
      <div>
        <span className='product__id'></span>
        <div className='img__container'>
          <img src={ thumbnail } alt= {title} className='product__image' />
        </div>
        <span className='product__title'>{title}</span>
        <span className='product__price'>R$</span>
        <span className='product__price__value'>{price}</span>
      </div>
    )
  }
}

ProductCard.propTypes = {
  payload: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
  }),
}.isRequired;

ProductCard.defaultProps ={}

export default ProductCard;