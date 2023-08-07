import HomeIcon from '../assets/home.png';
import MainIcon from '../assets/twitch-logo.svg';
import SearchIcon from '../assets/search.png';
import NotificationsIcon from '../assets/notifications.png';
import MessagesIcon from '../assets/messages.png';
import ListsIcon from '../assets/lists.png';
import BookmarksIcon from '../assets/bookmarks.png';
import CommunitiesIcon from '../assets/communities.png';
import VerifiedIcon from '../assets/verified.png';
import ProfileIcon from '../assets/profile.png';
import MoreIcon from '../assets/more.png';
import GamesIcon from '../assets/games.png';
import LiveIcon from '../assets/live.png';
import { Link } from "react-router-dom";


const LeftSideBar = () => {

  const menuItems = [
    { icon: HomeIcon, text: 'Home', link: '/' },
    { icon: SearchIcon, text: 'Search', link: '/' },
    { icon: GamesIcon, text: 'Games', link: '/' },
    { icon: NotificationsIcon, text: 'Notifications', link: '/' },
    { icon: MessagesIcon, text: 'Messages', link: '/' },
    { icon: ListsIcon, text: 'Lists', link: '/' },
    { icon: BookmarksIcon, text: 'Bookmarks', link: '/' },
    { icon: CommunitiesIcon, text: 'Communities', link: '/' },
    { icon: VerifiedIcon, text: 'Verified', link: '/' },
    { icon: ProfileIcon, text: 'Profile', link: '/' },
    { icon: LiveIcon, text: 'Live', link: '/start-broadcast' },
    { icon: MoreIcon, text: 'More', link: '/' }
  ]

  return (
    <>
      <img src={MainIcon} className='hover:cursor-pointer flex align-start h-[40px] w-full p-1 mb-1 min-w-[50px] md:flex md:align-start md:w-0 md:p-0 md:pt-1 md:min-w-[40px]' />
      {menuItems.map((item) => (
        <div key={item.text} className='font-regular text-[13px] items-center uppercase transition duration-50ms ease-out hover:cursor-pointer justify-center md:justify-start flex flex-row text-md py-2 hover:bg-gray-200 '>
          <img src={item.icon} className='object-contain h-4 w-4' />
          <p
            className="hidden md:flex flex-row self-center p-0.5 ml-1.5 hover:text-violet-700 cursor-pointer">
            <Link to={item.link}>{item.text}</Link>
          </p>
        </div >
      ))}
    </>
  )
}

export default LeftSideBar
