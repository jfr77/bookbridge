import "./DonateButton.css";

type DonateButtonProps = {
  onClick?: () => void;
};

export default function DonateButton({ onClick }: DonateButtonProps) {
  return (
    <button className="donate-button" onClick={onClick}>
      <span className="icon">❤️</span>
      <span>Donate</span>
    </button>
  );
}
