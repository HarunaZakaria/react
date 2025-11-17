import './App.css';
export default function Image() {
  const imageSrc = 'https://i.imgur.com/7vQD0fPs.jpg';
  const desc = 'Gregorio Y. Zara';
  return (
    <div className="test-image">
      <h1>First rendering</h1>
      <img src="https://i.imgur.com/7vQD0fPs.jpg" alt="Gregorio Y. Zara" />

      {/* alternatively */}
      <h1>Second rendering</h1>
      <img src={imageSrc} alt={desc} />
    </div>
  );
}
