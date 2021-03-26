import { memberDetails } from '../services/api';
import { useEffect, useState } from 'react';

function App({ goBack }) {
  const [member, setMember] = useState('');

  useEffect(() => {
    getMemberDetails();
  }, [])

  const getMemberDetails = async () => {
    const user = 'Acquati';
    const data = await memberDetails(user);
    console.log(data);
    setMember(data);
  }

  const handleClick = () => {

  }
  return (
    <div>
      <button onClick={handleClick}>
        Go Back
      </button>
      <h3>{`Name: ${member.name}`}</h3>
      <p>{`Repositories: ${member.public_repos}`}</p>
      <p>{`Followers: ${member.followers}`}</p>
      <p>{`Started on: ${member.created_at.slice(0,10)}`}</p>
    </div>
  );
}

export default App;