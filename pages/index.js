import Head from 'next/head';
import Image from 'next/image';
import PizzaList from '../components/PizzaList';
import Slider from '../components/Slider';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pizza shop</title>
				<meta name="description" content="pizza ordering shop" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Slider />
			<PizzaList />
		</div>
	);
}
