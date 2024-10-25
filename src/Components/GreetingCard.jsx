import './GreetingCard.css';

function GreetingCard({ message, photo }) {
  return (
    <div className="card">
      <img src={photo} alt="Memory" className="card-photo" />
      <div className="card-message">
        <p>{message}</p>
      </div>
    </div>
  );
}

export default GreetingCard;
