import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export default function About() {
    return (
        <PageTransition>
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <ScrollReveal>
                        <h1 className="section-title">Introduction to the School</h1>

                        <div className="card" style={{ marginBottom: '3rem' }}>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>
                                Welcome to <strong style={{ color: 'var(--color-primary)' }}>Happy Minds School</strong> where excellence meets opportunity, and every student is encouraged to achieve their fullest potential. Our school has been a cornerstone of quality education, taking pride in fostering a vibrant and inclusive environment where every child feels valued and supported.
                            </p>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>
                                We are known for our rich and diverse curriculum, thoughtfully complemented by a wide range of extracurricular activities, including music, drama, educational programs, and more, ensuring the holistic development of our students.
                            </p>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-main)' }}>
                                At Happy Minds School, we believe in nurturing creativity, critical thinking, and strong character. Our mission is to prepare students to become compassionate global citizens, equipped to contribute meaningfully to society. These successes reflect our unwavering commitment to excellence and the bright future we envision for every student.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div style={{ textAlign: 'center', background: 'var(--color-bg-light)', padding: '3rem', borderRadius: 'var(--radius-lg)', border: '2px dashed var(--color-success)' }}>
                            <h2 style={{ color: 'var(--color-success)' }}>Our Invitation</h2>
                            <p style={{ fontSize: '1.25rem', fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
                                "We warmly invite you to join our thriving community at Happy Minds School, where every day is a step toward a brighter Future."
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </PageTransition>
    );
}
