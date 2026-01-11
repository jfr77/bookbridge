import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ClassroomDonatePageB.css";

type Classroom = {
  id: string;
  title: string;
  school: string;
  location: string;
  teacher: string;
  students: number;
  booksNeeded: number;
  raised: number;
  goal: number;
  imageUrl: string;
  urgent?: boolean;
  story?: string;
};

const sampleClassrooms: Classroom[] = [
  {
    id: "c1",
    title: "Grade 7 Science Class",
    school: "Kibera Community School",
    location: "Nairobi, Kenya",
    teacher: "Ms. Wanjiku Kamau",
    students: 42,
    booksNeeded: 84,
    raised: 950,
    goal: 1806,
    urgent: true,
    imageUrl:
      "https://www.siemens-stiftung.org/wp-content/uploads/2024/05/projekt-bildung-experimento-suedafrika-zitronenbatterie-klasse.jpg",
    story:
      "Ms. Wanjiku's 42 students are eager to learn science but share only 10 textbooks between them. Your donation will provide each student with their own science textbook, enabling hands-on experiments and independent study.",
  },
  {
    id: "c2",
    title: "Grade 10 Mathematics",
    school: "Rural Secondary School",
    location: "Uttar Pradesh, India",
    teacher: "Mr. Rajesh Sharma",
    students: 35,
    booksNeeded: 70,
    raised: 0,
    goal: 1750,
    imageUrl: "https://www.ed2go.com/common/images/1/17154/algebra-class.jpg",
    story:
      "Mr. Sharma's mathematics students need algebra and geometry textbooks to prepare for their board exams. Many students walk long distances to school but lack the essential study materials needed to excel.",
  },
  {
    id: "c3",
    title: "Primary English & Literature",
    school: "Escuela Primaria Valle Verde",
    location: "Honduras",
    teacher: "Señora Elena Rodriguez",
    students: 28,
    booksNeeded: 56,
    raised: 658,
    goal: 1316,
    imageUrl:
      "https://cms.zdv.uni-mainz.de/studium/wp-content/uploads/sites/12/2023/02/Englisch-BEd-Dijon.jpg",
    story:
      "These young learners are building their English skills with limited resources. Providing English and literature textbooks will help them develop reading comprehension and writing skills for their future education.",
  },
  {
    id: "c4",
    title: "Grade 11 Technology & Computing",
    school: "Metro Tech High School",
    location: "Ho Chi Minh City, Vietnam",
    teacher: "Mr. Tran Minh",
    students: 30,
    booksNeeded: 90,
    raised: 1725,
    goal: 3450,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Fyo-cdSAni5gjwuhlD3IJmA5St7-ZWrrgw&s",
    story:
      "These students are preparing for careers in technology but need programming and computer science textbooks. Your support will give them the knowledge to pursue opportunities in the growing tech industry.",
  },
  {
    id: "c5",
    title: "Grade 8 History & Social Studies",
    school: "Cape Town Community School",
    location: "Cape Town, South Africa",
    teacher: "Mr. Thabo Ndlovu",
    students: 38,
    booksNeeded: 76,
    raised: 1322,
    goal: 2204,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHerUPK5BvTca4z5Fceu3unaexv2C5bn0Qww&s",
    story:
      "Mr. Ndlovu's class is learning about world history and social systems, but outdated and torn textbooks limit their learning. New textbooks will help students understand their place in the world and prepare for exams.",
  },
  {
    id: "c6",
    title: "Grade 6 Complete Book Set",
    school: "Amazon Region School",
    location: "Manaus, Brazil",
    teacher: "Professora Ana Silva",
    students: 25,
    booksNeeded: 100,
    raised: 1658,
    goal: 1316,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtS7e-KIqD89ePssHIe_XELjMw48VVreMaIA&s",
    story:
      "These students in the Amazon region need complete book sets covering all subjects. Many families cannot afford textbooks, so students share worn copies. Your donation will give each child their own books for every subject.",
  },
];

export default function ClassroomDonatePageB() {
  const { id } = useParams();
  const navigate = useNavigate();

  const classroom = useMemo(
    () => sampleClassrooms.find((c) => c.id === id),
    [id]
  );

  const [amount, setAmount] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [email, setEmail] = useState("");

  if (!classroom) {
    return (
      <div style={{ padding: 24 }}>
        <button onClick={() => navigate(-1)}>← Go Back</button>
        <h2>Classroom not found</h2>
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
        recipientType: "classroom",
        recipientId: classroom.id,
        recipientName: classroom.title,
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
            src={classroom.imageUrl}
            alt={classroom.title}
          />

          <div className="learnerTitle">{classroom.title}</div>

          <div className="learnerMeta">
            <div>📍 {classroom.location}</div>
            <div>
              🏫 {classroom.school} • {classroom.teacher}
            </div>
          </div>

          <div className="storyBox">
            {classroom.story ||
              `This classroom has ${classroom.students} students who need ${classroom.booksNeeded} textbooks. Your donation will help provide essential learning materials for the entire class.`}
          </div>

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
