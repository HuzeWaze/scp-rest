// helper.js
import axios from 'axios';

// CORS enabled apikey
const apikey = '60af9849318a330b62f58798';


// REST endpoint
let restdb = axios.create({
    baseURL: 'https://scp6210-cb70.restdb.io/',
    timeout: 10000,
    headers: {'x-apikey': apikey}
})

//Eventsource endpoint
const realtimeURL = `https://scp6210-cb70.restdb.io/realtime?apikey=${apikey}`

export {apikey, restdb, realtimeURL};