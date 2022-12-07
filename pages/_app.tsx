import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Quicksand } from '@next/font/google';
import Layout from '../components/layout';
import Head from 'next/head';

const customFont = Quicksand({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<style jsx global>{`
					:root {
						--font-custom: ${customFont.style.fontFamily};
					}
				`}</style>
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
