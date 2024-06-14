import { useState } from "react";
import CreateTeam from "./CreateTeam.jsx"
import JoinTeam from "./JoinTeam.jsx"


const Registraion = () => {
    const [teamRegistration, setTeamRegistraion] = useState(0);
    const handleclickCreateTeam = () => {
        setTeamRegistraion(1);
    }
    const handleclickJoinTeam = () => {
        setTeamRegistraion(2);
    }
   
  return (
    <div className="p-5  flex flex-col items-center justify-center bg-darkViolet ">
        <h1 className="text-3xl text-white sm:text-5xl lg:text-6xl text-center p-5 tracking-wide font-semibold">Registration</h1>
        <div className="flex pt-3 lg:text-2xl  space-x-5 items-center justify-center">
          <button className="border px-3 py-2 rounded-md text-white bg-purple cursor-pointer " onClick={handleclickCreateTeam}  >CREATE TEAM</button>
            <button className="border px-3 py-2 rounded-md text-white bg-purple cursor-pointer" onClick={handleclickJoinTeam}>JOIN TEAM</button>
            </div>

            <div className="">
            {teamRegistration === 1 && <CreateTeam />}
            {teamRegistration === 2 && <JoinTeam />}
            </div>
    </div>
  )
}

export default Registraion