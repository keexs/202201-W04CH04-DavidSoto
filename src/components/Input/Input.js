const InputComponent = ({ text, inputType }) => {
  return (
    <>
      <label>{text}</label>
      <input type={inputType} />
    </>
  );
};

export default InputComponent;
