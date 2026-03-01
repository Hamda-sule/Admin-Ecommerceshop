import React, { useState } from 'react';
import './AddProduct.css';
import upload_area from '../../assets/cart_icon.png';

const AddProduct = () => {
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: '',
        image: '',
        category: 'women',
        new_price: '',
        old_price: '',
    });

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

const Add_Product = async () => {
    try {
        let product = productDetails;

        const formData = new FormData();
        formData.append('product', image, image.name);

        // Upload image
        const uploadRes = await fetch('http://localhost:4000/upload', {
            method: 'POST',
            body: formData
        });

        const uploadData = await uploadRes.json();

        if (!uploadData.success) {
            alert("Image upload failed.");
            return;
        }

        product.image = uploadData.image_url;

        // Add product
        const addRes = await fetch('http://localhost:4000/addproduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });

        const addData = await addRes.json();

        if (addData.success) {
            alert("✅ Product added successfully!");
        } else {
            alert("❌ Failed to add product.");
        }

    } catch (err) {
        console.error("Unexpected error:", err);
        alert("❌ Unexpected error occurred.");
    }
};



    return (
        <div className="addproduct">
            <div className="addproduct-itemfileds">
                <p>Product title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type name" />
            </div>

            <div className="addproduct-price">
                <div className="addproduct-itemfileds">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" />
                </div>
                <div className="addproduct-itemfileds">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" />
                </div>
            </div>

            <div className="addproduct-itemfileds">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className="add-product-selector">
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>

            <div className="addproduct-itemfileds">
                <label htmlFor="file-input">
                    <img src={image ? URL.createObjectURL(image) : upload_area} className="addproduct-thumnail-img" alt="" />
                </label>
                <input onChange={imageHandler} type="file" name="image" id="file-input" hidden />
            </div>

            <button onClick={Add_Product} className="addproduct-btn">
                ADD
            </button>
        </div>
    );
};

export default AddProduct;
