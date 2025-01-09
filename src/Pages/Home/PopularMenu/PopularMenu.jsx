import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
    const [menu] = useMenu()
    const popularItems = menu.filter(item => item.category === 'popular')
    return (
        <section className='my-10'>
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            >
                
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;