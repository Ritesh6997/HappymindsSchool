import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import StructuredData from './StructuredData';

export default function Layout({ children }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <StructuredData />
            <Header />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
}
