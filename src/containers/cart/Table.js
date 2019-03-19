import React, {Component} from 'react';
import {connect} from "react-redux";
import Itemcart from "../../components/cart/ItemCart";
import {addQuantity, removeItem, subtractQuantity} from "../../actions/ActionCreaters";

class Table extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    const {itemsInCart, removeItem,addQuantity,subQuanlity} = this.props;
    console.log("item in cart",itemsInCart);
    return (
      <div>
        <div className="shopping-cart">
          <table className="table">
            <thead>
            <th>Ảnh</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng số</th>
            <th>Xóa</th>
            </thead>
            <tbody className="shopping-cart__table__body">
            {itemsInCart.map(item => <Itemcart clickRemove={(e)=>removeItem(item.id)} addQuantity={(e)=>addQuantity(item.id)} subQuanlity={(e)=>subQuanlity(item.id)} key={item.id} name={item.name} img={item.img}
                                               id={item.id} price={item.new_price} quantity={item.quantity}/>)}
            </tbody>
          </table>
          <div className="shopping-cart__button">
            <button onClick="location.href='payment_checkoutcart.html'" type="button">Tiếp tục mua hàng</button>
            <button onClick="clearCart();">Xóa</button>
            <button onClick="updateCartInPage();">Cập nhật</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemsInCart: state.products.addedItems
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id)),
    addQuantity: (id) =>dispatch(addQuantity(id)),
    subQuanlity :(id) =>dispatch(subtractQuantity(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Table)
