import React, { useState } from "react";

function Tab1() {
	const [value, setValue] = useState();
	function handleSubmit(e) {
		e.preventDefault();
		const valueToSend = JSON.stringify({
			value: value,
		});
		const requestOptions = {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: valueToSend,
		};
		fetch("http://localhost:3001/add", requestOptions)
			.then((res) => res.json)
			.then((data) => {});
		setValue("");
	}
	function handleDelete() {
		fetch("http://localhost:3001/deleteAll");
	}
	return (
		<section>
			<form onSubmit={handleSubmit}>
				<input
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					type="number"
					placeholder="Type Value"
				/>
				<button type="submit">Send</button>
			</form>
			<button onClick={handleDelete}>Delete All</button>
		</section>
	);
}

export default Tab1;
