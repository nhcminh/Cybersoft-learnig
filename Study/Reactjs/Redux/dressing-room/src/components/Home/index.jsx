import React, { Component } from 'react';
import Category from '../Category';
import ProductList from '../ProductList';
import Model from '../Model';
class Home extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <Category />
                        <ProductList />
                    </div>
                    <div className="col-5">
                        <Model />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;