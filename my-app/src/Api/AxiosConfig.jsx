/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import axios from "axios"

// const Base_url="http://localhost:1337/api"
const Base_url="https://loved-dance-33cef4aff2.strapiapp.com/api"
// eslint-disable-next-line react-refresh/only-export-components
const AxiosConfig=axios.create({
    baseURL:Base_url,
    headers:{
        Accept:"application/json",
        "Content-Type":"application/json"
    }
})
export{AxiosConfig,Base_url}





