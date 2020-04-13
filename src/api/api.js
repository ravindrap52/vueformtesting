import axios from "axios";

export async function loginUser(loginData) {
  const response = await axios.post(
    "http://localhost:9999/api/save_login_info/login_info",
    loginData
  );
  if (response && response.data) {
    return response.data;
  }
}
