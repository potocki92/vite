
import { Helmet, HelmetProvider } from "react-helmet-async";

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
            </HelmetProvider>

            Home
        </>
    )
}

export default Home