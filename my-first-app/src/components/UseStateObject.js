import React, {useState} from 'react'

const UseStateObject = () =>{
 const [profile, setProfile] = useState({
    name: "Ahmad Abubakar",
    Job: "web developer",
    company: "Google"
 });

 const updateCompany = () =>{
    setProfile({...profile, company: "Microsoft",});
 }
  return (
    <><h2 className='--text-center --my2'>UseState in Object</h2>
    <div className='--card --mx2'>
        <h2>Name: {profile.name}</h2>
        <h4>Job: {profile.Job}</h4>
        <h4>company: {profile.company}</h4>

    </div>
    <div className='--center-all --my2'>
        <button className='--btn --btn-primary' onClick={updateCompany}>Change company</button>
    </div>
    </>
  );
}

export default UseStateObject;