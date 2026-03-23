import { Suspense } from 'react'
import './App.css'
import FoodSection from './Component/Navbar/FoodSection/FoodSection'
import NavBar from './Component/Navbar/NavBar'
import { ToastContainer, toast } from 'react-toastify';


const foodDataRec = fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a').then(rec => rec.json())


function App() {


  return (
    <>
    {/* nav bar  */}
      <NavBar></NavBar>
      {/* food section  */}
      <Suspense fallback={<div><span className="loading loading-spinner loading-4xl"></span></div>}>
        <FoodSection foodDataRec={foodDataRec}></FoodSection>
      </Suspense>

      <ToastContainer />
    </>
  )
}

export default App
