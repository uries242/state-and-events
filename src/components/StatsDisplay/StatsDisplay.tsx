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
        <div className="p-6  border  border-gray-200  rounded-lg  mt-4">
            <div className="grid grid-cols-2 gap-4">

                <div>
                    <p className="text-gray-500">Characters</p>
                    <p className="text-3xl  font-bold">{stats.characterCount}</p>
                </div>

                <div>
                    <p className="text-gray-500">Words</p>    
                    <p className="text-3xl  font-bold"  style={{ color: wordCountColor }}> {stats.wordCount} </p>    
                    {wordGoals}
                </div>
            </div>
            {showReadingTime && (
                <div className="mt-4">
                    <p className="text-gray-500">Reading Time</p>
                    <p className="text-3xl font-bold">{stats.readingTime} min</p>
                </div>
            )}
        </div>
    )
}

export default StatsDisplay;

