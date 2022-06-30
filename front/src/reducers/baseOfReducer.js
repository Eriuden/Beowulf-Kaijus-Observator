import { combineReducers } from "redux";
import agentReducer from "./user.reducer";
import agentsReducer from "./users.reducer";
import kaijuReducer from "./kaiju.reducer";
import KaijusReducer from "./kaijus.reducer";

//l'appel du reducer est TOUJOURS sous forme de const,
//il s'est pas mis à la page l'ami redux

const reducers = combineReducers({
  agentReducer,
  agentsReducer,
  kaijuReducer,
  KaijusReducer,
});

export default reducers;
