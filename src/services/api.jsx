import axios from 'axios';

class Api {
  constructor() {
    this.baseURL = 'https://backend-curriculum-mateus.herokuapp.com'
  }

  async getComments() {
    const response = await axios.get(`${this.baseURL}/comments`);

    return response.data.data;
  }

  async sendComment(name, content) {
    await axios({
      method: 'post',
      url: `${this.baseURL}/comments`,
      data: {
        name,
        content
      }
    })
  }

  async sendContact(name, email, phone, message) {
    await axios({
      method: 'post',
      url: `${this.baseURL}/contact`,
      data: {
        name,
        email,
        phone,
        message
      }
    })
  }
}

export default new Api();
