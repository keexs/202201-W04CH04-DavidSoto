const ButtonComponent = ({ text, action }) => {
  return <button onClick={{ action }}>{text}</button>;
};

export default ButtonComponent;
