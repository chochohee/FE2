import ListItem from "./ListItem";

export default function UserList() {
  const data = [
    { id: 1, name: "Alice", email: "alice@example.com", job: "Engineer" },
    { id: 2, name: "Bob", email: "bob@example.com", job: "Designer" },
    { id: 3, name: "Charlie", email: "charlie@example.com", job: "Manager" },
  ];

  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <ListItem data={item} />
          </li>
        );
      })}
    </ul>
  );
}
