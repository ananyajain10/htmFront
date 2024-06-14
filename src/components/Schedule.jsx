import { FlagTriangleRight } from 'lucide-react';
import bikeRide from "../assets/scheduleBike.png";
import { schedule } from '../constants/constants.jsx';
const Schedule = () => {
  return (
    <div className=' bg-pink'>
        <h2 className='text-3xl sm:text-5xl  lg:text-6xl text-center pt-10 tracking-wide'>
        Map The HTM Journey
        </h2>
        <div className='flex flex-col lg:flex-row   justify-center items-center'>
            <div className=' pt-10 lg:w-1/2 justify-center'>
                <img className='rounded-md ' src={bikeRide} alt="JourneyImage" />
            </div>
            <div className='lg:w-1/2 pt-10 p-2 justify-center'>
                {schedule.map((item, index)=>(
                    <div key={index} className='flex items-center space-x-3 p-2'>
                        <FlagTriangleRight className='w-10 h-10 text-orange'/>
                        <div>
                            <h2 className='text-2xl semi-bold'>{item.title}</h2>
                            <h3 className='text-2sm '>{item.time}</h3>
                            <p className='text-sm'>{item.headline}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Schedule