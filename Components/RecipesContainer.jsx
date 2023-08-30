import React from 'react'
import { useProductContext } from '../Context/ProductContext'
import RecipesCard from './RecipesCard'
import Styles from '../styles/Recipes.module.css'

const RecipesContainer = () => {

    const {Products} = useProductContext()

  return (
    <div className={Styles.RecipesContainer}>
        {
            Products.meals && Products.meals.map((elm) => {
                return(
                    <RecipesCard key={elm.idMeal} elm={{...elm}} />
                )
            })
        }
    </div>
  )
}

export default RecipesContainer