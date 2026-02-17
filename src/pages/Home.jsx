import { Link } from 'react-router-dom';
import { BookOpen, Users, Star, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

// Import Activity Images
import activity1 from '../assets/activity-1.jpg';
import activity2 from '../assets/activity-2.jpg';
import activity3 from '../assets/activity-3.jpg';
import activity4 from '../assets/activity-4.jpg';
import activity5 from '../assets/activity-5.jpg';
import activity6 from '../assets/activity-6.jpg';
import activity7 from '../assets/activity-7.jpg';
import activity8 from '../assets/activity-8.jpg';

export default function Home() {
    return (
        <PageTransition>
            <div style={{ flex: 1 }}>
                {/* Hero Section */}
                <section style={{
                    background: 'linear-gradient(135deg, var(--color-bg-light) 0%, #e0f2fe 100%)',
                    padding: '5rem 1rem',
                    textAlign: 'center'
                }}>
                    <div className="container">
                        <ScrollReveal>
                            <h1 className="hero-title">
                                Welcome to <br />
                                <span className="school-name">Happy Minds School</span>
                            </h1>
                            <p style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                                "Cultivate the Joy of Learning"
                            </p>
                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <Link to="/admissions" className="btn btn-primary">
                                    Enroll Now
                                </Link>
                                <Link to="/programs" className="btn btn-secondary">
                                    Our Programs
                                </Link>
                            </div>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Highlights Section */}
                <section className="container" style={{ padding: '5rem 1rem' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <ScrollReveal>
                            <h2 className="section-title">Why Choose Happy Minds?</h2>
                        </ScrollReveal>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                icon: <Star size={40} color="var(--color-accent)" />,
                                title: 'Holistic Development',
                                desc: 'Nurturing creativity, critical thinking, and strong character.'
                            },
                            {
                                icon: <BookOpen size={40} color="var(--color-primary)" />,
                                title: 'Rich Curriculum',
                                desc: 'Diverse curriculum including music, drama, and educational programs.'
                            },
                            {
                                icon: <Users size={40} color="var(--color-success)" />,
                                title: 'Experienced Staff',
                                desc: 'Dedicated and experienced teaching staff to guide every learner.'
                            }
                        ].map((feature, index) => (
                            <ScrollReveal key={index} delay={index * 0.2}>
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'white', border: '2px solid var(--color-border)' }}>
                                        {feature.icon}
                                    </div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                                    <p style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Activities Section */}
                <section className="container" style={{ padding: '5rem 1rem', background: 'var(--color-bg-light)' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <ScrollReveal>
                            <h2 className="section-title">Life at Happy Minds</h2>
                            <p style={{ fontSize: '1.5rem', color: 'var(--color-secondary)', fontWeight: 'bold' }}>
                                Over 25+ Activities for Holistic Development
                            </p>
                        </ScrollReveal>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {[
                            activity1,
                            activity2,
                            activity3,
                            activity4,
                            activity5,
                            activity6,
                            activity7,
                            activity8
                        ].map((img, index) => (
                            <ScrollReveal key={index} delay={index * 0.05}>
                                <div className="card" style={{ padding: '0.5rem', overflow: 'hidden', height: '250px' }}>
                                    <img
                                        src={img}
                                        alt={`Activity ${index + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-md)' }}
                                    />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                        <ScrollReveal delay={0.4}>
                            <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-muted)' }}>
                                From cultural celebrations to sports, arts, and educational field trips, we ensure every child explores their interests and talents.
                            </p>
                        </ScrollReveal>
                    </div>
                </section>

                {/* Call to Action */}
                <ScrollReveal>
                    <section style={{ background: 'var(--color-primary)', padding: '4rem 0', textAlign: 'center', color: 'white' }}>
                        <div className="container">
                            <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Start Your Child's Journey Today</h2>
                            <p style={{ fontSize: '1.25rem', marginBottom: '2rem', opacity: 0.9 }}>
                                Admissions Open for Play Group, Nursery, Jr. KG, and Sr. KG.
                            </p>
                            <Link to="/contact" className="btn" style={{ background: 'white', color: 'var(--color-primary)' }}>
                                Contact Us <ArrowRight size={20} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                        </div>
                    </section>
                </ScrollReveal>
            </div>
        </PageTransition>
    );
}
