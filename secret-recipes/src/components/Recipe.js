import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import RootContext from '../contexts/RootContext';

const Recipe = () => {
    const params = useParams();
    const { recipes } = useContext(RootContext);
    const recipe = recipes.find(recipe => recipe.id == params.id)

    if(recipe === undefined) {
        return (
        <div className='recipeCard'>
            <h2 className='recipeTitle'>Recipe not found.</h2>
      </div>
        )
    } else {
        return (
            <div className='recipeCard'>
                <h2 className='recipeTitle'>{recipe.title}</h2>
                <p className='recipeSource'>{recipe.source}</p>
                <br/>
                <p className='recipeSource'>{recipe.ingredients}</p>
                <br/>
                <p className='recipeSource'>{recipe.instructions}</p>
          </div>
        )
    }
}

export default Recipe