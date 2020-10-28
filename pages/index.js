import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout';
import utilStyles from '../styles/utils.module.css';

import { getSortedPostsData } from '../lib/posts';

export default function Home({ allPostsData }) {
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					Sahil! professional full stack javascript developer, he has work on
					multiple industrial propjects, flexible to work in any domain and
					technology or tools related to javascript. Skilss: ReactJs, Redux,
					NextJs, Angular, Node, Express, Nest
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on
					<a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>BLOGS!</h2>
				<ul className={utilStyles.list}>
					{allPostsData?.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
}

export async function getStaticProps(context) {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}
