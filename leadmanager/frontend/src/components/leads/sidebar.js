// sidebar.js
import '../../css/App.css';
import '../../css/main.css';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Logo from "./logo.png";
import { bubble as Menu } from 'react-burger-menu';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../actions/auth";

export class SideBar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;

        const authLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 px-3">
            <span className="navbar-text mr-3">
                <img src="https://blogs.adobe.com/primetime/files/2015/03/Primetime.png" height="42" width="42" alt="Pass Tools"/>
                <label> Pass Tools</label><br /><br />

                <div className="backplate ">


                    <img src="https://i.imgur.com/2mTWDmB.png" height="42" width="42" />

<div className="sep">
                {user ? `${user.username}` : ""}
                <br />
                {user ? `${user.email}` : ""}
</div>
                </div>
            </span>
            </ul>
        );

        const guestLinks = (
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0 px-3">
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
            </ul>
        );


        return (

            <div className="bg-light border-right" id="sidebar-wrapper">

                <div className="sidebar">{isAuthenticated ? authLinks : guestLinks}</div>

                <div className="list-group list-group-flush">
                    <Link to={'/'}>
                        <span className="list-group-item list-group-item-action bg-light" >Explore</span>
                    </ Link>
                    <Link to={'/'}>
                        <span className="list-group-item list-group-item-action bg-light" >Definition</span>
                    </Link>
                    <Link to={'/'}>
                        <span className="list-group-item list-group-item-action bg-light" >Settings</span>
                    </Link>
                    <Link to={'/logo'}>
                        <span className="list-group-item list-group-item-action bg-light" >Help</span>
                    </Link>
                    <Link to={'/'}>
                        <span className="list-group-item list-group-item-action bg-light" >My Predictions</span>
                    </Link>

                </div>
            </div>
        );
}
};
const mapStateToProps = state => ({
    auth: state.auth
});
export default connect(
    mapStateToProps,
    { logout }
)(SideBar);