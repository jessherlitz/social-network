import SearchIcon from '../assets/search.png';

export const RightSideBar = () => {
  return (
    <>
      <div className="flex flex-col p-3">

        <div className="flex flex-row">
          <input className="w-[300px] h-8 rounded-tl-lg rounded-bl-lg border border-slate-400 outline-[16px] focus:border-7 focus:outline-purple"
            type="text"
            placeholder="Search" />
          <div className=" bg-gray-300 w-[32px] h-[32px] rounded-tr-lg rounded-br-lg">
            <img className='object-contain h-5 w-5' src={SearchIcon} alt="" />
          </div>
        </div>

        <div>
          <div>videoplayer</div>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>info</div>
          </div>
        </div>

        <p>show more</p>
      </div>
    </>
  )
}
