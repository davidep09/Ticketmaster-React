import React from "react";
import ListaTarjetas from "./ListaTarjetasArtistas.jsx";
import Cabecera from "./Cabecera.jsx";

export default function App({ handlerInputChange, inputValue }) {
	const [artistas, setArtistas] = React.useState([]);
	React.useEffect(() => {
		fetch(
			"https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=" +
				inputValue +
				"&apikey=UZx9GaIJIlPP0qnjghPWXsepfd4teGXp"
		)
			.then((response) => response.json())
			.then((data) => {
				let artMusic = [];
				data._embedded.attractions.forEach((attraction) => {
					if (
						attraction.classifications[0].segment.name === "Music"
					) {
						artMusic.push(attraction);
					}
				});
				setArtistas(artMusic);
				console.log("artistas", artistas);
			})
			.catch((error) => {
				console.error("Error fetching artistas:", error);
			});
	}, [inputValue]);

	return (
		<>
			<Cabecera
				handlerInputChange={handlerInputChange}
				inputValue={inputValue}
			/>
			<ListaTarjetas artistas={artistas} />
		</>
	);
}
