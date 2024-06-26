import { useEffect, useState } from 'react'

function App() {
  const text1 = 'SILICA GEL'
  const text2 = 'THROW AWAY'
  const text3 = '"DO NOT EAT"'
  const concatted = text1 + text2 + text3
  const [typingText, setTypingText] = useState('')

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    const interval = setInterval(() => {
      function generateNewTypingText(text: string) {
        const nextChar = concatted[text.length]
        return text + nextChar
      }
      let newTypingText = typingText
      do {
        newTypingText = generateNewTypingText(newTypingText)
      } while (newTypingText[newTypingText.length - 1] === ' ');
      setTypingText(newTypingText)
    }, 200)
    return () => clearInterval(interval)
  }, [typingText, concatted])

  const text1Cropped = (prefersReducedMotion ? concatted : typingText).slice(0, text1.length)
  const text2Cropped = (prefersReducedMotion ? concatted : typingText).slice(text1.length, text1.length + text2.length)
  const text3Cropped = (prefersReducedMotion ? concatted : typingText).slice(text1.length + text2.length, text1.length + text2.length + text3.length)

  return (
    <>
      <div className='main'>
        <div className='title2'>{text1Cropped.toUpperCase()}</div>
        <div className='title1'>{text2Cropped.toUpperCase()}</div>
        <div className='title1'>{text3Cropped.toUpperCase()}</div>
      </div>
    </>
  )
}

export default App
