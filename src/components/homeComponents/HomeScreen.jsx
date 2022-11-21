import React from 'react'
import AdBanner from './AdBanner'
import axios from 'axios'


      

const HomeScreen = () => {  
  return (
    <div>
      <AdBanner />
      const getRecipes = () => {
  axios.get("https://recipes.devmountain.com/recipes").then((res) => {
    setRecipes(res.data)
    console.log(res.data)
    })
    }
    useEffect(() => {
      getRecipes()
      }, [])
      {/* Much code from Part 2 will be placed around here. Do your best! */}
    </div>
  )
}

export default HomeScreen