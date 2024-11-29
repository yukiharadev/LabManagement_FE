const API_URL = "https://localhost:7144/api";


//DEVICE
const GET_ALL_DEVICES_URL = `/devices/get-all`;
const DELETE_DEVICE_URL = (id: number) => `/devices/delete/${id}`;
const DELETE_DEVICES_ITEM_URL = (deviceId: number, deviceItemId: number) => `/devices/delete-device-item/${deviceId}/${deviceItemId}`;
const GET_DEVICE_BY_ID_URL = (id: number) => `/devices/get-by-id/${id}`;
const CREATE_DEVICE_ITEM_URL = (id: number) => `/devices/${id}/add-device-item`;
const GET_BOOKING_DEVICE_URL = `/DeviceBorrowing`;


const UPDATE_DEVICE_ITEM_URL = (deviceId: number, deviceItemId: number) => `/devices/${deviceId}/update-device-item/${deviceItemId}`;
//USER
const LOGIN_URL = `${API_URL}/user/login`;
const GET_USER_BY_USERNAME_URL = (username: string | null) => `${API_URL}/user/get/${username}`;
const GET_ALL_USERS = `/user/get-all`;
const APPROVE_USER = (username: string | null, role: string) => `/user/approve/${username}?role=${role}`;
const DELETE_USER = (username: string | null) => `/user/delete/${username}`;
const CREATE_USER_BY_ADMIN = `/user/admin-register`;


//BOOKING
const BOOKING_DEVICE_URL = `/DeviceBorrowing/create`;
const GET_HISTORY_DEVICE_URL = (username: string) => `/DeviceBorrowing/history/${username}`;
const ACCEPT_BOOKING_DEVICE_URL = (id: number) => `/DeviceBorrowing/${id}/approve`;
const GET_CATEGORY_URL = `/devices/categories`;
const BOOKING_LAB_URL = `/LabBorrowingRequests`;
const REJECT_BOOKING_DEVICE_URL = (id: number) => `/DeviceBorrowing/${id}/reject`;
const REMOVE_BOOKING_DEVICE_URL = (id: number) => `/DeviceBorrowing/${id}`;
const GET_BOOKING_DEVICE_BY_ID_URL = (id: string | undefined) => `/DeviceBorrowing/${id}`;

//LAB
const GET_LAB_URL = `/LabBorrowingRequests`;
const GET_LAB_BY_ID_URL = (id: string | undefined) => `/LabBorrowingRequests/${id}`;
const APPROVE_LAB_URL = (id: number ) => `/LabBorrowingRequests/approve/${id}`;
const LAB_HISTORY_URL = (username: string) => `/LabBorrowingRequests/history/${username}`;


//SERVER
const SERVER_BOOKING = "Server";
const GET_SERVER_BOOKING =  `/Server`;
const APPROVE_SERVER_BOOKING = (id: number) => `/Server/approve/${id}`;
const DELETE_SERVER_BOOKING = (id: number) => `/Server/${id}`;
const GET_SERVER_DETAIL_URL = (id: string | undefined) => `/Server/${id}`;
const GET_SERVER_HISTORY_URL = (username: string) => `/Server/history?username=${username}`;

export {
    GET_SERVER_HISTORY_URL,
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
    REJECT_BOOKING_DEVICE_URL,
    GET_CATEGORY_URL,
    UPDATE_DEVICE_ITEM_URL,
    GET_BOOKING_DEVICE_URL,
    CREATE_USER_BY_ADMIN,
    GET_HISTORY_DEVICE_URL,
    GET_BOOKING_DEVICE_BY_ID_URL,
    BOOKING_LAB_URL,
    ACCEPT_BOOKING_DEVICE_URL,
    GET_LAB_URL,
    GET_LAB_BY_ID_URL,
    APPROVE_LAB_URL,
    LAB_HISTORY_URL,
    REMOVE_BOOKING_DEVICE_URL,
    SERVER_BOOKING,
    GET_SERVER_BOOKING,
    APPROVE_SERVER_BOOKING,
    DELETE_SERVER_BOOKING,
    GET_SERVER_DETAIL_URL
};