import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvide';

const BookingModal = ({ car, id}) => {
    const { description, img, location, name, originalPrice, resalePrice, use } = car;

    const navigate = useNavigate();


    const { user } = useContext(AuthContext);
    const handelBooking = event => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const location = form.location.value;


        const booking = {
            carName: name,
            userName: userName,
            email,
            phone,
            location
        }

        fetch('https://car-resale-server-side.vercel.app/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Booking confirmed');
                navigate('/booking-confirmed')
            })

        console.log(booking)

    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div>
                        <div>
                            <h3 className="text-lg font-bold">{name}</h3>
                        </div>
                        <div>
                            <h2 className='text-lg font-semibold'>Price: ${resalePrice}</h2>
                        </div>
                    </div>
                    <form onSubmit={handelBooking} className='grid grid-cols-1 gap-5'>
                        <input name='name' type="text" disabled defaultValue={user?.displayName} placeholder="Name" className="input w-full input-bordered" />
                        <input name='email' type="email" disabled defaultValue={user?.email} placeholder="Email Address" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='location' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />

                        <input type="submit" className='btn btn-primary w-full' value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;