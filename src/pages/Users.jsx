import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAsync } from "../redux/reducers/users/users.thunks";

const UserListing = () => {
	const dispatch = useDispatch();
	const { isLoading, users, errorMessage } = useSelector((state) => state.users);

	useEffect(() => {
		dispatch(loadUsersAsync());
	}, []);

	return (
		<div>
			<h1>User Listing</h1>
			{isLoading && <h3>Loading...</h3>}
			{errorMessage && <h3>{errorMessage}</h3>}
			{users && users.map((user) => <h5 key={user.id}>{user.name}</h5>)}
		</div>
	);
};

export default UserListing;
