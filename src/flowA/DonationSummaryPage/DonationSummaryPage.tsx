import { useNavigate, useLocation } from "react-router-dom";
import "./DonationSummaryPage.css";

export default function DonationSummaryPage() {
    const navigate = useNavigate();
    const location = useLocation();
    
    const donationData = location.state as {
        amount: number;
        recipientType: "learner" | "classroom";
        recipientId: string;
        recipientName: string;
        paymentInfo: {
            cardNumber: string;
            cardName: string;
            email: string;
        };
    } | null;

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
                        <h2>No donation data found</h2>
                        <button className="ctaBtn" onClick={() => navigate("/")}>
                            Return Home
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="donatePage">
            <div className="donateTop">
                <button className="backBtn" onClick={() => navigate("/")}>
                    ← Go Back
                </button>

                <div className="brand">
                    <div className="logoMark">📚</div>
                    <div className="brandName">BookBridge</div>
                </div>
            </div>

            <div className="donateCardWrap">
                <div className="donateCard">
                    <h2 className="summaryTitle">Donation Summary</h2>
                    
                    <div className="summarySection">
                        <h3 className="summarySectionTitle">Recipient</h3>
                        <div className="summaryRow">
                            <span>{donationData.recipientType === "learner" ? "Learner" : "Classroom"}:</span>
                            <strong>{donationData.recipientName}</strong>
                        </div>
                    </div>

                    <div className="summarySection">
                        <h3 className="summarySectionTitle">Payment Details</h3>
                        <div className="summaryRow">
                            <span>Amount:</span>
                            <strong>${donationData.amount.toFixed(2)}</strong>
                        </div>
                        <div className="summaryRow">
                            <span>Card ending in:</span>
                            <strong>•••• {donationData.paymentInfo.cardNumber}</strong>
                        </div>
                        <div className="summaryRow">
                            <span>Cardholder:</span>
                            <strong>{donationData.paymentInfo.cardName}</strong>
                        </div>
                        <div className="summaryRow">
                            <span>Email:</span>
                            <strong>{donationData.paymentInfo.email}</strong>
                        </div>
                    </div>

                    <button 
                        className="ctaBtn" 
                        onClick={() => navigate("/payment-confirmed", { state: donationData })}
                    >
                        Confirm Payment
                    </button>
                </div>
            </div>
        </div>
    );
}
