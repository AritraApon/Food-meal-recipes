import React, { use } from 'react';

const FoodCards = ({food}) => {
    const image = food.strMealThumb;
    const foodName = food.strMeal;
    const foodSrc = food.strSource;
    const foodVideo = food.strYoutube;
    // console.log()
    return (
        <div className='max-w-360 mx-auto'>
            <div className='w-11/12 mx-auto'>
            {/* card. */}
            <div className='border-2 space-y-4  bg-[#e98f27bf] '>
                <img src={image} alt="" width='300px'/>

                <p className='text-xl font-bold text-center'>{foodName}</p>
                
                <div className='flex justify-between px-2 py-4'>
                    <button className='btn btn-soft btn-accent'><a href={foodSrc}>Source</a></button>
                    <button className='btn btn-error'><a href={foodVideo}>Video</a></button>
                    <button className='btn btn-soft btn-info'>Recipe</button>
                </div>
            </div>

            </div>

        </div>
    );
};

export default FoodCards;