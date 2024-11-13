import { DeviceState } from "./DeviceTypes";
import {
  GET_ALL_DEVICES,
  GET_ALL_DEVICES_SUCCESS,
  GET_ALL_DEVICES_FAILED,
} from "./DeviceAction";

const initialState: DeviceState = {
  data: [],
  loading: false,
  error: null,
};

const deviceReducer = (state = initialState, action: any): DeviceState => {
  switch (action.type) {
    case GET_ALL_DEVICES:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_DEVICES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_DEVICES_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default deviceReducer;
