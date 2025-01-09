import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featured from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className='featured bg-fixed text-white py-5 my-20'>
            <section>
                <SectionTitle 
                heading='Featured Item'
                subHeading='Check it out'
                ></SectionTitle>
                <div className='md:flex justify-center items-center py-10 px-20 gap-5'>
                    <div>
                        <img src={featured} alt="" />
                    </div>
                    <div className='py-3'>
                        <p>Aug 20, 2024</p>
                        <p className='uppercase'>Where can i gat some?</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae praesentium dolores eos, alias minus autem architecto sunt facere rerum. Non consectetur provident possimus nisi! Similique voluptates vitae sapiente explicabo minima minus qui libero reiciendis, nihil debitis vero, asperiores nisi laudantium aspernatur autem voluptatibus recusandae exercitationem hic! Inventore saepe earum veritatis.</p>
                        <button className='btn btn-outline border-0 border-b-4 mt-5'>Read More</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;