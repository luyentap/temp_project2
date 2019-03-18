import React, {Component} from 'react';
import {connect} from "react-redux";
import ProductBestItem from "../../components/detail/ProductBestItem";

class ProductBest extends Component {
  render() {
    const {productsBest} = this.props;
    let productBestRender ;
    if (typeof (productsBest) != "undefined" && productsBest.length > 0) {
      productBestRender = productsBest.slice(0, 3);
    }
    return (
      <div className="product-best">
        <h3 className="product-best__header">Sản phẩm bán chạy</h3>
        {productsBest && productBestRender.map(product => <ProductBestItem key={product.id} name={product.name}
                                                                           price={product.price} img={product.img}/>)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productsBest: state.products.products_best,
  }
}
export default connect(mapStateToProps, null)(ProductBest)
