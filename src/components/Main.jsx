import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function Main() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [isAscending, setIsAscending] = useState(true);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("https://www.freetestapi.com/api/v1/users");
        setUsers(res.data);
        setFilteredUsers(res.data); // Initially set filtered users to all users
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const results = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(results);
    setCurrentPage(1); 
  }, [search, users]);

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      isAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sortedUsers);
    setIsAscending(!isAscending);
  };

  // Pagination Logic
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  return (
    <div className="main flex flex-col items-center h-full w-full p-4">
      
      <div className="mb-4 flex gap-4 w-full h-10 max-w-[400px] md:min-w-[60%]">
        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 w-full rounded-md bg-gray-800 text-white"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="w-12 text-sm bg-black text-white rounded-md border"
          onClick={handleSort}
        >
          {isAscending ? "A-Z" : "Z-A"}
        </button>
      </div>

      
      <div className="px-2 max-w-[94%] md:min-w-[60%] mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentUsers.map((user) => (
          <Card key={user.id} {...user} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex gap-3">
          {pageNumbers.map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-md border border-black ${
                currentPage === page ? "bg-black text-white" : "bg-white text-black"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default Main;
