import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";
import Logo from "./Logo.jsx";
import SearchIcon from "./icons/SearchIcon.jsx";

export default function Cabecera({ handlerInputChange, inputValue }) {
	return (
		<Navbar isBordered>
			<NavbarContent justify="center">
				<NavbarBrand className="mr-2">
					<a href="index.html">
						<Logo />
					</a>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent as="div" className="items-center" justify="end">
				<Input
					classNames={{
						base: "max-w-full sm:max-w-[20rem] h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Buscar artista"
					size="sm"
					startContent={<SearchIcon />}
					type="search"
					onChange={handlerInputChange}
					defaultValue={inputValue}
					autoFocus
				/>
			</NavbarContent>
		</Navbar>
	);
}
