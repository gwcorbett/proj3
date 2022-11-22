import React from "react";
import styles from "./RecipeCard.module.css";
import {useNavigate} from 'react-router-dom'
import { Navigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.id}`)
    }

  return (
    <div className={styles.recipe_card}>
        <div>
            <div className={styles.recipe_img_container}>
                <img src={recipe.image_url} />
        </div>
    <h3>{recipe.recipe_name}</h3>  
    </div>
    <button className="blue-btn" onClick={handleClick}>View Recipe</button>
    </div>
  );

}



export default RecipeCard;
