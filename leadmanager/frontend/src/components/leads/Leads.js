 import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {getLeads, deleteLead, editLead, addLead} from "../../actions/leads";
 import {logout} from "../../actions/auth";
 import {Form} from "./Form";
 import axios from "axios";

export class Leads extends Component {
    state = {
        name: "",
        email: ""
    };

  static propTypes = {
    auth: PropTypes.object.isRequired,
    leads: PropTypes.array.isRequired,
    getLeads: PropTypes.func.isRequired,
    deleteLead: PropTypes.func.isRequired,
    addLead: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getLeads();
  }

    onChange = e => this.setState({ [e.target.name]: e.target.value });


    onSubmit = e => {
        e.preventDefault();
        const { user } = this.props.auth;
        const { name, email} = this.state;
        const lead = { name, email };
        axios
        this.props.addLead(lead);
        this.setState({
            name: name,
            email: email,
            current: current
        });
    };

  render() {
    const { isAuthenticated, user } = this.props.auth;

      const { nameRef, curname, curemail, emailRef, company, card, exp, cvv, zip, member} = this.state;

    return (

        <div>
            <form onSubmit={this.onSubmit}>


                <table className="table1">
                    <tbody>
                    <tr>
                        <td colSpan="2" className="form-group ">
                            <label>Name</label>
                            <input
                                className="form-control"
                                type="text"
                                name="name"
                                onChange={this.onChange}
                                value={nameRef}
                            />

                        </td>
                        <td colSpan="2" className="form-group ">
                            <label>Email</label>
                            <input
                                className="form-control"
                                type="text"
                                name="email"
                                onChange={this.onChange}
                                value={emailRef}
                            />

                        </td>

                        <td className="form-group text-center">

                            <button className="glyphicon glyphicon-plus border-0"></button>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
          <h5>Existing users</h5>
          <Fragment>



            <div className="card3">
                          <div className="card1"><div className="card4">{user ? `${user.username}` : ""}
                          <br />
                              {user ? `${user.email}` : ""}</div>

                          <button
                              className="card2 btn btn-danger btn-sm" disabled>
                            {" "}
                            Delete
                          </button></div>




                        {this.props.leads.map(lead => (


                          <div className="card1" key={lead.id}><div className="card4">

                            {lead.name}
                            <br />
                              {lead.email}</div>



                              <button
                                onClick={this.props.deleteLead.bind(this, lead.id)}
                                className="card5 btn btn-danger btn-sm"
                              >
                                {" "}
                                Delete
                              </button>

                          </div>

                        ))}
            </div>
          </Fragment>
        </div>
    );
  }
}

const mapStateToProps = state => ({
  leads: state.leads.leads,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { editLead, addLead, logout, getLeads, deleteLead }
)(Leads);


