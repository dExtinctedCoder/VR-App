import SRC from './assets/vr.jpg';
import { Scene, Sky } from '@belivvr/aframe-react';

type VrPropsType = {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const VrApp = ({ setIsLoggedIn }: VrPropsType) => {
  return (
    <>
      <Scene>
        <Sky rotation={{ x: 0, y: 0, z: 0 }} src={SRC} color='#00000029' />
      </Scene>
      <button onClick={() => setIsLoggedIn(false)} id="logout">Logout</button>
    </>
  );
};

export default VrApp;
