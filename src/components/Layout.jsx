import Header from './Header';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout({ children }) {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1 }}>
                {children}
            </main>
            <WhatsAppButton />
            <Footer />
        </div>
    );
}
