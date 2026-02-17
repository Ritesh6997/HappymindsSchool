import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
    return (
        <PageTransition>
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <ScrollReveal>
                    <h1 className="section-title">Contact Us</h1>
                </ScrollReveal>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    {/* Contact Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <ScrollReveal delay={0.1}>
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
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="card">
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem' }}>
                                    <Phone color="var(--color-success)" /> Call Us
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                                    9226340516
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.3}>
                            <div className="card">
                                <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem' }}>
                                    <Mail color="var(--color-accent)" /> Email Us
                                </h3>
                                <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                                    happyminds112024@gmail.com
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Map */}
                    <ScrollReveal delay={0.4}>
                        <div className="card" style={{ minHeight: '400px', padding: 0, overflow: 'hidden' }}>
                            <iframe
                                src="https://maps.google.com/maps?q=20.758407566224868,78.6117283940406&hl=en&z=15&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '400px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Happy Minds School Location"
                            ></iframe>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </PageTransition>
    );
}
