import axios from "axios";

const instance=axios.create({
    baseURL: 'http://localhost:5001/clozon-fc92d/us-central1/api' // the cloud function url
});

export default instance;