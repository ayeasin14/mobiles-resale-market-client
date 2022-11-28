import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllUsers = () => {


    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://mobiles-resale-market-server.vercel.app/users')
            const data = await res.json();
            console.log(data);
            return data;
        }
    });


    const handleMakeAdmin = id => {
        fetch(`https://mobiles-resale-market-server.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Make Admin Successful');
                    refetch();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl">All Users</h2>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    {user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-xs btn-primary text-white'>Make Admin</button>}
                                </td>

                                <td><button className='btn btn-xs btn-danger text-white'> Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;