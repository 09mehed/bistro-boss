import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async(data) => {
        const imageFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        } )
        if(res.data.success){
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.display_url
            }
            const menu = await axiosSecure.post('menu', menuItem)
            .then(res => {
                console.log(res.data);
            })
            if(menu.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }

    }
    return (
        <div>
            <SectionTitle
                heading='Add an item'
                subHeading="What's new"
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            {...register("name", {required: true})}
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full" />
                    </label>

                    <div className='flex gap-2'>
                        {/* category */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue='default' {...register("category", {required: true})}
                                className="select select-bordered w-full max-w-xs">
                                <option disabled value='default'>Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option>Greedo</option>
                            </select>
                        </label>

                        {/* price */}
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                {...register("price", {required: true})}
                                type="number"
                                placeholder="Price"
                                className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* recipe details */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details*</span>
                        </div>
                        <textarea {...register("recipe", {required: true})} className="textarea textarea-bordered h-24" placeholder="Recipe Details"></textarea>
                    </label>

                    <div className='w-full py-3'>
                        <input {...register("image", {required: true})} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className='btn'>
                        Add Items <FaUtensils></FaUtensils>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;