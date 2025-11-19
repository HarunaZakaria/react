export default function CurrentTime() {
  let customColor = {
    color: '',
  };
  const now = new Date(2020, 2, 1, 13);
  const formattedTime = now.getHours();
  let greeting = '';
  if (formattedTime < 12) {
    greeting = 'Good Morning';
    customColor.color = 'red';
  } else if (formattedTime < 18) {
    greeting = 'Good Afternoon';
    customColor.color = 'green';
  } else {
    greeting = 'Good Evening';
    customColor.color = 'blue';
  }

  return (
    <div>
      <h1 style={customColor}>{greeting}</h1>
    </div>
  );
}
