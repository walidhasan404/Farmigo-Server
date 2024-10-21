import React, { useEffect, useState } from 'react';

interface User {
    _id: string;
    name: string;
    email: string;
    profilePic: string;
    role: string;
}

const AllUsers: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(import.meta.env.VITE_API_3 + '/users/get-users');
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data = await response.json();
                setUsers(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-lg font-semibold">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-red-600 font-semibold text-lg">Error: {error}</div>
            </div>
        );
    }

    return (
        <div className="p-8 bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 min-h-screen">
            <h1 className="text-4xl font-bold mb-6 text-center text-white">All Users</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
                <table className="min-w-full">
                    <thead>
                        <tr className="bg-blue-700 text-white text-left">
                            <th className="py-3 px-5">Name</th>
                            <th className="py-3 px-5">Email</th>
                            <th className="py-3 px-5">Profile Picture</th>
                            <th className="py-3 px-5">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id} className={`hover:bg-blue-100 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
                                <td className="py-3 px-5 border-b">{user.name}</td>
                                <td className="py-3 px-5 border-b">{user.email}</td>
                                <td className="py-3 px-5 border-b">
                                    <img
                                        src={user.profilePic}
                                        alt={user.name}
                                        className="w-12 h-12 rounded-full shadow-md border-2 border-blue-500"
                                    />
                                </td>
                                <td className="py-3 px-5 border-b">{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
    
};

export default AllUsers;