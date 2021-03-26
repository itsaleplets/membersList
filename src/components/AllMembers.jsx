import { getAllMembers } from '../services/api';
import { useEffect, useState } from 'react';

function AllMembers() {
  const [members, setMembers] = useState('');
  const [loginFilter, setLoginFilter] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getAllMembers();
    setMembers(data);
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    console.log(value);
    setLoginFilter(value);
  };

  return (
    <div>
      <input
        placeholder="Login"
        onChange={handleChange}
      />
      {members && members.filter((member) => member.login.toLowerCase().includes(loginFilter.toLowerCase())).map((member) => (
        <div>
          <h3>{`Login: ${member.login}`}</h3>
          <img src={member.avatar_url} alt={`${member.login} github avatar`}/>
        </div>
      ))}
    </div>
  );
}

export default AllMembers;
