const API_URL = "https://localhost:7144/api";


//DEVICE
const GET_ALL_DEVICES_URL = `/devices/get-all`;
const DELETE_DEVICE_URL = (id: number) => `/devices/delete/${id}`;
const DELETE_DEVICES_ITEM_URL = (deviceId: number, deviceItemId: number) => `/devices/delete-device-item/${deviceId}/${deviceItemId}`;
const GET_DEVICE_BY_ID_URL = (id: number) => `/devices/get-by-id/${id}`;
const CREATE_DEVICE_ITEM_URL = (id: number) => `/devices/${id}/add-device-item`;
const UPDATE_DEVICE_ITEM_URL = (deviceId: number, deviceItemId: number) => `/devices/${deviceId}/update-device-item/${deviceItemId}`;
//USER
const LOGIN_URL = `${API_URL}/user/login`;
const GET_USER_BY_USERNAME_URL = (username: string | null) => `${API_URL}/user/get/${username}`;
const GET_ALL_USERS = `/user/get-all`;
const APPROVE_USER = (username: string | null, role: string) => `/user/approve/${username}?role=${role}`;
const DELETE_USER = (username: string | null) => `/user/delete/${username}`;


//BOOKING
const BOOKING_DEVICE_URL = `/DeviceBorrowing/create`;


const GET_CATEGORY_URL = `/devices/categories`;


export {
    API_URL,
    GET_ALL_DEVICES_URL,
    LOGIN_URL,
    GET_USER_BY_USERNAME_URL,
    GET_DEVICE_BY_ID_URL,
    DELETE_DEVICE_URL,
    DELETE_DEVICES_ITEM_URL,
    CREATE_DEVICE_ITEM_URL,
    GET_ALL_USERS,
    APPROVE_USER,
    DELETE_USER,
    BOOKING_DEVICE_URL,
    GET_CATEGORY_URL,
    UPDATE_DEVICE_ITEM_URL
};