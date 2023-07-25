import SRC from './assets/vr.jpg';
import { Scene, Sky, Entity } from '@belivvr/aframe-react';

type VrPropsType = {
  user: string
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const VrApp = ({ user, setIsLoggedIn }: VrPropsType) => {
  return (
    <>
      <Scene>
        <Sky rotation={{ x: 0, y: 0, z: 0 }} src={SRC} />
        <Entity
          text={{ value: `Hello ${user}`, align: 'center', color: '#cfc', width: 65, height: 25 }}
          position={{ x: 0, y: 6, z: -12 }}
          onClick={() => alert(5)}>
        </Entity>
        {/* <Box position={{ x: 1, y: 0, z: 1 }} onClick={() => alert(5)} color="#EEF62A" rotation={{ x: 0, y: 45, z: 0 }} /> */}
      </Scene>
      <button onClick={() => setIsLoggedIn(false)} id="logout">Logout</button>
    </>
  );
};

export default VrApp;
