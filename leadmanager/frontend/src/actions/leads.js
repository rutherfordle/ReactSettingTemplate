import axios from "axios";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

import {GET_LEADS, DELETE_LEAD, ADD_LEAD, EDIT_LEAD, REGISTER_SUCCESS, REGISTER_FAIL} from "./types";

// GET LEADS
export const getLeads = (id) => (dispatch, getState) => {
  axios
    .get("/api/leads/", tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE LEAD
export const deleteLead = id => (dispatch, getState) => {
    axios
        .delete(`/api/leads/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ deleteLead: "Lead Deleted" }));
            dispatch({
                type: DELETE_LEAD,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

// ADD LEAD
export const addLead = lead => (dispatch, getState) => {

  axios
    .post("/api/leads/", lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
// EDIT LEAD

export const editLead = lead => (dispatch, getState) => {

    axios
        .post(`/api/leads/`, lead, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({ addLead: "Lead Added" }));
            dispatch({
                type: ADD_LEAD,
                payload: res.data
            });
        })
        .catch(err =>
            dispatch(returnErrors(err.response.data, err.response.status))
        );
};