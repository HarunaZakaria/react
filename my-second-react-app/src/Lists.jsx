export default function List() {
  const people = ['Haruna', 'Hamis', 'Dauda', 'Junior', 'Alima'];
  return (
    <div>
      <h1>People names</h1>
      <ol>
        {people.map((person) => {
          return <li key={person}>{person}</li>;
        })}
      </ol>
    </div>
  );
}
