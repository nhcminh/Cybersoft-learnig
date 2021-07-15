import React, { Component } from 'react';
import iPhoneX from "../../assets/img/sp_iphoneX.png";
import Note7 from "../../assets/img/sp_note7.png";
import Vivo850 from "../../assets/img/sp_vivo850.png";
import Blackberry from "../../assets/img/sp_blackberry.png";
class Smartphone extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <div className="container">
                                <div className="card bg-light" style={{ width: 300 }}>
                                    <img className="card-img-top" src={iPhoneX} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-center">iPhone X</h4>
                                        <p className="card-text">iPhone X features a new all-screen design. Face ID, which makes your face your password</p>
                                        <a href={"#"} className="btn btn-primary">Detail</a>
                                        <a href={"#"} className="btn btn-danger">Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <div className="container">
                                <div className="card bg-light" style={{ width: 300 }}>
                                    <img className="card-img-top" src={Note7} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-center">Galaxy Note7</h4>
                                        <p className="card-text">The Galaxy Note7 comes with a perfectly symmetrical design for good reason</p>
                                        <a href={"#"} className="btn btn-primary">Detail</a>
                                        <a href={"#"} className="btn btn-danger">Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <div className="container">
                                <div className="card bg-light" style={{ width: 300 }}>
                                    <img className="card-img-top" src={Vivo850} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-center">Vivo</h4>
                                        <p className="card-text">A young global smartphone brand focusing on introducing perfect sound quality</p>
                                        <a href={"#"} className="btn btn-primary">Detail</a>
                                        <a href={"#"} className="btn btn-danger">Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3 col-lg-3">
                            <div className="container">
                                <div className="card bg-light" style={{ width: 300 }}>
                                    <img className="card-img-top" src={Blackberry} alt="Card image" style={{ maxWidth: '100%', height: 250 }} />
                                    <div className="card-body text-center">
                                        <h4 className="card-title text-center">Blackberry</h4>
                                        <p className="card-text">BlackBerry is a line of smartphones, tablets, and services originally designed</p>
                                        <a href={"#"} className="btn btn-primary">Detail</a>
                                        <a href={"#"} className="btn btn-danger">Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Smartphone;