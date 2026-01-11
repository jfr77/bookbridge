import { useNavigate, useLocation } from "react-router-dom";
import "./PaymentConfirmedPage.css";

export default function PaymentConfirmedPage() {
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
                    <div className="successIcon">✓</div>
                    <h2 className="confirmedTitle">Payment Confirmed!</h2>
                    
                    <div className="confirmedMessage">
                        Thank you for your generous donation! A confirmation email has been sent to {donationData.paymentInfo.email}.
                    </div>
                    
                    <div className="summarySection">
                        <h3 className="summarySectionTitle">Donation Details</h3>
                        <div className="summaryRow">
                            <span>Recipient:</span>
                            <strong>{donationData.recipientName}</strong>
                        </div>
                        <div className="summaryRow">
                            <span>Amount:</span>
                            <strong>${donationData.amount.toFixed(2)}</strong>
                        </div>
                        <div className="summaryRow">
                            <span>Transaction ID:</span>
                            <strong className="transactionId">#{Math.random().toString(36).substr(2, 9).toUpperCase()}</strong>
                        </div>
                    </div>

                    <button className="ctaBtn" onClick={() => navigate("/")}>
                        Return to Home
                    </button>
                </div>
            </div>
        </div>
    );
}
