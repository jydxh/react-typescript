import { useState } from "react";

type Link = {
	id: number;
	url: string;
	text: string;
};

const navLinks: Link[] = [
	{ id: 1, url: "some url1", text: "someText1" },
	{ id: 2, url: "some url2", text: "someText2" },
	{ id: 3, url: "some url3", text: "someText3" },
];

function Component() {
	const [text, setText] = useState("shakeAndBake");
	const [links, setLinks] = useState(navLinks);
	return (
		<div>
			<h2 className="mb-1">React & Typescript</h2>
			<button
				className="btn btn-center"
				onClick={() => {
					if (text === "shakeAndBake") {
						setText("123");
					} else {
						setText("shakeAndBake");
					}

					setLinks([...links, { id: 4, url: "url4", text: "text4" }]);
				}}
			>
				Click me
			</button>
			<h2>{text}</h2>
		</div>
	);
}
export default Component;
