import React, { Component } from 'react';
import Sale from "./Sale";
import KindProducts from "./KindProducts";
import TagProducts from "./TagProducts";
import Intro from './Intro'

export default class List extends Component {
  render() {
    return (
      <div className="sidebar-grid">
        <div className="sidebar-grid__item">
          <h3 className="sidebar-grid__item__header"><i className="fa fa-bars"></i>Danh mục sản phẩm</h3>
          <div className="sidebar-grid__item__body">
            <div className="list">
              <ul>
                <li>Mỹ phẩm</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
            <div className="list">
              <ul>
                <li>Trang sức</li>
                <li>Vòng tay</li>
                <li>Nhẫn</li>
                <li>Lắc chân</li>
                <li>Phụ kiện khác</li>
                <li>Giày</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
            <div className="list">
              <ul>
                <li>Phụ kiện</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
            <div className="list">
              <ul>
                <li>Nước hoa</li>
              </ul>
              <i className="fa fa-caret-down"></i></div>
          </div>
        </div>
        <div className="sidebar-grid__item">
          <h3 className="sidebar-grid__item__header">So sánh sản phẩm</h3>
          <div className="sidebar-grid__item__body"><p>Bạn chưa có sản phẩm nào</p></div>
        </div>
        <div className="sidebar-grid__item">
          <h3 className="sidebar-grid__item__header">Tag sản phẩm</h3>
          <div className="sidebar-grid__item__body">
            <button>Đồng hồ</button>
            <button>Túi</button>
            <button>Phụ kiện</button>
            <button>Đồng hồ</button>
            <button>Túi</button>
            <button>Giày</button>
            <button>Sandal</button>
            <button>Áo Sơ mi</button>
            <button>Nước hoa</button>
            <button>Giày</button>
            <button>Sandal</button>
            <button>Trẻ em</button>
            <button>Thời trang nữ</button>
          </div>
        </div>
        <img className="sidebar-grid__banner" src={require("../../img/grid/04_Gird_03.jpg")}/>
      </div>
    );
  }
}
