import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Table from "../../containers/cart/Table";
import Intro from "./Intro";

export default class PageCart extends Component {
  render() {
    return (
      <div className="container">
        <Intro/>
        <Table/>
      </div>
    );
  }

}
