import { Helmet } from 'react-helmet-async';

export default function SEO({
    title = "Happy Minds Play & Preschool Wardha",
    description = "Quality preschool education in Wardha with 25+ activities. Admissions open for Play Group, Nursery, Jr. KG, and Sr. KG.",
    keywords = "preschool wardha, playschool wardha, nursery wardha",
    canonical = "https://happymindswardha.com/"
}) {
    const fullTitle = title.includes('Happy Minds') ? title : `${title} | Happy Minds School`;

    return (
        <Helmet>
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content={canonical} />

            {/* Twitter */}
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
        </Helmet>
    );
}
