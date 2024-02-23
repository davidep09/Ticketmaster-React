import TarjetaArtista from "./TarjetaArtista";

const ListaTarjetasArtistas = ({ artistas }) => {
	return (
		<div className="grid grid-cols-3">
			{artistas.map((artista) => (
				<TarjetaArtista
					key={artista.id}
					nombre={artista.name}
					rutaFoto={artista.images[0].url}
					id={artista.id}
					rrss={artista.externalLinks}
					eventos={artista.upcomingEvents.ticketmaster}
					genero={artista.classifications[0].genre.name}
					subgenero={
						artista.classifications[0].subGenre
							? artista.classifications[0].subGenre.name
							: null
					}
					ticketmaster={artista.url}
				/>
			))}
		</div>
	);
};

export default ListaTarjetasArtistas;
