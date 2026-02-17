import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">Contact Us</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                {/* Contact Info */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="card">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem' }}>
                            <MapPin color="var(--color-secondary)" /> Visit Us
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                            At. Priyadarshini Mahila Mahavidyalaya,<br />
                            Savitribai Phule Gyanmarg,<br />
                            New Nalwadi, Wardha - 442001
                        </p>
                    </div>

                    <div className="card">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem' }}>
                            <Phone color="var(--color-success)" /> Call Us
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                            9373640774<br />
                            9226340516
                        </p>
                    </div>

                    <div className="card">
                        <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem' }}>
                            <Mail color="var(--color-accent)" /> Email Us
                        </h3>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                            info@happyminds.com
                        </p>
                    </div>
                </div>

                {/* Map Placeholder */}
                <div className="card" style={{ minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', border: '2px dashed var(--color-border)' }}>
                    <p style={{ color: 'var(--color-text-muted)' }}>Map Integration Placeholder</p>
                </div>
            </div>
        </div>
    );
}
