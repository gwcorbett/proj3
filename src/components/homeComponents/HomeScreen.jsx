import AdBanner from './AdBanner'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


  const HomeScreen = () => {  
    const [recipes, setRecipes] = useState([])
    const url = "https://recipes.devmountain.com/"

  const getRecipes = () => {
  axios.get(`${url}/recipes`).then((res) => {
    setRecipes(res.data)
    console.log(res.data)
    })
    }
    
    useEffect(() => {
      getRecipes()
      }, [])
    
      return (
        <div>
          <AdBanner />
        </div>
    )}
  


export default HomeScreen