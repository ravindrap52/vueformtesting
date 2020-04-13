import axios from "axios";

export function loginUser(loginData) {
  return axios
    .post("http://localhost:9999/api/save_login_info/login_info", loginData)
    .then(response => {
      if (response && response.data) {
        return response.data;
      }
    })
    .catch(error => {
      console.error(error);
    });
}
