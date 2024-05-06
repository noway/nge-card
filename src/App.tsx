import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  // const [text, setText] = useState('   ')

  // const textFirst = text.split(' ')[0]
  // const textSecond = text.split(' ')[1]
  // const textThird = text.split(' ')[2]

  const [animationCharacterCounter, setAnimationCharacterCounter] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationCharacterCounter((animationCharacterCounter) => {
        return animationCharacterCounter + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const textFirst = 'SILICA GEL'
  const textSecond = 'THROW AWAY'
  const textThird = '"DO NOT EAT"'

  const textFirstCroppedToCount = textFirst.slice(0, animationCharacterCounter)
  const textSecondCroppedToCount = textSecond.slice(0, animationCharacterCounter)
  const textThirdCroppedToCount = textThird.slice(0, animationCharacterCounter)

  return (
    <>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}

      {/* <input type="text" value={textFirst} onChange={(e) => setTextFirst(e.target.value)} />
      <input type="text" value={textSecond} onChange={(e) => setTextSecond(e.target.value)} />
      <input type="text" value={textThird} onChange={(e) => setTextThird(e.target.value)} /> */}
      
      <div className='main'><div className='text stix-two-text-nge-set'>{textFirstCroppedToCount.toUpperCase()}</div>
      <div className='text stix-two-text-nge-set0'>{textSecondCroppedToCount.toUpperCase()}</div>
      <div className='text stix-two-text-nge-set0'>{textThirdCroppedToCount.toUpperCase()}</div></div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
