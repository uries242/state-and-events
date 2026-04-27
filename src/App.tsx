import { useState } from 'react'
import TextInput from './components/TextInput/TextInput'
import './App.css'

function App() {
  const handleTextChange = (text: string) => {
    console.log("Text changed:", text);
  };

  return (
    <>
      <TextInput
        onTextChange={handleTextChange}
        placeholder="Type something..."
        initialValue=""
      />
    </>
  );
}

export default App
