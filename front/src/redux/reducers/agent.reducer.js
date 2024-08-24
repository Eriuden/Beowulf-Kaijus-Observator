import { GET_AGENT } from "../actions/agent.action";
import { DELETE_AGENT } from "../actions/agent.action";
import { UPDATE_AGENT } from "../actions/agent.action";

const initialState = {};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AGENT:
      return action.payload;
    case UPDATE_AGENT:
      return {
        ...state,
        pseudo: action.payload,
        password: action.payload,
      };
    case DELETE_AGENT:
      return state.filter((agent) => agent._id !== action.payload.agentId);
    default:
      return state;
  }
}
