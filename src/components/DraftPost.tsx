import axios from 'axios';
import { useState } from 'react';
import ImageIcon from '../assets/image.png';
import GifIcon from '../assets/gif.png';
import EmojiIcon from '../assets/emoji.png';
import TwitchIcon from '../assets/twitch.png';
import LocationIcon from '../assets/location.png';

const DraftPost = () => {
  const [postText, setPostText] = useState<string>('');


  const userId: string = '0a618119-bf36-43be-a369-e33d00ad1133';

  const createPost = () => {
    axios
      .post('http://localhost:3333/posts', { userId, postText })
      .then(res => console.log(res))
    setPostText('')
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostText(event.target.value);
  }


  return (
    <>
      <div className='flex flex-row h-[135px] absolute w-full z-50 shadow-sm'>
        <div className='flex flex-col justify-start pt-2 items-center bg-neutral-50 min-w-[60px] backdrop-blur-sm bg-neutral/95'>
          <img className='rounded-full h-[50px] w-[50px] hover:cursor-pointer' src="http://placekitten.com/200/300" alt="" />
        </div>
        <div className='flex flex-col flex-grow'>
          <textarea
            className='backdrop-blur-sm bg-neutral-50/95 h-full p-2 resize-none outline-none font-inter text-[14px] text-test text-justify'
            placeholder="What's happening?"
            name="post"
            id="post"
            value={postText}
            onChange={handleTextChange}
          />
          <div className='bg-neutral-50 opacity-95 h-14 flex flex-row shadow-xs justify-end items-center'>
            <div className='p-2 rounded-xl hover:bg-lime-100 hover:cursor-pointer'>
              <img className='h-5' src={ImageIcon} alt="" />
            </div>
            <div className='p-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer'>
              <img className='h-5' src={GifIcon} alt="" />
            </div>
            <div className='p-2 rounded-xl hover:bg-gray-200 hover:cursor-pointer'>
              <img className='h-5' src={EmojiIcon} alt="" />
            </div>
            <div className='p-2  rounded-xl hover:bg-violet-200 hover:cursor-pointer'>
              <img className='h-5' src={TwitchIcon} alt="" />
            </div>
            <div className='p-2  rounded-xl hover:bg-yellow-100 hover:cursor-pointer'>
              <img className='h-5' src={LocationIcon} alt="" />
            </div>
            <div className='justify-self-end bg-purple mx-1 px-2 py-1 text-sm rounded-md hover:cursor-pointer hover:bg-violet-700'>
              <button
                className=' text-white font-semi text-sm'
                onClick={createPost}
              >
                Post</button>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DraftPost

