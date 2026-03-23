import React, { use, } from 'react';
import FoodCards from '../FoodCards/FoodCards';

const FoodSection = ({ foodDataRec, searchTerm }) => {
    const foodPromise = use(foodDataRec);
    const foods = foodPromise.meals;

    const filteredFoods = foods.filter(food =>
        food.strMeal.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className='max-w-360 mx-auto'>
            <div className='w-11/12 mx-auto'>
                <div className='my-10 border-b-3 py-4'>
                    <h1 className='text-center text-5xl  md:text-7xl font-bold '>
                        <span className='text-green-700' >Meals</span>
                        <span className='text-red-700'> Recipes</span>
                    </h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 items-stretch  '>
                    {filteredFoods.length > 0 ? (
                        filteredFoods.map(food => (
                            <FoodCards key={food.idMeal} food={food} />
                        ))
                    ) : (
                        <p className="text-center text-3xl font-semibold text-red-600 col-span-full bg-amber-200 py-6 ">
                            No meals found for your search 🔍
                        </p>
                    )}


                </div>


            </div>
        </div>
    );
};

export default FoodSection;