import { useState } from 'react';
import '../form.css';

const users = [
    { id: 1, name: "Rahul", role: "User" },
    { id: 2, name: "Raju", role: "Admin" },
    { id: 3, name: "John", role: "User" },
    { id: 4, name: "Kiran", role: "Admin" }
];

export default function UserList() {
    console.log("rendering...");

    const [searchTerm, setSearchTerm] = useState("");
    const [roleFilter, setRoleFilter] = useState("All");

    const filteredUsers = users.filter((user) => {
        console.log("filtering users...");

        let matchSearchTerm = user.name.toLowerCase().includes(searchTerm.toLowerCase());
        console.log(matchSearchTerm);

        let matchesRole = roleFilter === 'All' || user.role === roleFilter;
        console.log(matchSearchTerm && matchesRole);
        return matchSearchTerm && matchesRole;
    });

    return (
        <>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
            >
                <option value="All">All</option>
                <option value="User">User</option>
                <option value="Admin">Admin</option>
            </select>
            <ul>
                {
                    filteredUsers.map((user) => {    
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </>
    );
}


function Count(){

}