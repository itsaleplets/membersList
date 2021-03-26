const getAllMembers = async () => {
  const result = await fetch('https://api.github.com/orgs/grupotesseract/public_members');
  const membersList = await result.json();
  return membersList;
};

export default getAllMembers;
