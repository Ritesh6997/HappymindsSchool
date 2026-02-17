import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '3rem 0',
            marginTop: 'auto'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                    {/* Brand */}
                    <div>
                        <h3 style={{ color: 'white', marginBottom: '1rem' }}>Happy Minds</h3>
                        <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                            Cultivate the Joy of Learning. We believe in nurturing creativity, critical thinking, and strong character in every child.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: '#f59e0b', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ marginBottom: '0.5rem' }}><Link to="/about" style={{ color: '#d1d5db' }}>About Us</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link to="/programs" style={{ color: '#d1d5db' }}>Programs & Curriculum</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link to="/admissions" style={{ color: '#d1d5db' }}>Admissions</Link></li>
                            <li style={{ marginBottom: '0.5rem' }}><Link to="/contact" style={{ color: '#d1d5db' }}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ color: '#ef4444', marginBottom: '1rem' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1rem', color: '#d1d5db' }}>
                                <MapPin size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                                <span>At. Priyadarshini Mahila Mahavidyalaya, Savitribai Phule Gyanmarg, New Nalwadi, Wardha - 442001</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', color: '#d1d5db' }}>
                                <Phone size={20} />
                                <span>9373640774 / 9226340516</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#d1d5db' }}>
                                <Mail size={20} />
                                <span>info@happyminds.com</span>
                            </li>
                        </ul>
                    </div>

                </div>

                <div style={{ borderTop: '1px solid #374151', marginTop: '2rem', paddingTop: '2rem', textAlign: 'center', color: '#6b7280' }}>
                    <p>&copy; {new Date().getFullYear()} Happy Minds Play & Preschool. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
