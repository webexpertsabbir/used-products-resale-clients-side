import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvide';

const Seller = () => {
    const { user } = useContext(AuthContext);
    const url = 'https://car-resale-server-side.vercel.app/users?userRol=Seller';

    const { data: sellers = [] } = useQuery({
        queryKey: ['sellers', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;

        }
    })


    return (
        <div>
            <h2 className='text-center text-3xl font-semibold pb-5'>Seller</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>User Rol</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers.map((seller, ids) => <tr
                                key={seller._id}
                                >
                                    <th>{ids+1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{seller.userRol}</td>
 
                                </tr> )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Seller;