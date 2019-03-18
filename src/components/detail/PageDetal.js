import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Intro from "./Intro";
import DetailProduct from "./DetailProduct";
import MoreDetail from "./MoreDetail";

export default class PageDetal extends Component {
  render() {
    return (
      <div className="container">
        <Intro/>
        <DetailProduct/>
        <MoreDetail/>
      </div>
    );
  }

}
