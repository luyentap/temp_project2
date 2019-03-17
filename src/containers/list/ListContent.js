import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Paging from "../../components/list/Paging";
import {connect} from 'react-redux';
import ProductItem from "../../components/list/ProductItem";

class ListContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      limit: 3,
      maxPage : 1
    };
  }

  handleClickPageNumber = (page) => {
    console.log(page)
    this.setState({
      currentPage: Number(page)
    });
  }
  increase = (value) => {
    if(this.state.currentPage<this.state.maxPage) {
      this.setState({
        currentPage: Number(this.state.currentPage + 1)
      });
    }
  }
  degrease = (value) => {
    if(this.state.currentPage>1) {
      this.setState({
        currentPage: Number(this.state.currentPage - 1)
      });
    }
  }

    render()
    {
      const {products} = this.props;
      console.log(products);
      const {currentPage, limit,maxPage} = this.state;
      const pageNumbers = [];
      let currentTodos = [];

      if (typeof (products) != "undefined" && products.length > 0) {
        // Logic for displaying todos
        const indexOfLastTodo = currentPage * limit;
        const indexOfFirstTodo = indexOfLastTodo - limit;
        currentTodos = products.slice(indexOfFirstTodo, indexOfLastTodo);

        // Logic for displaying page numbers
        for (let i = 1; i <= Math.ceil(products.length / limit); i++) {
          pageNumbers.push(i);
        }
        this.state.maxPage = pageNumbers.length;
      }

      return (
        <div className="list-content">
          {products && <Paging pageNumbers={pageNumbers} handleClick={this.handleClickPageNumber} degrease={this.degrease} increase={this.increase}/>
          }
          <div className="list-content__body">
            {products && currentTodos.map((product) =>
              <ProductItem key={product.id} img={product.img} name={product.name} price={product.new_price}/>
            )}
          </div>
          {products && <Paging pageNumbers={pageNumbers} handleClick={this.handleClickPageNumber} degrease={this.degrease} increase={this.increase}/>}
        </div>
      );
    }
  }

  const
  mapStateToProps = (state) => {
    return {
      products: state.products.products_new,
    }
  }

  export
  default

  connect(mapStateToProps)

(
  ListContent
)
