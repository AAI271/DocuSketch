import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons'; // Import all icons
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import MyButton from './components/myButton';
import Skeleton from './components/skeleton';

function App() {
  const iconKeys = Object.keys(Icons) as (keyof typeof Icons)[]; // Get all the keys of the imported icons
  const [currentIcon, setCurrentIcon] = useState<keyof typeof Icons>(iconKeys[0]);
  const [isChanging, setIsChanging] = useState(false);
  const [animation, setAnimation] = useState(false);

  const changeIcon = () => {
    if (!isChanging) {
      setIsChanging(true);
      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * iconKeys.length);
        setCurrentIcon(iconKeys[randomIndex]);
        setIsChanging(false);
      }, 3000);
    }
  };
  const animate = () => {
    if (!animation) {
      setAnimation(true);
      setTimeout(() => {
        setAnimation(false);
      }, 500);
    }
  };

  return (
    <>
    {!isChanging?(
      <h1>
      <FontAwesomeIcon icon={Icons[currentIcon] as IconProp} shake={animation} />
    </h1>
    ):(<Skeleton/>)}
      <div>
        <MyButton clickHandle={changeIcon} disabled={isChanging}>
          Change Icon
        </MyButton>
        <MyButton clickHandle={animate} disabled={isChanging}>
          Animation
        </MyButton>
      </div>
    </>
  );
}

export default App;
