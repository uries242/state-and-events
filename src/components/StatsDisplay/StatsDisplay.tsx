import type { StatsDisplayProps } from "../../types";


function StatsDisplay({ stats, showReadingTime = true }: StatsDisplayProps) {
    
    return(
    <>
      <p>Characters: {stats.characterCount}</p>
      <p>Words: {stats.wordCount}</p>
      {showReadingTime && <p>Reading time: {stats.readingTime} min</p>}
    </>
    )
}

export default StatsDisplay;
