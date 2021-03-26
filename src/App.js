import { useState } from 'react';
import './App.css';
import AllMembers from './components/AllMembers';
import Member from './components/Member';

function App() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState('');

  const goBack = () => {
    setStep(step - 1)
  };

  const checkDetails = (user) => {
    setStep(step + 1)
    setUser(user);
  }

  switch(step) {
    case 1:
      return  <AllMembers checkDetails={checkDetails} />
    case 2:
      return <Member user={user} goBack={goBack} />
    default:
      return true;
  };
}

export default App;
