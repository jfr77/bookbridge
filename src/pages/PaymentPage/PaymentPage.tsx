import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentPage.css";

export default function PaymentPage() {
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get donation data from navigation state
    const donationData = location.state as {
        amount: number;
        recipientType: "learner" | "classroom";
        recipientId: string;
        recipientName: string;
    } | null;

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCvv] = useState("");
    const [email, setEmail] = useState("");

    if (!donationData) {
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
                        <h2>Invalid donation data</h2>
                        <button className="ctaBtn" onClick={() => navigate("/")}>
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Basic validation
        if (!cardNumber || !cardName || !expiryDate || !cvv || !email) {
            alert("Please fill in all payment fields");
            return;
        }

        if (cardNumber.replace(/\s/g, "").length !== 16) {
            alert("Please enter a valid 16-digit card number");
            return;
        }

        // Navigate to donation summary page
        navigate("/donation-summary", {
            state: {
                ...donationData,
                paymentInfo: {
                    cardNumber: cardNumber.replace(/\s/g, "").slice(-4), // Last 4 digits only
                    cardName,
                    email,
                },
            },
        });
    };

    const formatCardNumber = (value: string) => {
        const cleaned = value.replace(/\s/g, "");
        const formatted = cleaned.match(/.{1,4}/g)?.join(" ") || cleaned;
        return formatted.slice(0, 19); // Max 16 digits + 3 spaces
    };

    const formatExpiry = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        if (cleaned.length >= 2) {
            return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
        }
        return cleaned;
    };

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
                    <h2 className="paymentTitle">Payment Information</h2>
                    
                    <div className="donationSummary">
                        <div className="summaryRow">
                            <span>Donating to:</span>
                            <strong>{donationData.recipientName}</strong>
                        </div>
                        <div className="summaryRow">
                            <span>Amount:</span>
                            <strong>${donationData.amount.toFixed(2)}</strong>
                        </div>
                    </div>

                    <form className="paymentForm" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label className="formLabel">Card Number</label>
                            <input
                                className="formInput"
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                                maxLength={19}
                            />
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">Cardholder Name</label>
                            <input
                                className="formInput"
                                type="text"
                                placeholder="John Doe"
                                value={cardName}
                                onChange={(e) => setCardName(e.target.value)}
                            />
                        </div>

                        <div className="formRow">
                            <div className="formGroup">
                                <label className="formLabel">Expiry Date</label>
                                <input
                                    className="formInput"
                                    type="text"
                                    placeholder="MM/YY"
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(formatExpiry(e.target.value))}
                                    maxLength={5}
                                />
                            </div>

                            <div className="formGroup">
                                <label className="formLabel">CVV</label>
                                <input
                                    className="formInput"
                                    type="text"
                                    placeholder="123"
                                    value={cvv}
                                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))}
                                    maxLength={3}
                                />
                            </div>
                        </div>

                        <div className="formGroup">
                            <label className="formLabel">Email Address</label>
                            <input
                                className="formInput"
                                type="email"
                                placeholder="your.email@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="ctaBtn">
                            Show Donation Summary
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
