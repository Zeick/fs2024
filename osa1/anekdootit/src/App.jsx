import { useState } from 'react'

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>    {text}  </button>)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(8))

  // This guy outputs random integer between 0 and number of anecdotes minus one
  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random()*anecdotes.length))
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }
  // This one-liner is from https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array
  const largestVoteIndex = () => 
    points.indexOf(Math.max(...points))  


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>This anecdote has <b>{points[selected]}</b> votes.</p>
      <Button handleClick={handleAnecdote} text={"Next anecdote"} />
      <Button handleClick={handleVote} text={"Vote"} />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[largestVoteIndex()]}</p>
      <p>This anecdote has <b>{points[largestVoteIndex()]}</b> votes.</p>
    </div>
  )
}

export default App
