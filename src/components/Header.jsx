import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import logo from '../assets/school-logo.jpg';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header style={{
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 50
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
                    <img src={logo} alt="HMS" className="brand-logo" style={{ objectFit: 'contain' }} />
                    <span className="brand-name" style={{ fontWeight: 'bold', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>Happy Minds</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="desktop-nav" style={{ display: 'none' }}>
                    <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
                        <li><Link to="/" style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Home</Link></li>
                        <li><Link to="/about" style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>About Us</Link></li>
                        <li><Link to="/programs" style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Programs</Link></li>
                        <li><Link to="/admissions" style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Admissions</Link></li>
                        <li><Link to="/contact" style={{ fontWeight: '600', color: 'var(--color-text-main)' }}>Contact</Link></li>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <button onClick={() => setIsOpen(!isOpen)} style={{ display: 'block', background: 'none' }} className="mobile-menu-btn">
                    {isOpen ? <X size={28} color="var(--color-primary)" /> : <Menu size={28} color="var(--color-primary)" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'white',
                    borderTop: '1px solid #e2e8f0',
                    padding: '1rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li><Link to="/" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>Home</Link></li>
                        <li><Link to="/about" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>About Us</Link></li>
                        <li><Link to="/programs" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>Programs</Link></li>
                        <li><Link to="/admissions" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>Admissions</Link></li>
                        <li><Link to="/contact" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '0.5rem', fontWeight: '600', color: 'var(--color-text-main)' }}>Contact</Link></li>
                    </ul>
                </div>
            )}
            <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
        </header>
    );
}
