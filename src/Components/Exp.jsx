import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import Player_lipsync from './Player_lipsync.jsx'
// import {AvatarLs} from './AvatarLs.jsx'
function Exp({isSpeaking,isIdle,lipsyncData,audioProgress}) {
    const texture = useTexture("/src/assets/background.jpg");
  const viewport = useThree((state) => state.viewport);

  return (
    <>
    
    <Player_lipsync isSpeaking={isSpeaking} isIdle={isIdle} lipsyncData={lipsyncData} audioProgress={audioProgress}/>
      <Environment preset="sunset" />
   </>
      
  )
}

export default Exp;