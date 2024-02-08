// import axios from 'axios/dist/axios';
// import Toastify from 'toastify-js'
let data = [];
let isLoading = true;
async function fetchAPI(url, query) {
  try {
    isLoading = true;
    const response = await axios.get(`${url}?${query}`)
    data = response;
  } catch (error) {
    data = [];
    Toastify({
      text: error.message,
      duration: 3000,
    }).showToast();
  } finally {
    isLoading = false;
  }
  return { isLoading, data };
}
export default fetchAPI;
