import React from 'react';
import ShopCard from '../../../components/ShopCard/ShopCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Ordertab = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                items.map(item => <ShopCard item={item} key={item._id}></ShopCard>)
            }
        </div>
    );
};

export default Ordertab;