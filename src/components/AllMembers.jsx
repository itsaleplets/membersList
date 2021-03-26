import getAllMembers from '../services/api';
import { useEffect, useState } from 'react';

function AllMembers() {
  const [members, setMembers] = useState('');
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getAllMembers();
    setMembers(data);
  }

  return (
    <div>
      {members && members.map((member) => {
        return <div>
          <h3>{`Login: ${member.login}`}</h3>
          <img src={member.avatar_url} alt={`${member.login} github avatar`}/>
                
          </div>
      })}
    </div>
  );
}

export default AllMembers;
