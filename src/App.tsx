import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const textFirst = 'SILICA GEL'
  const textSecond = 'THROW AWAY'
  const textThird = '"DO NOT EAT"'
  const concatted = textFirst + textSecond + textThird
  const [allTogether, setAllTogether] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      const nextCharacter = concatted[allTogether.length]
      setAllTogether((prev) => prev + nextCharacter)
    }, 100)
    return () => clearInterval(interval)
  }, [allTogether])

  const textFirstCroppedToCount = allTogether.slice(0, textFirst.length)
  const textSecondCroppedToCount = allTogether.slice(textFirst.length, textFirst.length + textSecond.length)
  const textThirdCroppedToCount = allTogether.slice(textFirst.length + textSecond.length, textFirst.length + textSecond.length + textThird.length)

  return (
    <>
      <div className='main'><div className='text stix-two-text-nge-set'>{textFirstCroppedToCount.toUpperCase()}</div>
      <div className='text stix-two-text-nge-set0'>{textSecondCroppedToCount.toUpperCase()}</div>
      <div className='text stix-two-text-nge-set0'>{textThirdCroppedToCount.toUpperCase()}</div></div>
    </>
  )
}

export default App
