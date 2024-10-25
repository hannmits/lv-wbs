import './Messages.css';

function Messages() {
  const messages = [
    "In your embrace, I find my peace",
    "A quiet refuge where worries cease",
    "With every heartbeat, my heart knows",
    "You are my home, where love always grows."
  ];

  return (
    <section id="messages" className="messages-section section">
      <h2></h2>
      <ul>
        {messages.map((message, index) => (
          <li key={index} style={{ '--index': index }}>{message}</li>
        ))}
      </ul>
    </section>
  );
}

export default Messages;
