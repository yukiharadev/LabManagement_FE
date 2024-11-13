import { createRoot } from "react-dom/client";
import "./index.css";
import store from "./store.tsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./routers/routers.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <RouterProvider router={router} />
  </Provider>,
);
