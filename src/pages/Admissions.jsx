import { ArrowDown } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

export default function Admissions() {
    const steps = [
        'Campus Visit',
        'Admission Form',
        'Child and Parent Interaction',
        'Admission Confirmation',
        'Fee Payment and Confirmation',
        'Orientation and On-boarding'
    ];

    return (
        <PageTransition>
            <SEO
                title="Admissions Open"
                description="Admissions now open for Play Group, Nursery, Jr. KG, and Sr. KG at Happy Minds School Wardha. Simple enrollment process. Contact us at 9226340516."
                keywords="admissions wardha preschool, playschool admission wardha, nursery admission"
                canonical="https://happymindswardha.com/admissions"
            />
            <div className="container" style={{ padding: '4rem 1rem' }}>
                <ScrollReveal>
                    <h1 className="section-title">Admission Process</h1>
                </ScrollReveal>

                <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                    {steps.map((step, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <div className="card" style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    padding: '1.5rem',
                                    borderLeft: '6px solid var(--color-primary)',
                                    position: 'relative'
                                }}>
                                    <span style={{
                                        position: 'absolute',
                                        top: '-15px',
                                        left: '-15px',
                                        width: '40px',
                                        height: '40px',
                                        background: 'var(--color-secondary)',
                                        color: 'white',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem'
                                    }}>
                                        {index + 1}
                                    </span>
                                    <h3 style={{ margin: 0 }}>{step}</h3>
                                </div>
                                {index < steps.length - 1 && (
                                    <ArrowDown size={32} color="var(--color-text-muted)" style={{ margin: '1rem 0' }} />
                                )}
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </PageTransition>
    );
}
