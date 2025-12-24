import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Onest:wght@100..900&display=swap"
					rel="stylesheet"
				/>

				{/* open graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="Benagos" />
				<meta property="og:title" content="Benagos, The Product Company" key="title" />
				<meta
					property="og:description"
					content="Benagos is a digital product company focused on building thoughtful, well-designed software that solves real problems. We create and own a portfolio of products across technology, commerce, and intelligence—each built to stand on its own, yet stronger as part of a connected ecosystem.
"
				/>
				<meta property="og:url" content="https://website-one-brown-83.vercel.app/" />
				<meta property="og:author" name="Afolabi Babatunde Joseph" />
				<meta property="og:author" name="Ehizojie Ihayere" />
			</Head>
			<body className="antialiased">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
