export default function StructuredData() {
    const schoolData = {
        "@context": "https://schema.org",
        "@type": "School",
        "name": "Happy Minds Play & Preschool",
        "alternateName": "Happy Minds School Wardha",
        "description": "Quality preschool education in Wardha with 25+ activities. Admissions open for Play Group, Nursery, Jr. KG, and Sr. KG.",
        "url": "https://happymindswardha.com",
        "telephone": "+919226340516",
        "email": "happyminds112024@gmail.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "At. Priyadarshini Mahila Mahavidyalaya, Savitribai Phule Gyanmarg, New Nalwadi",
            "addressLocality": "Wardha",
            "addressRegion": "Maharashtra",
            "postalCode": "442001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "20.758407566224868",
            "longitude": "78.6117283940406"
        },
        "priceRange": "$$",
        "image": "https://happymindswardha.com/school-logo.jpg",
        "sameAs": [
            "https://www.facebook.com/happymindswardha",
            "https://www.instagram.com/happymindswardha"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schoolData) }}
        />
    );
}
