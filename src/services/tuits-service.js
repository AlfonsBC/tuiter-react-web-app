import axios from 'axios';
//const TUITS_API = "http://localhost:4000/api/tuits"; // Location of HTTP Services
//const TUITS_API = "https://tuiter-node-server-app-0q5s.onrender.com/api/tuits"
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
export const createTuit = async (tuit) => {
    // eslint-disable-next-line
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
} 

export const findTuits = async  ()     => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
return tuits;
}
// async tags this function as asynchronous
// send HTTP GET request to TUITS_API
// extract JSON array from response from server
// return tuits

export const deleteTuit = async (tid) => {
const response = await axios // send HTTP Delete request to server
.delete(`${TUITS_API}/${tid}`) // append tuit's id to URL
return response.data // data conains response's status we'll ignore for now
} 
export const updateTuit = async (tuit) => {
    // eslint-disable-next-line
    const response = await axios            // send HTTP PUT request appending tuit's ID
    .put(`${TUITS_API}/${tuit._id}`, tuit); // to URL and embed tuit object in BODY
    return tuit;                            // return tuit update to update in reducer's state's store
} 