import axios from 'axios';
import { useEffect, useState } from 'react';
import PostType from '../interfaces/PostType';
import CommentIcon from '../assets/comment.png';
import ShareIcon from '../assets/share.png';
import HeartIcon from '../assets/heart-outlined.png';
import TwitchIcon from '../assets/twitch.png';
import DiscordIcon from '../assets/discord-outline.png';

const Post = () => {
  const [posts, setPosts] = useState([]);


  // // THE NAME, PROFILE IMG AND USER ID WILL COME FROM THE USER CONTEXT AFTER THEY LOG IN.

  const userId: string = 'dfba068e-c4ba-42df-98ed-4c1752b0e219'; // temporary for testing

  useEffect(() => {
    const getPosts = () => {
      axios
        .get(`http://localhost:3333/posts/${userId}`)
        .then((res => {
          if (res) {
            console.log(res.data)
            setPosts(res.data)
          }
        }))
        .catch(err => {
          console.log(err)
        })
    }

    getPosts()
  }, [])

  return (
    <>
      <div className='h-screen overflow-auto scroll-smooth'>
        {posts && posts.map((post: PostType) => (
          <div key={post.post_id} className='hover:cursor-pointer flex flex-row relative top-[135px] hover:bg-gray-50 border-t border-gray-50'>
            <div className='p-2 min-w-[60px] shrink-0'>
              <img className='rounded-full w-[55px] h-[55px] hover:cursor-pointer' src="http://placekitten.com/200/300" alt="" />
            </div>
            <div className='flex-grow max-w-xl sm:pr-2'>
              <div className='flex flex-row items-center pt-2'>
                <h1 className='font-semi font-bold text-[13px] uppercase hover:cursor-pointer hover:text-purple'>Chucky Herlitz</h1>
                <span className='font-thin text-[13px] ml-2'>@chuckyherlitz • 13min</span>
                <div className='w-2 h-2 rounded-full bg-red-600 ml-2'></div>
                <span className='font-thin text-[13px] ml-2'>2.5K</span>
              </div>
              <p className='font-inter text-[14px] pt-1 text-test text-justify'>{post.post_text}</p>
              <div className='flex flex-row justify-start hover:cursor-pointer'>
                <div className='p-2 rounded-xl hover:bg-slate-200'>
                  <img className='h-4' src={CommentIcon} alt="" />
                </div>
                <div className='p-2 rounded-xl hover:bg-lime-100'>
                  <img className='h-4' src={ShareIcon} alt="" />
                </div>
                <div className='p-2 rounded-xl hover:bg-red-100'>
                  <img className='h-4' src={HeartIcon} alt="" />
                </div>
                <div className='p-2 rounded-xl hover:bg-violet-200'>
                  <img className='h-4' src={TwitchIcon} alt="" />
                </div>
                <div className='p-2 rounded-xl hover:bg-slate-200'>
                  <img className='h-4' src={DiscordIcon} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default Post

