import axios from "axios";

export const GET_ALLKAIJUS = "GET_ALLKAIJUS";
export const GET_KAIJU = "GET_KAIJU";
export const GET_KAIJU_ERRORS = "GET_KAIJU_ERRORS";
export const UPDATE_KAIJU = "UPDATE_KAIJU";
export const DELETE_KAIJU = "DELET_KAIJU";

export const getKaijus = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/kaiju`)
      .then((res) => {
        dispatch({ type: GET_ALLKAIJUS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const getKaiju = () => {
  return (dispatch) => {
    return axios

      .get(`${process.env.REACT_APP_API_URL}api/kaiju/:id`)
      .then((res) => {
        dispatch({ type: GET_KAIJU, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const addKaiju = (data) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/kaiju/`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_KAIJU_ERRORS, payload: res.data.errors });
        }else {
          dispatch({ type: GET_KAIJU_ERRORS, payload: ""})
      }
      });
  };
};

export const updateKaiju = (
  kaijuId,
  description,
  threatForHumanity,
  threatForEarth
) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL}api/kaiju/${kaijuId}`,
      data: { description, threatForHumanity, threatForEarth },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_KAIJU,
          payload: { description, threatForHumanity, threatForEarth, kaijuId },
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteKaiju = (
  kaijuId,
  picture,
  name,
  description,
  threatForEarth,
  threatForHumanity
) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `${process.env.REACT_APP_API_URL}api/kaiju/${kaijuId}`,
      data: { picture, name, description, threatForEarth, threatForHumanity },
    })
      .then((res) => {
        dispatch({ type: DELETE_KAIJU, payload: { kaijuId } });
      })
      .catch((err) => console.log(err));
  };
};
