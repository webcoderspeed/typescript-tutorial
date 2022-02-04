import React, { useCallback } from 'react';
import './App.css';

// const Heading = (props: { title: string }) => <h2>{props.title}</h2>;

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

// const Box = ({ children }: { children: React.ReactNode }) => (
//   <div style={{
//     padding: "1rem",
//     fontWeight: "bold",
//   }}>{children}</div>
// );

const Box: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      padding: '1rem',
      fontWeight: 'bold',
    }}
  >
    {children}
  </div>
);

const List: React.FunctionComponent<{
  items: string[];
  onClick?: (item: string) => void;
}> = ({ items, onClick }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index} onClick={() => onClick?.(item)}>
        {item}
      </li>
    ))}
  </ul>
);

function App() {
  const onListClick = useCallback((item: string) => {
    alert(item);
  }, []);

  return (
    <div>
      <Heading title='Hi Speed' />
      <Box>Hello there</Box>
      <List items={['one', 'two']} onClick={onListClick} />
    </div>
  );
}

export default App;
