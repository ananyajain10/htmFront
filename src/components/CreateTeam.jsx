
import { useState } from "react";
const CreateTeam = () => {

    
    const [teamName, setTeamName] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [university, setUniversity] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
     const [errorMessage, setErrorMessage] = useState(null);
   

     const handleSubmit = async(event)=>{
      const userData = {
        teamName: teamName,
        teamMembers: [
          {
            teamMemberName: fullName,
            email: email,
            university: university,
          },
        ],
      };
      console.log(JSON.stringify(userData));
       event.preventDefault();
       setIsSubmitting(true);
       setErrorMessage(null);
    
       try{
        const response = await fetch('https://hackteamapi.onrender.com/registerTeam/createTeam',{
           method:"POST",
           headers:{
            "Content-Type":"application/json",
           },
           body: JSON.stringify(userData)
          });/*  */
          console.log(JSON.stringify(userData));
      //  if(!Response.ok){
      //   throw new Error(`api request failed", ${response.message}`);
      //  }

       const data = await response.json();

       console.log('Team Created', data);

       setTeamName('');
       setFullName('');
       setEmail('');
       setUniversity('');

       } catch (error) {
        console.error('Error creating team:', error);
        setErrorMessage(error.message);
   
     } finally{
      setIsSubmitting(false);
     }

    }

  return (
    <div className="bg-gray-100 p-10 rounded-md shadow-md mt-10">
      <h1 className="text-2xl font-bold text-purple mb-5">Create A Team</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="teamName"
            className="block text-sm font-medium text-gray-700"
          >
            Team Name
          </label>
          <input
            type="text"
            id="teamName"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple focus:border-purple"
            placeholder="Enter Team Name"
            autoComplete="on"
            value={teamName}
            onChange={(e)=> setTeamName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700"
          >
            Your Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple focus:border-purple"
            placeholder="Enter Your Full Name"
             autoComplete="on"
            value={fullName}
            onChange={(e)=> setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple focus:border-purple"
            placeholder="Enter Email Address"
             autoComplete="on"
            value = {email}
            onChange = {(e)=> setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="university"
            className="block text-sm font-medium text-gray-700"
          >
            University
          </label>
          <input
            type="text"
            id="university"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-purple focus:border-purple"
            placeholder="Enter University Name"
             autoComplete="on"
            value = {university}
            onChange={(e)=> setUniversity(e.target.value)}
          />


        </div>

        <button
          className={`bg-purple text-white px-3 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple ${
            isSubmitting ? 'disabled opacity-50' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Creating Team...' : 'Create Team'}
        </button>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </form>

        </div>
  )};

export default CreateTeam;