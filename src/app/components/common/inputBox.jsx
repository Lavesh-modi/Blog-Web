import React from "react";
function InputBox({
  type = "text",
  placeholder = "enter ",
  value,
  setState,
  required = "false",
  className = "border-2 border-black rounded-lg p-2 m-",
}) {
  return (
    // <>
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={(e) => setState(e.target.value)}
      required={required}
    />
    // </>
  );
}

export default InputBox;
