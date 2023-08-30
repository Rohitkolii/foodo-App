import React from 'react'
import Styles from '../styles/Recipes.module.css'
import Link from 'next/link'

const RecipesCard = ({elm}) => {

    const {strMealThumb,strMeal, strArea, strCategory, strInstructions, idMeal} = elm


  return (
      <div className={Styles.RecipesCard}>
        <Link href={`recipes/${idMeal}`}>
        <div className={Styles.innerRecipesCard}>
            <div className={Styles.col1}>
                <img src={strMealThumb} alt={idMeal} />
                <div>
                    <p>{strCategory},</p>
                    <p> {strArea}</p>
                </div>
            </div>
            <div className={Styles.col2}>
                <h1>{strMeal} - {strArea}</h1>
                <p>{strInstructions.slice(0,500)}....</p>
                <Link href='/'>Read More</Link>
            </div>
        </div>
    </Link>
    </div>
  )
}

export default RecipesCard