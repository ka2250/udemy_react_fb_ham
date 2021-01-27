import React, { useState } from "react";
import SignIn from "./SignIn";

const App = () => {
	const [name, setName] = useState("");
	console.log({ name });

	return <SignIn setName={setName} />;
};

export default App;
