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
    setMember(data);
  }

  return (
    <div>
      <button onClick={goBack}>
        Go Back
      </button>
      <h3>{`Name: ${member.name}`}</h3>
      <p>{`Repositories: ${member.public_repos}`}</p>
      <p>{`Followers: ${member.followers}`}</p>
      {member && <p>{`Started on: ${member.created_at.slice(0,10)}`}</p>}
    </div>
  );
}

export default App;
