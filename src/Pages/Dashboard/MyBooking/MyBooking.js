import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvide';

const MyBooking = () => {
    const { user } = useContext(AuthContext);
    const url = `https://car-resale-server-side.vercel.app/bookings?email=${user?.email}`;
    


    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
            return data;

        }
    })
    return (
        <div>
            <h2 className='text-center text-3xl font-semibold pb-5'>My Booking</h2>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Car Name</th>
                                <th>Price</th>
                                <th>Meeting Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((booking, ids) => <tr
                                key={booking._id}
                                >
                                    <th>{ids+1}</th>
                                    <td>{booking.carName}</td>
                                    <td>${booking.resalePrice}</td>
                                    <td>{booking.location}</td>
                                </tr> )
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyBooking;