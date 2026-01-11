import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { learners } from "../../data/learners";
import "./LearnerDonatePageB.css";

export default function LearnerDonatePageB() {
  const { id } = useParams();
  const navigate = useNavigate();

  const learner = useMemo(() => learners.find((l) => l.id === id), [id]);

  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");

  if (!learner) {
    return (
      <div style={{ padding: 24 }}>
        <button onClick={() => navigate(-1)}>← Go Back</button>
        <h2>Learner not found</h2>
      </div>
    );
  }

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate amount
    if (!amount) {
      alert("Please enter a donation amount");
      return;
    }

    const donationAmount = Number(amount);
    if (donationAmount <= 0) {
      alert("Amount must be greater than 0");
      return;
    }

    // Validate payment fields
    if (!cardNumber || !cardName || !expiryDate || !cvv || !email) {
      alert("Please fill in all payment fields");
      return;
    }

    if (cardNumber.replace(/\s/g, "").length !== 16) {
      alert("Please enter a valid 16-digit card number");
      return;
    }

    // Navigate to confirmation page
    navigate("/payment-confirmed-b", {
      state: {
        amount: donationAmount,
        recipientType: "learner",
        recipientId: learner.id,
        recipientName: `${learner.name}, ${learner.age}`,
        paymentInfo: {
          cardNumber: cardNumber.replace(/\s/g, "").slice(-4), // Last 4 digits only
          cardName,
          email,
        },
      },
    });
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
          <img
            className="learnerImg"
            src={learner.imageUrl}
            alt={learner.name}
          />

          <div className="learnerTitle">
            {learner.name}, {learner.age}
          </div>

          <div className="learnerMeta">
            <div>
              📍 {learner.city}, {learner.country}
            </div>
            <div>
              🏫 {learner.school} • {learner.grade}
            </div>
          </div>

          <div className="storyBox">{learner.story}</div>

          <form className="donationForm" onSubmit={handleSubmit}>
            {/* Donation Amount Section */}
            <div className="amountSection">
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
                  required
                />
              </div>
            </div>

            {/* Payment Information Section */}
            <div className="paymentSection">
              <h3 className="paymentSectionTitle">Payment Information</h3>

              <div className="formGroup">
                <label className="formLabel">Card Number</label>
                <input
                  className="formInput"
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) =>
                    setCardNumber(formatCardNumber(e.target.value))
                  }
                  maxLength={19}
                  required
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
                  required
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
                    onChange={(e) =>
                      setExpiryDate(formatExpiry(e.target.value))
                    }
                    maxLength={5}
                    required
                  />
                </div>

                <div className="formGroup">
                  <label className="formLabel">CVV</label>
                  <input
                    className="formInput"
                    type="text"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) =>
                      setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                    }
                    maxLength={3}
                    required
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
                  required
                />
              </div>
            </div>
            <div className="confirmationNotice">
              By clicking <strong>Complete Donation</strong>, you confirm that
              you authorize this payment and agree to complete the donation for
              the selected amount.
            </div>
            <button type="submit" className="ctaBtn">
              ♡ Complete Donation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
