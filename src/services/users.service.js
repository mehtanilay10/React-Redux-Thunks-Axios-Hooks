import apiClient from "../helpers/apiClient";

class UsersService {
	getAllUsers = () => apiClient().get("users");
}

export default new UsersService();
