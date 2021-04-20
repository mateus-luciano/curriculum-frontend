import axios from 'axios';

class Api {
  constructor() {
    this.baseURL =  process.env.API_URL
  }

  async getComments(page) {
    await axios.get(`${this.baseURL}/comments?page=${page}`)
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => console.log(error))
  }
}

export default new Api();
