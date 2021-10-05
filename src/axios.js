import axios from "axios";

const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: 'https://intense-cove-41576.herokuapp.com'
  // "http://localhost:5001/clone-a348f/us-central1/api  ",
});

export default instance;