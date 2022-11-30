import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvide';

const Bayer = () => {

    const { user } = useContext(AuthContext);
    const url = 'https://car-resale-server-side.vercel.app/users?userRol=Bayer';

    const { data: bayers = [] } = useQuery({
        queryKey: ['bayers', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;

        }
    })
    return (
        <div>
             <div>
            <h2 className='text-center text-3xl font-semibold pb-5'>Bayers</h2>
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
                                bayers.map((bayer, ids) => <tr
                                key={bayer._id}
                                >
                                    <th>{ids+1}</th>
                                    <td>{bayer.name}</td>
                                    <td>{bayer.email}</td>
                                    <td>{bayer.userRol}</td>
 
                                </tr> )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Bayer;