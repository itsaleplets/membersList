import { getAllMembers } from '../services/api';
import { useEffect, useState } from 'react';
import Member from './Member';

function AllMembers({ checkDetails }) {
  const [members, setMembers] = useState('');
  const [loginFilter, setLoginFilter] = useState('');
  const [showDetails, setShowDetails] = useState(false);

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

  const handleClick = (user) => {
    console.log(user);
    checkDetails(user);
  } 

  // switch(showDetails) {
  //   case false:
  //     return  
  //   case true:
  //     return <Member user={user} goBack={goBack} />
  //   default:
  //     return true;
  // };

  return (
    <div>
      <input
        placeholder="Login"
        onChange={handleChange}
      /><br /><br />
      {/* {showDetails ? <Member /> : 'nop'} */}
      {members && members.filter((member) => member.login.toLowerCase().includes(loginFilter.toLowerCase())).map((member) => (
          <div
            onClick={() => handleClick(member.login)}
          >
            <h3>{`Login: ${member.login}`}</h3>
            <img src={member.avatar_url} alt={`${member.login} github avatar`}/>
          </div>
      ))}
    </div>
  );
}

export default AllMembers;
