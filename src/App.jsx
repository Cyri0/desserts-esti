import React, { useEffect, useState } from 'react'
import DessertCard from './components/DessertCard'

const App = () => {

  const [desserts, setDesserts] = useState([])

  useEffect(()=>{
    fetch("https://p45tcbzb-9000.euw.devtunnels.ms/data.json")
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