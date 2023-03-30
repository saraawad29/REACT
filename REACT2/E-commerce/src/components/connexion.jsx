import { useState } from 'react'
import Button from './button'
import NavBar from './navbar';
export default function Connexion() {
    const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
    
        createUtilisateus('utilisateurs', {firstname, lastname})
      }
    return(
    <div>
        <NavBar/>
        <div className='flex justify-center mt-32'>

          <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstname">
              Firstname
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="firstname" type="text"
              placeholder="firstname" value={firstname} onChange={(inputElement)=>{ setFirstname(inputElement.target.value) }}/>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">
              Lastname
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="lastname" type="text"
              placeholder="lastname" value={lastname} onChange={(inputElement)=>{ setLastname(inputElement.target.value) }}/>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="hover:bg-slate-700 hover:scale-110 bg-black text-white font-bold text-sm cursor-pointer py-2  px-4"
              type="submit"
            >
              Connexion
            </button>
          </div>

          </form>
        </div>
    </div>  
        )
}