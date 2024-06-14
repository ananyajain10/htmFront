import herobg from "../assets/heroBg.png";
import Countdown from 'react-countdown';

const Hero = () => {
    const Completionist = () => <span>Hack Started!</span>;
    const targetDate = new Date('2024-07-12T22:00:00');
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Completionist />;
        } else {
          // Render a countdown
          return <span>{days}:{hours}:{minutes}:{seconds}</span>;
        }
      };
  return (
    <>
        <div className="relative h-screen bg-center bg-cover bg-no-repeat" style={{backgroundImage: `url(${herobg})`}}>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white space-y-5">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold">Hack The Mountain 5.0</h1>
                <h1 className="text-2xl font-semibold text-violet mb-4">Challenge Yourself. Conquer the Code. Hack the Mountain.</h1> 
                <div className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold">
                <Countdown
    date={targetDate.getTime()}
    renderer={renderer}
  />
                </div>
                <div className="flex space-x-3 items-center justify-center">
                    <a className="text-2xl border rounded-md  px-2 py-3" href="#">Register</a>
                    <a className="text-2xl border rounded-md  px-2 py-3" href="#">Sponsor</a>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Hero