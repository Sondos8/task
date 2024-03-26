import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Recipe from '../Recipe/Recipe';

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);
    async function getRecipes() {
        let { data } = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast');
        setRecipes(data);
        // console.log(data);
    }

    useEffect(() => {
        getRecipes()
    }, [])

  return (
    <>
    <div className="container fex">
        <div><p className='harder mt-5'>RECIPES</p>     </div>
        <div className="row">
            {recipes.meals?.map((item) => { 
                return  <Recipe item={ item }  key={ item.idMeal } />;
            })}
        </div>
        <div className='text-center mt-1 mb-5'><button className='border-0 button2'>CONTACTUS</button></div>
    </div>

    </>
  )
}
