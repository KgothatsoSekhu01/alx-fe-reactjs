const UserList = ({ users }) => {
  return (
    <div className="mt-6">
      {users.map(user => (
        <div key={user.id} className="bg-white p-4 rounded shadow mb-4">
          <div className="flex items-center space-x-4">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="font-bold text-lg">{user.login}</h3>
              <p className="text-sm text-gray-500">{user.location || 'Location not provided'}</p>
              <p className="text-sm text-gray-500">Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;
