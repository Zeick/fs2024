import { useState } from 'react'

const Button = ({ handleClick, text }) => (<button onClick={handleClick}>    {text}  </button>)

const StatisticLine = ({text, value}) => {
  if (text === "Positive"){
    return(
      <tr><td>{text}</td><td>{value} %</td></tr>
    )
  }
  return(
      <tr><td>{text}</td><td>{value}</td></tr>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good+neutral+bad
  const average = (good - bad) / total
  const positive = 100 * good / total
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  return(
    <div>
      <table>
        <tbody>
          <StatisticLine text="Good" value={good} />
          <StatisticLine text="Neutral" value={neutral} />
          <StatisticLine text="Bad" value={bad} />
          <StatisticLine text="All" value={total} />
          <StatisticLine text="Average" value={average.toFixed(1)} />
          <StatisticLine text="Positive" value={positive.toFixed(1)} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
  }

  return (
      <div>
        <h1>Give feedback</h1>
        <Button handleClick={handleGood} text='Good' />        
        <Button handleClick={handleNeutral} text='Neutral' />
        <Button handleClick={handleBad} text='Bad' />
        <h1>Feedback statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
  )
}

export default App