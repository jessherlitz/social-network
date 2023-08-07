import { useEffect, useRef, useState } from "react"
import { getConfigFromResolution } from "../helpers/helpers";
import IVSBroadcastClient from 'amazon-ivs-web-broadcast';

const StartBroadcast = () => {
  const client = useRef<any>(null);
  const canvasRef = useRef(null);
  const channelType = useRef('STANDARD');
  const streamResolution = useRef('720');


  ////
  const [version, setVersion] = useState('');
  const [devicePermissions, setDevicePermissions] = useState({
    video: false,
    audio: false,
  });

  const [errorAlertActive, toggleErrorAlert] = useAlertBox();
  const [errorAlertMessage, setErrorAlertMessage] = useState('');


  const handleError = (message: string) => {
    toggleErrorAlert();
    setErrorAlertMessage(`${message}`);
    console.error(message);
  };

  const handlePermissions = async () => {
    try {
      // Width and height are set to attempt to get max resolution video feed
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      for (const track of stream.getTracks()) {
        console.log(track)
        track.stop();
      }

      setDevicePermissions({ video: true, audio: true });
    } catch (err: any) {
      setDevicePermissions({ video: false, audio: false });
      throw Error(err);
    }
  };

  const initLayers = async () => {
    // If the user has not provided permissions, get them.
    if (!devicePermissions.video) {
      try {
        await handlePermissions();
      } catch (err) {
        // If we still don't have permissions after requesting them display the error message
        if (!devicePermissions.video && !devicePermissions.audio) {
          handleError(
            'Failed to access the camera and microphone. To start streaming, you must allow access to both your camera and microphone'
          );
        }
      }
    }

    // Log errors in the browser console
    client.current.config.logLevel = client.current.config.LOG_LEVEL.ERROR;

    // Attach the preview canvas to the client
    client.current.attachPreview(canvasRef.current);

    const canvas = client.current.getCanvasDimensions();
    const camOffLayer = {
      name: 'camOff',
      imageSrc: '/assets/camera-off.png',
      index: 1,
      x: canvas.width / 2 - canvas.width / 16,
      y: canvas.height / 2 - canvas.width / 16,
      width: canvas.width / 8,
      height: canvas.width / 8,
      type: 'IMAGE',
    };

    try {
      await addLayer(camOffLayer, client.current);
    } catch (err) {
      handleError(
        'Error: Failed to add a layer to the canvas. If the problem persists, try refreshing the app.'
      );
    }

    try {
      // Get video devices
      var vd = await getVideoDevices(client.current);
      setVideoDevices(vd);

      // Get audio devices
      var ad = await getAudioDevices(client.current);
      setAudioDevices(ad);
    } catch (err) {
      console.error(err);
      handleError(
        'Error: Could not find any available video or audio devices. Please ensure that a camera or microphone is attached to your device, and your privacy settings allow this app access them.'
      );
    }

    // Fetch saved devices from localstorage
    const savedVideoDeviceId = localStorage.getItem('savedVideoDeviceId');
    const savedAudioDeviceId = localStorage.getItem('savedAudioDeviceId');
    try {
      // If there is not active video device, set the default video device as the active device
      if (!activeVideoDevice.current) {
        const savedVideoDevice = vd.find(
          (device) => device.deviceId === savedVideoDeviceId
        );
        activeVideoDevice.current = savedVideoDevice ? savedVideoDevice : vd[0];
      }
      // Render the video device on the broadcast canvas
      renderActiveVideoDevice();

      // If there is no active audio device, set the default audio device as the active device
      if (!activeAudioDevice.current) {
        const savedAudioDevice = ad.find(
          (device) => device.deviceId === savedAudioDeviceId
        );
        activeAudioDevice.current = savedAudioDevice ? savedAudioDevice : ad[0];
      }
      // Add the active audio device to the broadcast mixer
      renderActiveAudioDevice();
    } catch (err) {
      console.error(err);
      handleError(
        'Error: Could not add the selected audio and video devices to the canvas. Please check the app settings to ensure that the correct webcam and microphone are selected.'
      );
    }
  };

  useEffect(() => {

    const streamConfig = getConfigFromResolution(
      streamResolution.current,
      channelType.current
    );

    const IVSClient = IVSBroadcastClient.create({
      streamConfig: streamConfig,
    });

    client.current = IVSClient;
    setVersion(IVSBroadcastClient.__version);
    initLayers();

  })


  return (
    <>
      hello
    </>
  )
}

export default StartBroadcast