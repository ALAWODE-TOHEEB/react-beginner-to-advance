import React, {useState} from 'react'
import { BiTrash } from 'react-icons/bi';

const UseStateArray = () => {
    const [people, setPeople] = useState([
        {id: 1, nam: "Anas Toyyib",}, {id: 2, nam: "ismaael salau",}, {id: 3, nam: "ahmad anas",}, {id: 4, nam: "Toyyib Umar",}, 
        { id: 5, nam: "Hamzah Aliy",}]);

  const removePerson = (id) => { 
    setPeople(people.filter((programmer) => programmer.id !== id));
   }

    
  return (
    <section className='--flex-center --100vh --bg-primary'>
      <div className='container'>
        <h1 className='--color-white'>Usestate in Array</h1>
        {people.map((person) =>{
         const {id, nam} = person;
          return(
            <div key={id} className='--flex-between --bg-light --my --card'>
               <h2>{nam}</h2>
               <BiTrash color='red' size={22} onClick={() => removePerson(id)}/>
               </div>
          )
        })}
        <button className='--btn --btn-danger' onClick={() =>{setPeople([])}}>Clear All</button>
        </div>
    </section>
  )
}

export default UseStateArray;