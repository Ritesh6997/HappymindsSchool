import { ArrowDown } from 'lucide-react';

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
        <div className="container" style={{ padding: '4rem 1rem' }}>
            <h1 className="section-title">Admission Process</h1>

            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                {steps.map((step, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
                ))}
            </div>
        </div>
    );
}
