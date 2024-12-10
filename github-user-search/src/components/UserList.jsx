const UserList = ({ user }) => {
  return (
    <div>
      <div>
        <img src={user.avatar_url} alt={user.login} width={100} />
      </div>
      <h3>{user.name || user.login}</h3>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">
        View Profile
      </a>
    </div>
  );
};

export default UserList;
