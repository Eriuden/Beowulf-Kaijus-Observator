import axios from "axios";
export const GET_AGENTS = "GET_AGENTS";
export const GET_AGENT = "GET_AGENT";
export const UPDATE_AGENT = "UPDATA_AGENT";
export const DELETE_AGENT = "DELETE_AGENT";

export const getAgent = (uid) => {
  return (dispatch) => {
    return (
      axios
        //dans le cas d'un get, le param est entres accolades
        .get(`${process.env.REACT_APP_API_URL}api/agent/${uid}`)
        .then((res) => {
          dispatch({ type: GET_AGENT, payload: res.data });
        })
        .catch((err) => console.log(err))
    );
  };
};

export const getAgents = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/agent`)
      .then((res) => {
        dispatch({ type: GET_AGENTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateAgent = (agentId, name, password, bio) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/agent/${agentId}`,
      data: { name, password, bio },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_AGENT,
          payload: { name, password, bio, agentId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteKaiju = (agentId, name, password, bio) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/agent/${agentId}`,
      data: { name, password, bio },
    })
      .then((res) => {
        dispatch({ type: DELETE_AGENT, payload: { agentId } });
      })
      .catch((err) => console.log(err));
  };
};
