const getAllMembers = async () => {
  const result = await fetch('https://api.github.com/orgs/grupotesseract/public_members');
  const membersList = await result.json();
  return membersList;
};

const memberDetails = async (user) => {
  const result = await fetch(`https://api.github.com/users/${user}`)
  const details = await result.json();
  return details;
}

export { getAllMembers, memberDetails };
