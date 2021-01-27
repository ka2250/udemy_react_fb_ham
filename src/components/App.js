import React, { useState } from "react";
import config from "../config.json";
import SignIn from "./SignIn";
import Main from "./Main";

const App = () => {
	const [name, setName] = useState("");

	if (config.signInEnabled && name === "") {
		return <SignIn setName={setName} />;
	} else {
		return <Main name={name} />;
	}
};

export default App;
