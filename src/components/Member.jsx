import { memberDetails } from '../services/api';
import { useEffect, useState } from 'react';

function App({ goBack, user }) {
  const [member, setMember] = useState('');

  useEffect(() => {
    getMemberDetails();
  }, [])

  const getMemberDetails = async () => {
    const data = await memberDetails(user);
    setMember(data);
  }

  return (
    <div className="body">
      <button onClick={goBack}>
        Go Back
      </button>

      {!user ? <h1>Loading...</h1> : <div className="cardDiv">
        <h3>{`Name: ${member.name}`}</h3>
        <p>{`Repositories: ${member.public_repos}`}</p>
        <p>{`Followers: ${member.followers}`}</p>
        {member && <p>{`Started in: ${member.created_at.slice(0,10)}`}</p>}
      </div>}
      
    </div>
  );
}

export default App;
