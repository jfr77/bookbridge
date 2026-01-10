import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { learners } from "../../data/learners";
import "./LearnerDonatePage.css";

export default function LearnerDonatePage() {
    const { id } = useParams();
    const navigate = useNavigate();

    const learner = useMemo(() => learners.find((l) => l.id === id), [id]);

    const [amount, setAmount] = useState("");

    if (!learner) {
        return (
            <div style={{ padding: 24 }}>
                <button onClick={() => navigate(-1)}>← Go Back</button>
                <h2>Learner not found</h2>
            </div>
        );
    }

    return (
        <div className="donatePage">
            <div className="donateTop">
                <button className="backBtn" onClick={() => navigate(-1)}>
                    ← Go Back
                </button>

                <div className="brand">
                    <div className="logoMark">📚</div>
                    <div className="brandName">BookBridge</div>
                </div>
            </div>

            <div className="donateCardWrap">
                <div className="donateCard">
                    <img className="learnerImg" src={learner.imageUrl} alt={learner.name} />

                    <div className="learnerTitle">
                        {learner.name}, {learner.age}
                    </div>

                    <div className="learnerMeta">
                        <div>📍 {learner.city}, {learner.country}</div>
                        <div>🏫 {learner.school} • {learner.grade}</div>
                    </div>

                    <div className="storyBox">{learner.story}</div>

                    <div className="amountLabel">Donation Amount</div>

                    <div className="amountRow">
                        <span className="currency">$</span>
                        <input
                            className="amountInput"
                            type="number"
                            min={1}
                            step={1}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    <button
                        className="ctaBtn"
                        onClick={() => {
                            if (!amount) {
                                alert("Please enter a donation amount");
                                return;
                            }

                            const donationAmount = Number(amount);

                            if (donationAmount <= 0) {
                                alert("Amount must be greater than 0");
                                return;
                            }

                            // Navigate to payment page with donation data
                            navigate("/payment", {
                                state: {
                                    amount: donationAmount,
                                    recipientType: "learner",
                                    recipientId: learner.id,
                                    recipientName: `${learner.name}, ${learner.age}`,
                                },
                            });
                        }}
                    >
                        ♡ Complete Sponsorship
                    </button>
                </div>
            </div>
        </div>
    );
}
