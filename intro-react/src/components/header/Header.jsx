import { Component } from 'react';
import './header.css';
import PropTypes from 'prop-types';


class Header extends Component {
  render() {
    const { classHeader, src, alt, classImg } = this.props;
    return (
      <header className={ classHeader} >
        <img
          src={ src }
          alt={ alt }
          className={ classImg }
        />
      </header>
    )
  }
}

Header.propTypes = {
  alt: PropTypes.string,
  classHeader: PropTypes.string,
  classImg: PropTypes.string,
  src: PropTypes.string,
}.isRequired;

export default Header;