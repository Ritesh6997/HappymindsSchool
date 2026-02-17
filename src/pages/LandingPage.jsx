export default function LandingPage() {
    return (
        <div className="container" style={{ textAlign: 'center', padding: '4rem 1rem' }}>
            <section style={{ marginBottom: '5rem' }}>
                <div className="glass-panel" style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                        Find Your Inner Peace with <br />
                        <span className="text-gradient">Happyminds</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                        A sanctuary for your thoughts. Discover tools, resources, and a community dedicated to mental wellness and personal growth.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
                            Start Your Journey
                        </button>
                        <button className="btn" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>

            <section className="container" style={{ marginBottom: '5rem' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Why Happyminds?</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {[
                        { title: 'Mindfulness', desc: 'Guided meditations and breathing exercises to center your mind.' },
                        { title: 'Community', desc: 'Connect with like-minded individuals on a similar path.' },
                        { title: 'Growth', desc: 'Track your progress and celebrate small wins every day.' }
                    ].map((feature, index) => (
                        <div key={index} className="glass-panel" style={{ padding: '2rem', textAlign: 'left' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary)' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)' }}>{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
