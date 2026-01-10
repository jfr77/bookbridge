import "../Landing.css";

type StatCardProps = {
    icon: React.ReactNode;
    value: string;
    label: string;
};

function StatCard({ icon, value, label }: StatCardProps) {
    return (
        <div className="statCard">
            <div className="statIcon">{icon}</div>
            <div className="statValue">{value}</div>
            <div className="statLabel">{label}</div>
        </div>
    );
}

export default function Landing() {
    return (
        <div className="page">
            <header className="header">
                <div className="brand">
                    <div className="brandIcon" aria-hidden />
                    <span className="brandName">Bookbridge</span>
                </div>

                <div className="auth">
                    <button className="authBtn">Sign In</button>
                    <button className="authBtn">Sign Up</button>
                </div>
            </header>

            <main className="main">
                <h1 className="title">
                    Empowering Learning
                    <br />
                    One Book at a Time
                </h1>

                <p className="subtitle">
                    Connect directly with learners around the world who need textbooks and digital
                    materials. Every contribution creates opportunity. Every book opens a door to
                    education.
                </p>

                <section className="statsRow">
                    <StatCard
                        icon={
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.5 3H11v14H6.5A2.5 2.5 0 0 0 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3Z" />
                                <path d="M13 3h4.5A2.5 2.5 0 0 1 20 5.5v14A2.5 2.5 0 0 0 17.5 17H13V3Z" opacity="0.65" />
                            </svg>
                        }
                        value="12684"
                        label="Books donated"
                    />

                    <StatCard
                        icon={
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                                <path d="M4 10v6.5C4 18.99 7.58 21 12 21s8-2.01 8-4.5V10l-8 4-8-4Z" opacity="0.65" />
                            </svg>
                        }
                        value="3721"
                        label="children helped"
                    />

                    <StatCard
                        icon={
                            <svg width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" />
                                <path d="M21 20a7 7 0 0 0-14 0h14Z" opacity="0.65" />
                            </svg>
                        }
                        value="2398"
                        label="Donors this month"
                    />
                </section>

                <section className="ctaRow">
                    <button className="primaryCta">
            <span className="heart" aria-hidden>
              ♥
            </span>
                        Get started
                    </button>
                    <button className="secondaryCta">Learn how it works</button>
                </section>
            </main>
        </div>
    );
}