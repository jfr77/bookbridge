import { useNavigate } from "react-router-dom";
import "../Landing.css";
import {
  BsBook,
  BsMortarboard,
  BsPerson,
  BsHeartFill,
  BsBookHalf,
} from "react-icons/bs";

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
  const navigate = useNavigate();

  return (
    <div className="page">
      <header className="header">
        <div className="brand">
          <div className="brandIcon" aria-hidden>
            <BsBookHalf size={22} />
          </div>
          <span className="brandName">Bookbridge</span>
        </div>

        <div className="auth">
          <button className="authBtn" onClick={() => navigate("/account")}>
            My Account
          </button>
        </div>
      </header>

      <main className="main">
        <h1 className="title">
          Empowering Learning
          <br />
          One Book at a Time
        </h1>

        <p className="subtitle">
          Connect directly with learners around the world who need textbooks and
          digital materials. Every contribution creates opportunity. Every book
          opens a door to education.
        </p>

        <section className="statsRow">
          <StatCard
            icon={<BsBook size={56} />}
            value="12684"
            label="Books donated"
          />

          <StatCard
            icon={<BsMortarboard size={56} />}
            value="3721"
            label="children helped"
          />

          <StatCard
            icon={<BsPerson size={56} />}
            value="2398"
            label="Donors this month"
          />
        </section>

        <section className="ctaRow">
          <button
            className="primaryCta"
            onClick={() => {
              document
                .getElementById("browse")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <BsHeartFill aria-hidden />
            Get started
          </button>

          <button className="secondaryCta">Learn how it works</button>
        </section>
      </main>
    </div>
  );
}
