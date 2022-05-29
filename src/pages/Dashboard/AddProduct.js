import React from 'react';
import { toast } from 'react-toastify';
// const { name, available_quantity, price, minimum_order_quantity
// } = tool;

const AddProduct = () => {

    const addProduct = event => {
        event.preventDefault() ;
        const name = event.target.name.value ;
        const price = event.target.price.value ;
        const description = event.target.description.value ;
        const available_quantity = event.target.available_quantity.value ;
        const minimum_order_quantity  = event.target.minimum_order_quantity.value ;
        const img = event.target.img.value ;

        const product = {
           name: name,
           price: price,
           description: description,
           available_quantity: available_quantity,
           minimum_order_quantity: minimum_order_quantity,
           img: img,
        }

        fetch('https://tranquil-tundra-16871.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(product),
        })
        .then(res => res.json())
        .then(data => {
            toast.success('Your Product add')
            event.target.reset() ;
        })

    }

    return (
        <div className=' flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className=" text-2xl text-center">Add Product</h2>
                    <form onSubmit={addProduct}  >
                        <input type="text" placeholder="Name" name='name' className="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input type="number" placeholder="Product Price" name='price' className="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <textarea type="text" placeholder="Product Details" name='description' className="input mb-3 block h-16 input-bordered input-primary w-full max-w-xs" required />

                        <input type="text" placeholder="Available Quantity" name='available_quantity' className="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input type="text" placeholder="Minimum Order Quantity" name='minimum_order_quantity' className="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input type="text" placeholder="Image URL" name='img' className="input mb-3 block input-bordered input-primary w-full max-w-xs" required />

                        <input className='btn btn-primary w-full' type="submit" value="Add" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddProduct;