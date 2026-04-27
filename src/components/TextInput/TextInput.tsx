import type React from "react";
import type { TextInputProps } from "../../types";

// Component
function TextInput({ onTextChange, placeholder, initialValue}: TextInputProps) {
  
 // Handler
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onTextChange(event.target.value);
  };

  // Render
  return (
    <input
      type="text"
      placeholder={placeholder}
      defaultValue={initialValue}
      onChange={handleChange}
    />
  );
}

export default TextInput;
