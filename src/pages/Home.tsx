import { Helmet, HelmetProvider } from "react-helmet-async";
import Section from "../components/Section";
import Hero from "../sections/Hero";

const Home = () => {
    const helmetTitle = 'Mateusz Potocki';
    const helmetDescription = 'A passionate fullstack developer based in Boleslawiec, Poland.';

    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>{helmetTitle}</title>
                    <meta name="description" content={helmetDescription} />
                    <link rel="canonical" href="/"/>
                    <meta property="og:title" content={helmetTitle} />
                    <meta property="og:description" content={helmetDescription} />
                </Helmet>
                <Section />
                <Hero/>
            </HelmetProvider>
        </>
    )
}

export default Home