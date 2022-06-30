import { DELETE_KAIJU, GET_KAIJU, UPDATE_KAIJU } from "../actions/post.actions";

const initialState = {};

export default function kaijuReducer(state = initialState, action) {
  switch (action.type) {
    case GET_KAIJU:
      return action.payload;

    case UPDATE_KAIJU:
      return state.map((kaiju) => {
        if (kaiju.id === action.payload.kaijuId) {
          return {
            ...kaiju,
            message: action.payload.message,
          };
        } else return kaiju;
      });
    case DELETE_KAIJU:
      return state.filter((kaiju) => kaiju._id !== action.payload.kaijuId);

    default:
      return state;
  }
}
