import {
	Card,
	CardHeader,
	CardBody,
	Image,
	Button,
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
	Spacer,
	Textarea,
	Chip,
} from "@nextui-org/react";
import SpotifyIcon from "./icons/SpotifyIcon.jsx";
import YoutubeIcon from "./icons/YoutubeIcon.jsx";
import FacebookIcon from "./icons/FacebookIcon.jsx";
import InstagramIcon from "./icons/InstagramIcon.jsx";
import TwitterIcon from "./icons/TwitterIcon.jsx";
import WikipediaIcon from "./icons/WikipediaIcon.jsx";
import HomepageIcon from "./icons/HomepageIcon.jsx";

export default function TarjetaArtista({
	nombre,
	rutaFoto,
	id,
	rrss,
	eventos,
	genero,
	subgenero,
	ticketmaster,
}) {
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const handlerComprarEntradas = () => {
		window.open(ticketmaster, "_blank");
	};

	return (
		<Card className="py-4 m-5">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<h4 className="font-bold text-large">{nombre}</h4>
			</CardHeader>
			<CardBody className="overflow-visible py-2 content-center mt-2">
				<div className="flex justify-center pb-0 h-auto">
					<Image
						alt="Foto del artista"
						className="object-cover rounded-xl h-72"
						src={rutaFoto}
						width={400}
					/>
				</div>
				<Button
					onPress={onOpen}
					className="mt-4 bg-color-primary-500 text-white font-semibold"
				>
					Mostrar más
				</Button>
				<Modal
					isOpen={isOpen}
					onOpenChange={onOpenChange}
					backdrop="blur"
					size="5xl"
				>
					<ModalContent>
						{(onClose) => (
							<>
								<ModalHeader>
									<h1 className="text-center font-extrabold">
										Información del artista
									</h1>
								</ModalHeader>
								<ModalBody>
									<div className="flex justify-left pb-0 h-auto">
										<Image
											alt="Foto del artista"
											className="object-cover rounded-xl h-72"
											src={rutaFoto}
											width={500}
										/>
										<Spacer x={10} />
										<div className="w-96">
											<Chip className="mx-2">
												{genero}
											</Chip>
											{subgenero && (
												<Chip className="mx-2">
													{subgenero}
												</Chip>
											)}
											<Spacer y={4} />
											<Textarea
												isReadOnly
												variant="bordered"
												labelPlacement="inside"
												label="Eventos programados"
												defaultValue={eventos}
												className="max-w-sm mx-h-32"
											/>
										</div>
									</div>
									<div className="flex justify-left pb-0 h-auto">
										<Button
											isIconOnly
											variant="light"
											onPress={() =>
												window.open(
													rrss.spotify[0].url,
													"_blank"
												)
											}
										>
											<SpotifyIcon />
										</Button>
										<Spacer x={2} />
										<Button
											isIconOnly
											variant="light"
											onPress={() =>
												window.open(
													rrss.youtube[0].url,
													"_blank"
												)
											}
										>
											<YoutubeIcon />
										</Button>
										<Spacer x={2} />
										<Button
											isIconOnly
											variant="light"
											onPress={() =>
												window.open(
													rrss.instagram[0].url,
													"_blank"
												)
											}
										>
											<InstagramIcon />
										</Button>
										<Spacer x={2} />
										<Button
											isIconOnly
											variant="light"
											onPress={() =>
												window.open(
													rrss.facebook[0].url,
													"_blank"
												)
											}
										>
											<FacebookIcon />
										</Button>
										<Spacer x={2} />
										<Button
											isIconOnly
											variant="light"
											onPress={() =>
												window.open(
													rrss.twitter[0].url,
													"_blank"
												)
											}
										>
											<TwitterIcon />
										</Button>
										<Spacer x={2} />
										<Button
											isIconOnly
											variant="light"
											onPress={() =>
												window.open(
													rrss.wikipedia[0].url,
													"_blank"
												)
											}
										>
											<WikipediaIcon />
										</Button>
										<Spacer x={2} />
										<Button
											isIconOnly
											variant="light"
											onPress={() =>
												window.open(
													rrss.homepage[0].url,
													"_blank"
												)
											}
										>
											<HomepageIcon />
										</Button>
									</div>
								</ModalBody>
								<ModalFooter>
									<Button
										color="danger"
										variant="light"
										onPress={onClose}
									>
										Cerrar
									</Button>
									<Button
										color="primary"
										onPress={handlerComprarEntradas}
									>
										Comprar entradas
									</Button>
								</ModalFooter>
							</>
						)}
					</ModalContent>
				</Modal>
			</CardBody>
		</Card>
	);
}
