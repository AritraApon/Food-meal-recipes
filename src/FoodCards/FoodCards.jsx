import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


const FoodCards = ({ food }) => {
    const image = food.strMealThumb;
    const foodName = food.strMeal;
    const foodSrc = food.strSource;
    const foodVideo = food.strYoutube;
    const foodRecipe = food.strInstructions;
    const [open , setOpen] = useState(false)
    return (
        <div className='max-w-360 mx-auto'>
            <div className='w-11/12 mx-auto'>
                {/* card. */}
                <div className='border-2 space-y-4 text-center bg-[#784102] hover:scale-105 transition'>
                    <img src={image} alt="" className='w-75 ' />

                    <p className='text-xl font-bold text-center'>{foodName}</p>

                    <div className='flex justify-between px-2 py-4'>
                        <button className='btn btn-soft btn-accent'><a href={foodSrc}>Source</a></button>

                        <button className='btn bg-red-300  btn-error'>
                            <a href={foodVideo}>
                                <FontAwesomeIcon icon={faYoutube} />Video
                            </a>
                        </button>
                        <button onClick={() => setOpen(true)} className='btn btn-soft btn-info'>Recipe</button>
                    </div>
                </div>


            </div>
             {/* DaisyUI Modal */}
      {open && (
        <dialog open className="modal">
          <div className="modal-box">
             <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button onClick={() => setOpen(false)} className="btn btn-lg btn-error bg-red-600 btn-circle border-3 absolute right-2 top-2">✕</button>
    </form>
            <h3 className="font-bold text-xl bg-amber-300 text-black py-2 px-2">{foodName}: </h3>
            <p className=" text-center font-bold text-2xl py-2 text-green-500 border-b-4">Recipe Info:</p>
            <p className="py-4 px-2 my-2 bg-amber-200 text-black rounded-2xl border-4 border-orange-500 ">
             {foodRecipe}
            </p>
            <div className="modal-action flex justify-between">
                   <div className="">
                    <button className='btn bg-red-300  btn-error'>
                            <a href={foodVideo}>
                                <FontAwesomeIcon icon={faYoutube} />Video
                            </a>
                        </button>
                          <button className='btn  btn-accent mx-2'><a href={foodSrc}>Source</a></button>

                   </div>
              {/* <button className="btn btn-error" onClick={() => setOpen(false)}>Close</button> */}
            </div>
          </div>
        </dialog>
      )}
    </div>



    );
};

export default FoodCards;