import React from 'react';
import logo1 from '../../assets/image/logo/logo (1).png'
import logo2 from '../../assets/image/logo/logo (2).png'
import logo3 from '../../assets/image/logo/logo (3).png'
import facebook from '../../assets/image/logo/facebook.png'
import linkedin from '../../assets/image/logo/linkedin.png'
import twitter from '../../assets/image/logo/twitter.png'
import github from '../../assets/image/logo/github.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const newDate = new Date();
    const year = newDate.getFullYear();
    return (
        <footer>
            <div className='mx-16 pt-5 grid grid-rows-1 lg:grid-cols-3 gap-6'>
                <div>
                    <div className='flex border-2 border-solid  border-black algn-items-center  mb-3 '>
                        <img  className='h-[50px]' src={logo1} alt="" />
                        <p className='mb-0'>Nithpur <br /> Porsha Naogaon</p>
                    </div>
                    <div className='flex items-center border-2 border-solid  border-black  mb-3 p-1'>
                        <img className='h-[40px]' src={logo3} alt="" />
                        <p className='mb-0  '>+8801827251661</p>
                    </div>
                    <div className='flex items-center border-2 border-solid  border-black mb-3 p-1'>
                        <img className='h-[30px]' src={logo2} alt="" />
                        <p className='mb-0'>info.abdurrahim@gmail.com</p>
                    </div>
                </div>
                <div className='link-area'>
                    <h3> HOSE REPAIR TOOLS BEST OFFER </h3>
                   <Link className='block text-black' to="/home">Home</Link>
                   <Link className='block text-black' to="/blog">Blogs</Link>
                   <Link className='block text-black' to="/login">Login</Link>
                   <Link className='block text-black' to="/signup">Sign Up</Link>
                   <Link className='block text-black' to="/myPortfolio">My Portfolio</Link>
                </div>
                <div className='about-company'>
                    <h3>Contact Me</h3>
                     <div className='flex'>
                        <a href=""><img className=' mt-2 h-[45]' src={facebook} alt="" /></a>
                        <a href=""><img className='ml-3 mt-2 h-[45]'  src={linkedin} alt="" /></a>
                        <a href=""><img className='ml-3 mt-2 h-[45]' src={twitter} alt="" /></a>
                        <a href=""><img className='ml-3 mt-2 h-[45]'  src={github} alt="" /></a>
                    </div>
                </div>
            </div>
            <p className='text-center mb-0 py-3'> copyright&copy; {year}</p>
        </footer>
    );
};

export default Footer;