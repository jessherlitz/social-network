import { useEffect } from "react"

const VideoSideBar = () => {

  useEffect(() => {
    if (IVSPlayer.isPlayerSupported) {
      const player = IVSPlayer.create();
      player.attachHTMLVideoElement(document.getElementById('video-player'));
      player.load("https://3dfe47df10b1.us-east-1.playback.live-video.net/api/video/v1/us-east-1.421963817804.channel.UtQpAJq6ZVJg.m3u8");
      player.play();
    }
  }, [])

  return (
    <div className="flex flex-col">
      <video className='max-w-[400px] h-[250px] py-2' id="video-player" autoPlay controls muted></video>
      <video className='max-w-[400px] h-[250px] py-2' id="video-player" autoPlay controls muted></video>
      <video className='max-w-[400px] h-[250px] py-2' id="video-player" autoPlay controls muted></video>
    </div>
  )
}

export default VideoSideBar;