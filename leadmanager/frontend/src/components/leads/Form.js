import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLead, editLead } from "../../actions/leads";
import Leads from "./Leads";
import axios from "axios";
import {logout} from "../../actions/auth";

export class Form extends Component {
  constructor(props) {
    super(props)
    this.textInput = React.createRef();
    this.state = {
      name: "",
      email: ""
    };
    this.onSubmitEdit = this.onSubmitEdit.bind(this);
    this.onChangeEdit = this.onChangeEdit.bind(this);
    }
    static
    propTypes = {
      auth: PropTypes.object.isRequired,
      addLead: PropTypes.func.isRequired,
      leads: PropTypes.array.isRequired,
    };



  onChangeEdit = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitEdit = e => {
    e.preventDefault();
    const { user } = this.props.auth;
    const { name, company, email, password, password2, card, exp, cvv, zip, current=user.id} = this.state;

      const lead = {name, company, email, password, card, exp, cvv, zip, current};
      axios
      this.props.editLead(lead);

    this.setState({
      name: curname,
      company: company,
      email: curemail,
      card: card,
      cvv: cvv,
      exp: exp,
      zip: zip,
      current: current
    });
  };

  render() {
    const { user } = this.props.auth;
    const { curname, curemail, company, password, password2, card, exp, cvv, zip, member} = this.state;
    let firstname ="";
    let useremail="";
    let comp="";
    let cred="";
    let expire="";
    let sec="";
    let zipcode="";
    {this.props.leads.map(lead => (



        <div>
          {(user.id == lead.current) ? firstname = `${lead.name}` : ""}
          {(user.id == lead.current) ? comp = `${lead.company}` : ""}
          {(user.id == lead.current) ? useremail = `${lead.email}` : ""}
          {(user.id == lead.current) ? cred = `${lead.card}` : ""}
          {(user.id == lead.current) ? sec = `${lead.cvv}` : ""}
          {(user.id == lead.current) ? expire = `${lead.exp}` : ""}
          {(user.id == lead.current) ? zipcode = `${lead.zip}` : ""}
        </div>
    ))}
    return (

      <div className="card card-body special-card border-0 bg content">
        <h2>All your<br />inputs in one place.</h2>
        <form onSubmit={this.onSubmitEdit} autocomplete="off" key={this.props.value}>
          <table className="table1">
            <tbody>
              <tr>
                <td className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChangeEdit}
                    defaultValue={firstname}

                  />
                </td>
                <td className="form-group">
                  <label>Company</label>
                  <input
                    className="form-control"
                    type="text"
                    name="company"
                    onChange={this.onChangeEdit}
                    placeholder={(comp!=-1) ? comp : ""}
                    defaultValue={comp}
                  />
                </td>

                <td colSpan="2" className="form-group w1">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    onChange={this.onChangeEdit}
                    autocomplete="off"
                    defaultValue={useremail}

                  />
                </td>
              </tr>

              <tr>
                <td className="form-group">
                  <label>Current password</label>
                  <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={this.onChangeEdit}
                      defaultValue={password}
                  />
                </td>
                <td className="form-group">
                  <label>New password </label>
                  <input
                      className="form-control"
                      type="password"
                      name="password"
                      onChange={this.onChangeEdit}
                      value={password}
                  />
                </td>

                <td colSpan="2" className="form-group w1">
                  <label>Repeat password</label>
                  <input
                      className="form-control"
                      type="password"
                      name="password2"
                      onChange={this.onChangeEdit}
                      value={password2}
                  />
                </td>
              </tr>
              <tr>
                <td className="form-group">
                  <label>Public Key</label>
                  <input
                      className="form-control"
                      type="text"
                      name="card"
                      onChange={this.onChangeEdit}
                      placeholder={(cred!=-1) ? cred : ""}
                      defaultValue={cred}
                  />
                </td>
                <td className="form-group">
                  <label>Private Key</label>
                  <input
                      className="form-control"
                      type="text"
                      name="exp"
                      onChange={this.onChangeEdit}
                      placeholder={(expire!=-1) ? expire : ""}
                      defaultValue={expire}
                  />
                </td>

                  <th className="form-group">
                    <label>TTL</label>
                    <input
                        className="form-control"
                        type="text"
                        name="cvv"
                        onChange={this.onChangeEdit}
                        placeholder={(sec!=-1) ? sec : ""}
                        defaultValue={sec}
                    />
                  </th>
                  <th className="form-group">
                    <label>Programmer</label>
                    <input
                        className="form-control"
                        type="text"
                        name="zip"
                        onChange={this.onChangeEdit}
                        placeholder={(zipcode!=-1) ? zipcode : ""}
                        defaultValue={zipcode}
                    />
                  </th>
              </tr>
              <tr>


              <td colSpan="3" className="form-group border-0">
              <div className="card card-body border-0 px-4 py-0">
                <label>User seats</label>

                <span>Invite another user from your company</span>
              </div>

                  <Leads />

                </td>
              </tr>
              <tr>
                <td colSpan="4" className="btn-primary py-4">
                  <button type="submit" className="btn w-100 text-white text-bold">Update all inputs</button>
                </td>
              </tr>

            </tbody>
          </table>
        </form>
              <tr>

                <td colSpan="3" className="form-group border-0">

                </td>
              </tr>

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
  { editLead, addLead, logout }
)(Form);
