import React,{Component} from 'react';

export default class ProductBestItem extends Component{
  render() {
    const {id,img,name,price,numberBuy} = this.props;
    return (
      <div className="product-best__item">
        <img className="product-best__item__img" src={img}/>
        <div className="product-best__item__description"><p>{name}</p>
          <p><i className="fa fa-heart"></i><i className="fa fa-heart"></i><i className="fa fa-heart"></i><i
            className="fa fa-heart"></i><i className="fa fa-heart"></i><span>({numberBuy} lượt mua)</span></p>
          <p>{price}</p></div>
      </div>
    );
  }
}
