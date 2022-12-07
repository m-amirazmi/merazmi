import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Merazmi | Welcome To My Home</title>
			</Head>
			<main className="font-primary">
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</>
	);
}
