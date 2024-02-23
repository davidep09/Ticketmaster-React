import Logo from "./Logo";
import {
	Card,
	CardHeader,
	CardFooter,
	Image,
	Button,
	Input,
} from "@nextui-org/react";

export default function Principal({ handlerInputChange, searchValue }) {
	return (
		<>
			<header className="m-5 flex justify-center items-center">
				<a href="index.html">
					<Logo />
				</a>
			</header>
			<Input
				onChange={handlerInputChange}
				className="mx-auto w-96"
				size="lg"
				type="text"
				label="Buscar artista"
				placeholder="Introduce el nombre del artista"
				defaultValue={searchValue}
				autoFocus
			/>
			<div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2 px-8 mx-auto mt-5">
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">
							Vive el momento
						</p>
						<h4 className="text-white font-medium text-large">
							¡Disfruta de la música en directo!
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="src/assets/images/guitar.webp"
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">
							Escoge entre miles de eventos
						</p>
						<h4 className="text-white font-medium text-large">
							¡No te pierdas ni uno!
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="src/assets/images/pexels-annam-w-1047442.jpg"
					/>
				</Card>
				<Card className="col-span-12 sm:col-span-4 h-[300px]">
					<CardHeader className="absolute z-10 top-1 flex-col !items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">
							Apoya a tus artistas favoritos
						</p>
						<h4 className="text-white font-medium text-large">
							¡Compra su música y merchandising!
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Card background"
						className="z-0 w-full h-full object-cover"
						src="src/assets/images/pexels-chris-s-15324093.jpg"
					/>
				</Card>
				<Card
					isFooterBlurred
					className="w-full h-[300px] col-span-12 sm:col-span-5"
				>
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">
							Nuevo
						</p>
						<h4 className="text-white/90 font-medium text-xl">
							Conciertos en streaming
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Concierto background"
						className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
						src="src/assets/images/concierto-pc.webp"
					/>
					<CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
						<div>
							<p className="text-black text-tiny">
								Proximamente.
							</p>
							<p className="text-black text-tiny">
								¿Te avisamos?
							</p>
						</div>
						<Button
							className="text-tiny"
							color="primary"
							radius="full"
							size="sm"
						>
							Notifícame
						</Button>
					</CardFooter>
				</Card>
				<Card
					isFooterBlurred
					className="w-full h-[300px] col-span-12 sm:col-span-7"
				>
					<CardHeader className="absolute z-10 top-1 flex-col items-start">
						<p className="text-tiny text-white/60 uppercase font-bold">
							Entradas en tu móvil
						</p>
						<h4 className="text-white/90 font-medium text-xl">
							Compra tu entrda de forma sencilla y segura
						</h4>
					</CardHeader>
					<Image
						removeWrapper
						alt="Relaxing app background"
						className="z-0 w-full h-full object-cover"
						src="src/assets/images/android-vs-ios.webp"
					/>
					<CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
						<div className="flex flex-grow gap-2 items-center">
							<Image
								alt="Breathing app icon"
								className="rounded-full w-10 h-11 bg-black"
								src="src/assets/icons/logo-ticketmaster-t.png"
							/>
							<div className="flex flex-col">
								<p className="text-tiny text-white/60">
									Ticketmaster
								</p>
								<p className="text-tiny text-white/60">
									Disponible en Google Play y App Store.
								</p>
							</div>
						</div>
						<Button radius="full" size="sm">
							Descargar
						</Button>
					</CardFooter>
				</Card>
			</div>
			<footer className="flex justify-center items-center m-5">
				<p className="text-tiny text-black/80">
					No vinculado a Ticketmaster®. Hecho con fines educativos por
					David Espeso Pastor para la asignatura DWEC de 2DAWN.
				</p>
			</footer>
		</>
	);
}
