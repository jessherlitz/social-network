import { useEffect, useRef } from "react"
import { getConfigFromResolution } from "../helpers/helpers";
import IVSBroadcastClient from 'amazon-ivs-web-broadcast';

const StartBroadcast = () => {
  const client = useRef(null);
  const canvasRef = useRef(null);
  const channelType = useRef('STANDARD');
  const streamResolution = useRef('720');



  useEffect(() => {

    const streamConfig = getConfigFromResolution(
      streamResolution.current,
      channelType.current
    );

    const IVSClient = IVSBroadcastClient.create({
      streamConfig: streamConfig,
    });

  })


  return (
    <>

    </>
  )
}

export default StartBroadcast