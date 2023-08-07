
import DraftPost from "../components/DraftPost";
import Footer from "../components/Footer";
import LeftSideBar from "../components/LeftSideBar";
import Post from "../components/Post";
import VideoSideBar from "../components/VideoPlayer";
// import { RightSideBar } from "./components/RightSideBar";



const Home = () => {
  return (
    <>
      <div className="font-default bg-primaryGray flex flex-row h-screen justify-center overflow-hidden">

        <div className="min-w-[55px] pt-2 md:min-w-[180px] bg-primaryGray">
          <LeftSideBar />
        </div>

        <div className="bg-white w-[680px] relative border-x border-gray-100">
          <DraftPost />
          <Post />
        </div>

        <div className="p-2 pt-2 hidden lg:flex ">
          {/* <RightSideBar /> */}
          <VideoSideBar />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home