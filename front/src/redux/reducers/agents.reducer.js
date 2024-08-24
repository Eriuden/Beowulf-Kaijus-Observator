import { GET_AGENTS } from "../actions/agent.action";

const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AGENTS:
      return action.payload;
    default:
      return state;
  }
}
