
import { Dispatch } from "redux";
import { GET_ALL_DEVICES_URL } from "../../configs/Api.config.tsx";
import api from "../../configs/axios.config.tsx";

export const GET_ALL_DEVICES = "GET_ALL_DEVICES";
export const GET_ALL_DEVICES_SUCCESS = "GET_ALL_DEVICES_SUCCESS";
export const GET_ALL_DEVICES_FAILED = "GET_ALL_DEVICES_FAILED";

export const fetchAllDevices = () => async (dispatch: Dispatch) => {
  dispatch({ type: GET_ALL_DEVICES });

  try {
    const response = await api.get(GET_ALL_DEVICES_URL);

    if (response.status == 200) {
      dispatch({
        type: GET_ALL_DEVICES_SUCCESS,
        payload: response.data,
      });
    }

  } catch (error) {
    dispatch({
      type: GET_ALL_DEVICES_FAILED,
      error: error || "Failed to fetch devices",
    });
  }
};
