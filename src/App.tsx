import DataContainer from "./DataContainer";
import Todos from "./Todos";

const getTodos = () =>
  fetch("https://jsonplaceholder.typicode.com/todos").then((data) =>
    data.json()
  );

const App: React.FC = () => {
  return (
    <div>
      <p>Todo App </p>
      <DataContainer getFunc={getTodos} queryId="todosQuery">
        <Todos />
      </DataContainer>
    </div>
  );
};

export default App;
