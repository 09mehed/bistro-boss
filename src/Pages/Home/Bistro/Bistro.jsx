import React from 'react';
import chefServiceImg from '../../../assets/home/chef-service.jpg'

const Bistro = () => {
    return (
        <div className='p-5' style={{
            backgroundImage: `url(${chefServiceImg})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <section>
                <div className='p-20 text-center'>
                    <div className='bg-white p-20'>
                        <h1 className='text-3xl'>BISTRO BOSS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas error, animi illo qui et quod consequuntur quidem magnam perferendis corrupti impedit fuga dicta, reprehenderit, ut labore id. Et, assumenda expedita.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Bistro;