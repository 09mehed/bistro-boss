import React from 'react';
import useAuth from '../../../hooks/useAuth';

const AdminHome = () => {
    const {user} = useAuth()
    return (
        <div>
            <h2 className="text-3xl">Hi Welcome </h2>
            {
                user?.displayName ? user.displayName : 'Back'
            }
        </div>
    );
};

export default AdminHome;