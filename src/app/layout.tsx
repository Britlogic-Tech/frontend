import type { Metadata } from "next";
import { Geist, Geist_Mono, Golos_Text } from "next/font/google";

import Navigation from "@/components/ui/Navigation";
import NavigationBar from "@/components/ui/NavigationBar";
import Footer from "@/components/structure/Footer";
import "./globals.css";
import "@/scss/main.scss";

const heroFont = Golos_Text({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});
const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "BritLogic Technologies",
	description: "Software development and consulting services",
	icons: {
		icon: [{ url: "/icons/fav.svg", type: "image/svg+xml" }],
		apple: [{ url: "/icons/fav.svg", type: "image/svg+xml" }],
		other: [
			{
				rel: "mask-icon",
				url: "/icons/fav.svg",
				color: "#003566",
			},
		],
	},
	manifest: "./manifest.json",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${heroFont.className} antialiased`}
			>
				<NavigationBar>
					<Navigation />
				</NavigationBar>
				{children}
				<Footer />
			</body>
		</html>
	);
}
