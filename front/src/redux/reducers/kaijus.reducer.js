import { GET_ALLKAIJUS } from "../actions/post.actions";

const initialState = {};
export default function allPostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALLKAIJUS:
      return action.payload;
    default:
      return state;
  }
}
