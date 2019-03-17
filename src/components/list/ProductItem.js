import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class ProductItem extends Component{
  render() {
    const {id,img,name,price} = this.props;
    return (
      <div className="product"><img src={img}/>
        <div className="product__detail">
          <div className="product__detail__type">{name}</div>
          <div className="product__detail__buy"><i className="fa fa-heart"></i><i className="fa fa-heart"></i><i
            className="fa fa-heart"></i><i className="fa fa-heart"></i><span>( 4 lượt mua)</span></div>
          <p className="product__detail__text">Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu tập
            mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm giác
            hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.</p>
          <p className="product__detail__price">{price}</p>
          <div className="product__detail__button">
            <button>MUA HÀNG</button>
            <button><i className="fa fa-heart"></i></button>
            <button><i className="fa fa-refresh"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
