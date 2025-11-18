export default function CurrentTime() {
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  return (
    <div>
      <h1>{formattedTime}</h1>
    </div>
  );
}
