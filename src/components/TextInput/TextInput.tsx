import type React from "react";
import type { TextInputProps } from "../../types";

// Component
function TextInput({ onTextChange, placeholder, initialValue}: TextInputProps) {
  
 // Handler
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onTextChange(event.target.value);
  };

  // Render
  return (
    <textarea className="w-full  p-4  border  border-gray-300  rounded-lg  focus:ring-2  focus:ring-blue-500  focus:border-blue-500" 
    placeholder={placeholder}
    defaultValue={initialValue}  
    onChange={handleChange}
    rows={6} /> 
  );
}

export default TextInput;

