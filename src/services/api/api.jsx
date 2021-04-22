import axios from 'axios';

class Api {
  constructor() {
    this.baseURL = process.env.API_URL
  }

  async getComments() {
    const response = await axios.get(`https://backend-curriculum-mateus.herokuapp.com/comments`);

    return response.data.data;
  }
}

export default new Api();
