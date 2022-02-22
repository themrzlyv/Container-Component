interface iTodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

type Prop = {
  data?: iTodo[] | undefined;
  isLoading?: boolean;
  error?: string | null;
};

const Todos: React.FC<Prop> = ({ data, isLoading, error }) => {
  if (isLoading) return <div>Loading...</div>;

  if (error) return <div>Somethings went wrong</div>;

  return (
    <div>
      <h5>Todos</h5>
      {data &&
        data.map((todo) => (
          <div key={todo.id}>
            <p>{todo.title}</p>
          </div>
        ))}
    </div>
  );
};

export default Todos;
