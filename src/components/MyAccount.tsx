import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../MyAccount.css";

export default function MyAccount() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("vicky@example.com");
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [impactUpdates, setImpactUpdates] = useState(true);
    const [urgentAlerts, setUrgentAlerts] = useState(true);

    return (
        <div className="myAccount">
            <div className="myAccount__container">
                <header className="myAccount__header">
                    <div className="myAccount__headerContent">
                        <div>
                            <h1 className="myAccount__title">My Account</h1>
                            <p className="myAccount__welcome">Welcome back, Vicky 👋</p>
                        </div>
                        <div className="myAccount__headerActions">
                            <button className="myAccount__headerBtn" onClick={() => navigate("/")}>
                                Back Home
                            </button>
                            <button className="myAccount__headerBtn" onClick={() => navigate("/dashboard")}>
                                Your Impact
                            </button>
                        </div>
                    </div>
                </header>

                {/* Personal Summary */}
                <section className="myAccount__section">
                    <h2 className="myAccount__sectionTitle">Personal Summary</h2>
                    <div className="myAccount__summary">
                        <p className="myAccount__summaryText">Thank you for supporting education 💜</p>
                        <div className="myAccount__total">
                            Total donated: <strong>$1,842</strong>
                        </div>
                    </div>
                </section>

                {/* Donation History */}
                <section className="myAccount__section">
                    <h2 className="myAccount__sectionTitle">Donation History</h2>
                    <div className="myAccount__table">
                        <div className="myAccount__tableHeader">
                            <div className="myAccount__tableCell">Date</div>
                            <div className="myAccount__tableCell">Type</div>
                            <div className="myAccount__tableCell">Amount</div>
                            <div className="myAccount__tableCell">Receipt</div>
                        </div>
                        <div className="myAccount__tableRow">
                            <div className="myAccount__tableCell">
                                <span className="myAccount__date">2 days ago</span>
                            </div>
                            <div className="myAccount__tableCell">
                                <span className="myAccount__donationTitle">Introduction to Computer Science</span>
                                <span className="myAccount__donationMeta"> Maria Santos</span>
                            </div>
                            <div className="myAccount__tableCell">
                                <strong>$48</strong>
                            </div>
                            <div className="myAccount__tableCell"></div>
                        </div>
                        <div className="myAccount__tableRow">
                            <div className="myAccount__tableCell">
                                <span className="myAccount__date">5 days ago</span>
                            </div>
                            <div className="myAccount__tableCell">
                                <span className="myAccount__donationTitle">Physics Fundamentals</span>
                                <span className="myAccount__donationMeta"> Ahmed Hassan</span>
                            </div>
                            <div className="myAccount__tableCell">
                                <strong>$42</strong>
                            </div>
                            <div className="myAccount__tableCell"></div>
                        </div>
                        <div className="myAccount__tableRow">
                            <div className="myAccount__tableCell">
                                <span className="myAccount__date">1 week ago</span>
                            </div>
                            <div className="myAccount__tableCell">
                                <span className="myAccount__donationTitle">Science & Nature Studies</span>
                                <span className="myAccount__donationMeta"> Lucia Fernandez</span>
                            </div>
                            <div className="myAccount__tableCell">
                                <strong>$28</strong>
                            </div>
                            <div className="myAccount__tableCell"></div>
                        </div>
                    </div>
                </section>

                {/* Receipts & Contact */}
                <section className="myAccount__section">
                    <h2 className="myAccount__sectionTitle">Receipts & Contact</h2>
                    <div className="myAccount__receipts">
                        <div className="myAccount__emailRow">
                            <label className="myAccount__label">Email for receipts:</label>
                            <div className="myAccount__emailInput">
                                {isEditingEmail ? (
                                    <>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="myAccount__input"
                                        />
                                        <button
                                            className="myAccount__editBtn"
                                            onClick={() => setIsEditingEmail(false)}
                                        >
                                            Save
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <span className="myAccount__emailDisplay">{email}</span>
                                        <button
                                            className="myAccount__editBtn"
                                            onClick={() => setIsEditingEmail(true)}
                                        >
                                            Edit
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                        <button className="myAccount__resendBtn">Resend last receipt</button>
                    </div>
                </section>

                {/* Preferences */}
                <section className="myAccount__section">
                    <h2 className="myAccount__sectionTitle">Preferences</h2>
                    <div className="myAccount__preferences">
                        <label className="myAccount__checkboxLabel">
                            <input
                                type="checkbox"
                                checked={impactUpdates}
                                onChange={(e) => setImpactUpdates(e.target.checked)}
                                className="myAccount__checkbox"
                            />
                            <span>Receive impact updates by email</span>
                        </label>
                        <label className="myAccount__checkboxLabel">
                            <input
                                type="checkbox"
                                checked={urgentAlerts}
                                onChange={(e) => setUrgentAlerts(e.target.checked)}
                                className="myAccount__checkbox"
                            />
                            <span>Receive alerts for urgent donations</span>
                        </label>
                    </div>
                </section>
            </div>
        </div>
    );
}
