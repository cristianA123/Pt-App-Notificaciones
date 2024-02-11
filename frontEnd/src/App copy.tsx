
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Stack } from 'react-bootstrap';
import { useCounterStore } from './store/counterStore';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom'

function App() {
  const { count, increasePopulation } = useCounterStore((state) => state)
  const { bears, getPost } = useCounterStore()

  useEffect(() => {
  
    getPost()
   
  }, [])
  

  return (
    <>
    <h1>Count: {count}</h1>
    <h1>Bears: {bears}</h1>
    <Stack direction="horizontal" gap={2}>
      <Button as="a" variant="secondary" onClick={increasePopulation}>
        Button as link
      </Button>
      <Button as="a" variant="success">
        Button as link
      </Button>
    </Stack>;
    <h1>Hola </h1>
      
    </>
  )
}

export default App
