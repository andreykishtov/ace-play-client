import axios from 'axios';

const URL = 'http://10.61.98.49:8080';

export default {
      fetchUser(userId) {
        return axios.get('/api/user/' + userId);
      },
      registerUser(userId) {
          console.log("inside", userId);
          const usertest = {"firstName":"testUser","lastName":"testUserLastName","nick":"testNick","email":"test@test.com"};
        return fetch(`${URL}/users/user`,{
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(usertest)
            })
        }
}
