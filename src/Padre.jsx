import React, { useState } from "react";
import Principal from "./components/Principal";
import App from "./components/App";

function Padre() {
	const [searchValue, setSearchValue] = useState("");
	const handlerInputChange = (e) => {
		setSearchValue(e.target.value);
	};

	if (searchValue === "") {
		return (
			<Principal
				handlerInputChange={handlerInputChange}
				searchValue={searchValue}
			/>
		);
	} else {
		return (
			<App
				handlerInputChange={handlerInputChange}
				inputValue={searchValue}
			/>
		);
	}
}

export default Padre;
