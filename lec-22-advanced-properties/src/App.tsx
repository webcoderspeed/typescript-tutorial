import React from 'react';

const useNumber = (initialValue: number) =>
  React.useState<number>(initialValue);

type UseNumberValue = ReturnType<typeof useNumber>[0];
type UseNumberSetValue = ReturnType<typeof useNumber>[1];

const Button: React.FunctionComponent<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    title?: string;
  }
> = ({ title, children, style, ...props }) => (
  <button {...props} style={{ backgroundColor: 'red', ...style }}>
    {title ?? children}
  </button>
);

const Incrementer: React.FunctionComponent<{
  value: UseNumberValue;
  setValue: UseNumberSetValue;
}> = ({ value, setValue }) => (
  <Button
    onClick={() => setValue(value + 1)}
    title={`Increment value to ${value + 1}`}
    style={{
      backgroundColor: 'blue',
      color: 'white',
    }}
  />
);

const App = () => {
  const [value, setValue] = useNumber(0);

  return (
    <div>
      <Incrementer value={value} setValue={setValue} />
    </div>
  );
};

export default App;
