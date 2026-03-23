import { Suspense, useState } from 'react'
import './App.css'
import FoodSection from './FoodSection/FoodSection'
import NavBar from './Component/Navbar/NavBar'
import Footer from './Component/FooterSection/Footer';


const foodDataRec = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(rec => rec.json())


function App() {

 const [searchTerm, setSearchTerm] = useState("");


  return (
    <>
      {/* nav bar  */}
      <NavBar setSearchTerm={setSearchTerm} ></NavBar>
      {/* food section  */}
      <Suspense fallback={<div className='flex justify-center items-center h-full my-60'><span className="loading loading-spinner loading-7xl"></span></div>}>
        <FoodSection foodDataRec={foodDataRec} searchTerm={searchTerm}  ></FoodSection>
      </Suspense>
      <Footer></Footer>

    </>
  )
}

export default App
