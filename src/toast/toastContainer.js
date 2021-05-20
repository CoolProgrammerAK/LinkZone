import React from 'react'

import { ToastContainer } from "react-toastify";
export default function Toastcontainer() {
    return (
        <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
  />
    )
}