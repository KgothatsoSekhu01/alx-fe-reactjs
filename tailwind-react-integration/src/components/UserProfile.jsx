function UserProfile() {
  return (
    <div className="bg-gray-100 md:p-8 sm:p-4 max-w-xs md:max-w-sm mx-auto my-20 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="rounded-full sm:w-24 sm:h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 mx-autor transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h1 className="text-lg sm:text-xl text-blue-800 my-4 hover:text-blue-500 transition-colors duration-300 ease-in-out">John Doe</h1>
      <p className="text-sm sm:text-base text-gray-600">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
