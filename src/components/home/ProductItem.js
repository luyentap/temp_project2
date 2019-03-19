import React, {Component} from 'react'

export const ProductItem = ({id,brand,name,old_price,new_price,img,clickBuy}) =>{
  return(
    <div className="product"><img className="product__img" src={img}/>
      <div className="product__detail">
        <div className="product__detail__type">{brand}</div>
        <div className="product__detail__name">{name}</div>
        {/*<img src={require("../../img/home/Shape 16 2.png")}/>*/}
        <div className="product__detail__price">
          <div className="product__detail__price__new">{old_price}<span>đ</span></div>
          <div className="product__detail__price__old">{new_price}<span>đ</span></div>
        </div>
        <div className="product__detail__button">
          <button className="product__detail__button__buy"  value={id} onClick={clickBuy} >MUA HÀNG
          </button>
          <button><i className="fa fa-heart"></i></button>
          <button><i className="fa fa-refresh"></i></button>
        </div>
      </div>
    </div>
  )
}
