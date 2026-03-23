import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ setSearchTerm }) => {
    const [inputValue, setInputValue] = React.useState("");
    const handleSearch = () => {
        setSearchTerm(inputValue); // button click e final search update hobe
    };

    return (
        <div className='bg-[#d9a299db] max-w-360 mx-auto'>
            <div className='flex flex-col md:flex-row justify-between items-center py-5'>
                <div className='flex justify-start items-center py-5 px-4'>
                    <img src="/public/food.logo.jpg" alt="" className='w-20 rounded-2xl ' />
                    {/* <h1 className='text-4xl  md:text-6xl font-extrabold px-2'><span className='text-yellow-800'>Food</span> <span className='text-green-800'>Meal</span></h1> */}
                    <h1 className='text-4xl font-extrabold text-red-600 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-red-600'><span className='text-yellow-800'>Food</span> <span className='text-green-800'>Meal</span></h1>
                </div>

                <div className='flex items-center gap-2 mx-4 '>
                    <label className="input bg-white text-black  md:w-100 outline-none ">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}

                            type="search"
                            required
                            placeholder="Search"
                            className="input input-bordered"
                        />

                    </label>
                    <div>
                        <button onClick={handleSearch} className="btn btn-active btn-info hover:bg-[blue]
                        " >
                            <FontAwesomeIcon icon={faSearch} className=" text-2xl" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;