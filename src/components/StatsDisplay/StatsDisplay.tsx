import type { StatsDisplayProps } from "../../types";


function StatsDisplay({ stats, showReadingTime = true,  minWords, maxWords }: StatsDisplayProps) {

    let wordCountColor = 'black'
    if (minWords !== undefined && stats.wordCount < minWords) {
        wordCountColor = 'red'
    }

    let wordGoals = null
    if (minWords !== undefined) {
        wordGoals = <p>Min: {minWords} | Max: {maxWords}</p>
    }
        
    return(
    <>
      <p>Characters: {stats.characterCount}</p>
      <p style={{ color: wordCountColor }}>Words: {stats.wordCount}</p>
      {wordGoals}
      {showReadingTime && <p>Reading time: {stats.readingTime} min</p>}
    </>
    )
}

export default StatsDisplay;

