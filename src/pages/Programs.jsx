import { CheckCircle, Baby, Smile, Star, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

export default function Programs() {
    return (
        <PageTransition>
            <SEO
                title="Programs & Curriculum"
                description="Explore our programs: Play Group, Nursery, Jr. KG, and Sr. KG. Age-appropriate curriculum with focus on holistic development, creativity, and learning through play."
                keywords="playgroup wardha, nursery program, jr kg sr kg, preschool curriculum wardha"
                canonical="https://happymindswardha.com/programs"
            />
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <ScrollReveal>
                    <h1 className="section-title">Programs & Facilities</h1>
                </ScrollReveal>

                {/* Programs Grid */}
                <section style={{ marginBottom: '5rem' }}>
                    <ScrollReveal>
                        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Classes</h2>
                    </ScrollReveal>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        {['Play Group', 'Nursery', 'Jr. KG', 'Sr. KG'].map((cls, idx) => (
                            <ScrollReveal key={idx} delay={idx * 0.1}>
                                <div className="card" style={{ textAlign: 'center', borderTop: `6px solid var(--color-${['primary', 'secondary', 'accent', 'success'][idx]})` }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{cls}</h3>
                                    <p>Age appropriate curriculum designed to foster early development.</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </section>

                {/* Activites & Facilities */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    {/* Facilities */}
                    <section>
                        <ScrollReveal>
                            <h2 style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>Facilities</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Digital & Furnished Classrooms',
                                    'Intelligent Classes for Technology Based Learning',
                                    'Continuous assessments to identify learning losses',
                                    'Well Equipped Computer Lab & Library',
                                    'Campus Under CCTV Surveillance',
                                    'Audio Visual & Play Way Method of Teaching',
                                    'Sport Facilities'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                        <CheckCircle size={20} color="var(--color-success)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </section>

                    {/* Activities */}
                    <section>
                        <ScrollReveal delay={0.2}>
                            <h2 style={{ color: 'var(--color-secondary)', marginBottom: '1.5rem' }}>Activities</h2>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    'Learning with 3D Models',
                                    'Maths & Science Related Activities',
                                    'Memorize Through Visual Models',
                                    'Yoga & Meditation',
                                    'Music, Dance, Drawing Classes',
                                    'Arts & Crafts',
                                    'Indoor & Outdoor Games',
                                    'Daily Morning Prayers'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                        <CheckCircle size={20} color="var(--color-accent)" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ScrollReveal>
                    </section>

                </div>
            </div>
        </PageTransition>
    );
}
