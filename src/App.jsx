import React, { useEffect, useState } from 'react'
import DessertCard from './components/DessertCard'

const App = () => {

  const [desserts, setDesserts] = useState([])

  useEffect(()=>{
    fetch("data.json")
    .then(res => res.json())
    .then(data => setDesserts(data)
    )
  }, [])
  
  return (
    <div>
      {
        desserts.map(dessert => <DessertCard {...dessert}/>)
      }
    </div>
  )
}

export default App