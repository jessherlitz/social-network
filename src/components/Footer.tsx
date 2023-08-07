import CoolCat from '../assets/cool-cat.png';

const Footer = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-5 h-[60px] w-full bg-pdark rounded-tl-lg	rounded-tr-lg fixed bottom-0">
        <div className="flex flex-row items-center">
          <img className='h-[40px] w-[40px]' src={CoolCat} alt="" />
          <p className="font-inter font-bold ml-3 text-white text-lg">Join the Twitch community!</p>
          <span className="hidden md:flex font-inter ml-2 text-white text-lg">Discover the best live streams anywhere.</span>
        </div>
        <div className="bg-white rounded items-center hover:bg-violet-100 mr-10">
          <button className="px-3 font-inter font-bold text-sm pb-1">Sign Up</button>
        </div>
      </div>
    </>
  )
}

export default Footer