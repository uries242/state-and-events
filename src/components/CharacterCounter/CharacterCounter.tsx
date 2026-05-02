import { useState } from 'react'
import type { CharacterCounterProps, TextStats } from '../../types';
import StatsDisplay from '../StatsDisplay/StatsDisplay.tsx';
import TextInput from '../TextInput/TextInput.tsx';



function CharacterCounter({ minWords, maxWords, targetReadingTime }: CharacterCounterProps) {

    const [ stats, setStats ] = useState<TextStats>({ characterCount: 0, wordCount: 0, readingTime: 0 });  // grouped
    const [inputText, setInputText] = useState<string>('')

    // Handler
    function handleTextChange(text:string) {
        setInputText(text)
        const characterCount = text.length
        const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length
        const readingTime = Math.ceil(wordCount / 200)

        setStats({ characterCount, wordCount, readingTime })
    }

  return (
    <>
    <TextInput onTextChange={handleTextChange}   placeholder="Type something..."   initialValue="" />
    <StatsDisplay stats={stats} minWords={minWords} maxWords={maxWords} />
    </>
  );
}

export default CharacterCounter;
