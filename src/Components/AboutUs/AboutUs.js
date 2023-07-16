import React from 'react';
import shopping from '../Assets/shopping'
const AboutUs = () => {
    return (
        <div className='container flex lg:flex-row flex-col-reverse  justify-between items-center gap-5 mt-10 text-white pb-10'>
            <div className='lg:w-3/5'>
                <h2 className='text-4xl font-bold text-[#049b24]'>Welcome to Clothing Store!</h2>
                 <h4 className='mt-5 text-white'>At Clothing Store, we are passionate about fashion and committed to bringing you the latest trends and timeless classics all in one place. Our online store offers an extensive collection of high-quality clothing and accessories to elevate your style and help you express your unique personality.</h4>
                 <h3 className=' text-4xl text-[#049b24] font-semibold mt-14'>Why Choose Us?</h3>
                 <p className=' mt-6'>
                1. Trendy and Diverse Selection: Whether you're looking for a stylish t-shirt, a classic shirt, a comfortable shari, trendy sunglasses, a beautiful kamij, a fashionable pant, or the perfect pair of shoes, we have you covered. Our vast and ever-growing selection ensures you'll find something that suits your taste and preferences.
                 </p>
                 <p className='mt-6'>
                2. Premium Quality: We believe in offering nothing but the best to our valued customers. Each product in our collection is carefully curated and crafted using top-notch materials to ensure durability and comfort, so you can wear your purchases with confidence.
                 </p>
                 <p className='mt-6'>
                3. Affordable Prices: Looking good shouldn't break the bank! We strive to make fashion accessible to everyone by offering competitive prices without compromising on quality. Discover incredible deals and special offers that allow you to revamp your wardrobe without guilt.
                 </p>
                 <p className='mt-6'>
                4. Fast and Reliable Shipping: We know how exciting it is to receive your new fashion finds quickly. That's why we work with trusted shipping partners to ensure your orders arrive at your doorstep in the shortest possible time.
                 </p>
                 <p className='mt-6'>
                5. Excellent Customer Service: Your satisfaction is our top priority. Our dedicated customer support team is here to assist you with any inquiries, concerns, or feedback you may have. We value your shopping experience and will go above and beyond to make it a memorable one.
                 </p>
                 <p className='mt-6'>
                6. Secure and Convenient Shopping: Your online safety matters to us. Our website is equipped with robust security measures to protect your personal information, ensuring a worry-free shopping experience.
                 </p>
                 <p className='mt-8'>Join us on this fashionable journey and explore the latest trends and timeless classics that will elevate your style and make you stand out from the crowd. Whether you're a trendsetter, a classic lover, or someone who loves to mix and match, Clothing Store has something special for you.</p>
                 <p className='mt-6 text-semibold text-2xl'>Thank you for choosing Clothing Store – where fashion meets passion!</p>
                 <p className='mt-6 text-bold text-xl'>Happy Shopping!</p>
            </div>
            <div className='lg:w-2/5'>
              <img  className='w-full lg:h-full h-[300px]  object-fill ' src={shopping} alt=''></img>
            </div>
        </div>
    );
};

export default AboutUs;