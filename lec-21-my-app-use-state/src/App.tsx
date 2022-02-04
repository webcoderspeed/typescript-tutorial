import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';

interface Payload {
  text: string;
}

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

type ActionType =
  | {
      type: 'ADD_TODO';
      text: string;
    }
  | {
      type: 'REMOVE_TODO';
      id: number;
    };

function App() {
  const [payload, setPayload] = useState<Payload | null>(null);

  useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/todos/1`)
      .then((res) => res.json())
      .then((data) => setPayload(data));
  }, [payload]);

  const [todos, dispatch] = useReducer((todos: Todo[], action: ActionType) => {
    switch (action.type) {
      case 'ADD_TODO':
        return [...todos, { id: todos.length, text: action.text, done: false }];
      case 'REMOVE_TODO':
        return todos.filter(({ id }) => id !== action.id);
      default:
        return todos;
    }
  }, []);

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch({
        type: 'ADD_TODO',
        text: newTodoRef.current.value,
      });
    }
  }, []);

  return (
    <div>
      {JSON.stringify(payload)}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              onClick={() =>
                dispatch({
                  type: 'REMOVE_TODO',
                  id: todo.id,
                })
              }
            >
              REMOVE TODO
            </button>
          </li>
        ))}
      </ul>

      <div>
        <input type='text' ref={newTodoRef} />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>
    </div>
  );
}

export default App;
