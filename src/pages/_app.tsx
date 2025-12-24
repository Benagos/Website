import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Benagos, The Product Company</title>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}
