import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyer = () => {

    const { data: buyers = [], refetch } = useQuery({
        queryKey: ['buyers'],
        queryFn: async () => {
            const res = await fetch('https://mobiles-resale-market-server.vercel.app/buyers')
            const data = await res.json();
            console.log(data);
            return data
        }
    })



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
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            buyers.map((buyer, i) => <tr key={buyer._id}>
                                <th>{i + 1}</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer.role}</td>
                                <td><button className='btn btn-xs btn-danger text-white'> Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyer;