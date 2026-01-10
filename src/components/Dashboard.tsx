import { useNavigate } from "react-router-dom";
import "../Dashboard.css";

export default function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className="dashboard">
            <header className="dashboard__header">
                <div className="dashboard__brand">
                    <div className="dashboard__brandIcon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M6.5 3H11v14H6.5A2.5 2.5 0 0 0 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3Z" />
                            <path d="M13 3h4.5A2.5 2.5 0 0 1 20 5.5v14A2.5 2.5 0 0 0 17.5 17H13V3Z" opacity="0.65" />
                        </svg>
                    </div>
                    <span className="dashboard__brandName">Bookbridge</span>
                </div>

                <div className="dashboard__actions">
                    <button className="dashboard__actionBtn" onClick={() => navigate("/")}>
                        Hompage
                    </button>
                    <button className="dashboard__actionBtn" onClick={() => navigate("/account")}>
                        My Account
                    </button>
                </div>
            </header>

            <main className="dashboard__main">
                <div className="dashboard__titleSection">
                    <div className="dashboard__title">
                        <span className="dashboard__heart">♥</span>
                        Your Impact Dashboard
                    </div>
                    <p className="dashboard__subtitle">See the difference you're making</p>
                </div>

                {/* Key Metrics */}
                <div className="dashboard__metrics">
                    <div className="metricCard">
                        <div className="metricCard__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M6.5 3H11v14H6.5A2.5 2.5 0 0 0 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3Z" />
                                <path d="M13 3h4.5A2.5 2.5 0 0 1 20 5.5v14A2.5 2.5 0 0 0 17.5 17H13V3Z" opacity="0.65" />
                            </svg>
                        </div>
                        <div className="metricCard__value">37 books</div>
                        <div className="metricCard__label">Total Books Sponsored</div>
                    </div>

                    <div className="metricCard">
                        <div className="metricCard__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Z" />
                                <path d="M21 20a7 7 0 0 0-14 0h14Z" opacity="0.65" />
                            </svg>
                        </div>
                        <div className="metricCard__value">15 learners</div>
                        <div className="metricCard__label">Students Helped</div>
                    </div>

                    <div className="metricCard">
                        <div className="metricCard__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                                <path d="M4 10v6.5C4 18.99 7.58 21 12 21s8-2.01 8-4.5V10l-8 4-8-4Z" opacity="0.65" />
                            </svg>
                        </div>
                        <div className="metricCard__value">8 countries</div>
                        <div className="metricCard__label">Global Reach</div>
                    </div>

                    <div className="metricCard">
                        <div className="metricCard__icon">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                        </div>
                        <div className="metricCard__value">$1,842</div>
                        <div className="metricCard__label">Total Contributed</div>
                    </div>
                </div>

                {/* Charts Section */}
                <div className="dashboard__charts">
                    <div className="chartCard">
                        <h3 className="chartCard__title">Your Monthly Activity</h3>
                        <div className="chartCard__content">
                            <div className="barChart">
                                {[
                                    { month: "Jun", value: 45 },
                                    { month: "Jul", value: 60 },
                                    { month: "Aug", value: 55 },
                                    { month: "Sep", value: 70 },
                                    { month: "Oct", value: 65 },
                                    { month: "Nov", value: 85 },
                                ].map((item, index) => (
                                    <div key={index} className="barChart__item">
                                        <div
                                            className="barChart__bar"
                                            style={{ height: `${item.value}%` }}
                                        />
                                        <div className="barChart__label">{item.month}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="chartCard">
                        <h3 className="chartCard__title">Books by Subject</h3>
                        <div className="chartCard__content">
                            <div className="donutChart">
                                <svg width="160" height="160" viewBox="0 0 160 160">
                                    {/* Mathematics 32% */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="60"
                                        fill="none"
                                        stroke="#9c57ff"
                                        strokeWidth="30"
                                        strokeDasharray={`${(32 / 100) * 377} 377`}
                                        strokeDashoffset="0"
                                        transform="rotate(-90 80 80)"
                                    />
                                    {/* Science 27% */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="60"
                                        fill="none"
                                        stroke="#b794f6"
                                        strokeWidth="30"
                                        strokeDasharray={`${(27 / 100) * 377} 377`}
                                        strokeDashoffset={`-${(32 / 100) * 377}`}
                                        transform="rotate(-90 80 80)"
                                    />
                                    {/* Languages 23% */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="60"
                                        fill="none"
                                        stroke="#c4b5fd"
                                        strokeWidth="30"
                                        strokeDasharray={`${(23 / 100) * 377} 377`}
                                        strokeDashoffset={`-${((32 + 27) / 100) * 377}`}
                                        transform="rotate(-90 80 80)"
                                    />
                                    {/* Literature 17% */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="60"
                                        fill="none"
                                        stroke="#ddd6fe"
                                        strokeWidth="30"
                                        strokeDasharray={`${(17 / 100) * 377} 377`}
                                        strokeDashoffset={`-${((32 + 27 + 23) / 100) * 377}`}
                                        transform="rotate(-90 80 80)"
                                    />
                                </svg>
                            </div>
                            <div className="donutChart__legend">
                                <div className="legendItem">
                                    <div className="legendItem__color" style={{ backgroundColor: "#9c57ff" }} />
                                    <span>Mathematics 32%</span>
                                </div>
                                <div className="legendItem">
                                    <div className="legendItem__color" style={{ backgroundColor: "#b794f6" }} />
                                    <span>Science 27%</span>
                                </div>
                                <div className="legendItem">
                                    <div className="legendItem__color" style={{ backgroundColor: "#c4b5fd" }} />
                                    <span>Languages 23%</span>
                                </div>
                                <div className="legendItem">
                                    <div className="legendItem__color" style={{ backgroundColor: "#ddd6fe" }} />
                                    <span>Literature 17%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Sponsorships */}
                <div className="dashboard__sponsorships">
                    <h3 className="sponsorships__title">Recent Sponsorships</h3>
                    <div className="sponsorships__list">
                        <div className="sponsorshipItem">
                            <div className="sponsorshipItem__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.5 3H11v14H6.5A2.5 2.5 0 0 0 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3Z" />
                                    <path d="M13 3h4.5A2.5 2.5 0 0 1 20 5.5v14A2.5 2.5 0 0 0 17.5 17H13V3Z" opacity="0.65" />
                                </svg>
                            </div>
                            <div className="sponsorshipItem__content">
                                <div className="sponsorshipItem__title">Introduction to Computer Science</div>
                                <div className="sponsorshipItem__meta">Maria Santos</div>
                            </div>
                            <div className="sponsorshipItem__details">
                                <div className="sponsorshipItem__amount">$48</div>
                                <div className="sponsorshipItem__time">2 days ago</div>
                            </div>
                        </div>

                        <div className="sponsorshipItem">
                            <div className="sponsorshipItem__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.5 3H11v14H6.5A2.5 2.5 0 0 0 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3Z" />
                                    <path d="M13 3h4.5A2.5 2.5 0 0 1 20 5.5v14A2.5 2.5 0 0 0 17.5 17H13V3Z" opacity="0.65" />
                                </svg>
                            </div>
                            <div className="sponsorshipItem__content">
                                <div className="sponsorshipItem__title">Physics Fundamentals</div>
                                <div className="sponsorshipItem__meta">Ahmed Hassan</div>
                            </div>
                            <div className="sponsorshipItem__details">
                                <div className="sponsorshipItem__amount">$42</div>
                                <div className="sponsorshipItem__time">5 days ago</div>
                            </div>
                        </div>

                        <div className="sponsorshipItem">
                            <div className="sponsorshipItem__icon">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M6.5 3H11v14H6.5A2.5 2.5 0 0 0 4 19.5V5.5A2.5 2.5 0 0 1 6.5 3Z" />
                                    <path d="M13 3h4.5A2.5 2.5 0 0 1 20 5.5v14A2.5 2.5 0 0 0 17.5 17H13V3Z" opacity="0.65" />
                                </svg>
                            </div>
                            <div className="sponsorshipItem__content">
                                <div className="sponsorshipItem__title">Science & Nature Studies</div>
                                <div className="sponsorshipItem__meta">Lucia Fernandez</div>
                            </div>
                            <div className="sponsorshipItem__details">
                                <div className="sponsorshipItem__amount">$28</div>
                                <div className="sponsorshipItem__time">1 week ago</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Achievement */}
                <div className="dashboard__achievement">
                    <div className="achievementCard">
                        <div className="achievementCard__icon">🏆</div>
                        <div className="achievementCard__content">
                            <div className="achievementCard__title">Achievement Unlocked! 🎉</div>
                            <div className="achievementCard__message">
                                You've helped 15 learners this month! You're in the top 10% of donors.
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
