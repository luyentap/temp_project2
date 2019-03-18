import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ProductBest from "../../containers/detail/ProductBest";
import ProductTop from "../../containers/detail/ProductTop";


export default class MoreDetail extends Component {
  render() {
    return (
      <div className="more-detail">
        <div className="description-product">
          <div className="description-head"><p className="description-head--seleted">Đặc điểm nổi bật</p>
            <p>Thông tin sản phẩm</p>
            <p>Đánh giá</p></div>
          <div className="description-body">
            <div className="item">
              <div><p className="description-body__title"><span>THE MARK</span>OF A LEGEND</p>
                <p className="description-body__text">Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu
                  tập mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm
                  giác hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.</p></div>
              <img className="description-body__img" src="../img/detail/Layer 88.jpg"/></div>
            <div className="item"><img className="description-body__img" src="../img/detail/Layer 87.jpg"/>
              <div><p className="description-body__title"><span>THE MARK</span>OF A LEGEND</p>
                <p className="description-body__text">Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu
                  tập mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm
                  giác hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.</p></div>
            </div>
            <div className="item">
              <div><p className="description-body__title"><span>THE MARK</span>OF A LEGEND</p>
                <p className="description-body__text">Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu
                  tập mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm
                  giác hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.</p></div>
              <img className="description-body__img" src="../img/detail/Layer 85 copy.jpg"/></div>
            <div className="item"><img className="description-body__img" src="../img/detail/Layer 86.jpg"/>
              <div><p className="description-body__title"><span>THE MARK</span>OF A LEGEND</p>
                <p className="description-body__text">Tự hào được ghi là năm mà Tiffany & Co là thành lập, bộ sưu
                  tập mang tính biểu tượng này cung cấp cho một cái gật đầu với qua trong khi thể hiện một cảm
                  giác hiện đại với kiểu dáng đẹp đường cong và đường nét mượt mà.</p></div>
            </div>
          </div>
        </div>
        <div className="sibar-detail">
            <ProductBest/>
            <ProductTop/>
        </div>
      </div>
    );
  }
}
