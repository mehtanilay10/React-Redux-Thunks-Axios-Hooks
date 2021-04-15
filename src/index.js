import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import UsersPage from "./pages/Users";
import configureStore from "./redux/stores/configureStore";

const store = configureStore();

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<UsersPage />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
