import { Component } from 'react';
import data from '../data/data';
import '../components/product/productCard.css';
import ProductCard from '../components/product/ProductCard';

class Section extends Component {
  render() {
    const { results } = data;
    return (
      <section className='product'>
        {
          results.map((item) => (
            <ProductCard
              payload={item}
              key={item.id}
            />
          ))
        }
      </section>
    )
  }
}

export default Section;
