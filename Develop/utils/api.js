
   
const axios = require('axios');

const api = {
  async getUser(userName,repoName) {
    try { let response = await axios
        
      // Sample URL: https://api.github.com/users/connietran-dev
        .get(`https://api.github.com/repos/${userName}/${repoName}`);
        return response.data;

      } catch (error) {
        console.log(error);
      }
  },
  async getBadge(userName,repoName) {
    try { let response = await axios.get(`https://img.shields.io/github/license/${userName}/${repoName}`);
        
    return response.data;

      } catch (error) {
        console.log(error);
      }
  },
};

module.exports = api;