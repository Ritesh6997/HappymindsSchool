import { Link } from 'react-router-dom';
import { BookOpen, Users, Star, ArrowRight } from 'lucide-react';

export default function Home() {
    return (
        <div style={{ flex: 1 }}>
            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, var(--color-bg-light) 0%, #e0f2fe 100%)',
                padding: '5rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                        Welcome to <br />
                        <span style={{ color: 'var(--color-secondary)', fontSize: '4rem' }}>Happy Minds</span>
                    </h1>
                    <p style={{ fontSize: '1.5rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                        "Cultivate the Joy of Learning"
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link to="/admissions" className="btn btn-primary">
                            Enroll Now
                        </Link>
                        <Link to="/programs" className="btn btn-secondary">
                            Our Programs
                        </Link>
                    </div>
                </div>
            </section>

            {/* Highlights Section */}
            <section className="container" style={{ padding: '5rem 1rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title">Why Choose Happy Minds?</h2>
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
                        <div key={index} className="card" style={{ textAlign: 'center' }}>
                            <div style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', borderRadius: '50%', background: 'white', border: '2px solid var(--color-border)' }}>
                                {feature.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
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
        </div>
    );
}
