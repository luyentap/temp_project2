import React, {Component} from 'react';
import {connect} from "react-redux";
import ProductBestItem from "../../components/detail/ProductBestItem";

class ProductTop extends Component {
  render() {
    const {productsHot} = this.props;
    let productTopRender ;
    if (typeof (productsHot) != "undefined" && productsHot.length > 0) {
      productTopRender = productsHot.slice(0, 3);
    }
    return (
      <div className="product-best">
        <h3 className="product-best__header">Sản phẩm Mua Nhiều</h3>
        {productsHot && productTopRender.map(product => <ProductBestItem key={product.id} name={product.name}
                                                                         price={product.price} img={product.img}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsHot: state.products.products_hot,
  }
}
export default connect(mapStateToProps, null)(ProductTop)
