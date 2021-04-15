import actionTypes from "./users.actionTypes";

const usersLoadStart = () => ({
	type: actionTypes.USERS_LOAD_START,
});

const usersLoadSuccess = (users) => ({
	type: actionTypes.USERS_LOAD_SUCCESS,
	payload: users,
});

const usersLoadError = (errorMessage) => ({
	type: actionTypes.USERS_LOAD_ERROR,
	payload: errorMessage,
});

export default {
	usersLoadStart,
	usersLoadSuccess,
	usersLoadError,
};
