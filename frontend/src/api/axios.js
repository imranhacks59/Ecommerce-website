import axios from "axios";

export default axios.create({
    baseURL:'http://inventifypro.xyz',
    // headers: {
    //     "Content-Type": "application/json",
    //   },
})