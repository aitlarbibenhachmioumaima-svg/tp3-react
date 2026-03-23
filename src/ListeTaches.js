function ListeTaches() {
  const tasks = [
    { id: 1, title: "Étudier React" },
    { id: 2, title: "Coder une mini-app" },
    { id: 3, title: "Tester toutes les fonctionnalités" }
  ];

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default ListeTaches;