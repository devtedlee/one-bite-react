import { useEffect, useState } from 'react'
import './App.css'
import Welcome from './components/Welcome'

function App() {
  const [name, setName] = useState('')
  const [isMember, setIsMember] = useState(false);

  useEffect(() => {
    setName('테드풀');
    setIsMember(true);
  }, [])

  return (
    <>
      <Welcome name={name} isMember={isMember} />
    </>
  )
}

export default App
