import Context from "./context";
import { Airport } from "api/airport";

type State = Airport[];
type Action = { type: "update"; airports: Airport[] };

function Reducer(state: State, action: Action) {
  if (action.type === "update") {
    return action.airports;
  }

  return state;
}

export const {
  Provider: AirportProvider,
  useDispatch: useAirportDispatch,
  useState: useAirportState,
} = Context(Reducer);
