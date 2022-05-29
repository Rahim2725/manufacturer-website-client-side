import React from 'react';
import porfile from '../../assets/image/profile.png'
import site1 from '../../assets/image/website/site1.png'
import site2 from '../../assets/image/website/site2.png'
import site3 from '../../assets/image/website/site3.png'
import facebook from '../../assets/image/logo/facebook.png'
import github from '../../assets/image/logo/github.png'
import linkedin from '../../assets/image/logo/linkedin.png'


const MyPortfolio = () => {
    return (
        <section className='mx-52'>
            <div className='flex justify-center items-center  mb-10' >
                <div className=''>
                    <div class="avatar">
                        <div class="w-24 mr-6 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={porfile} alt="" />
                        </div>
                    </div>
                </div>
                <div className='border-2  border-solid  h-28'></div>
                <div className='ml-6'>
                    <p>Name: <span>Md Abdur Rahim </span></p>
                    <p>Age: <span>17+</span></p>
                    <p>Post: <span>Md Front End Developer</span></p>
                    <p>Language: <span>English</span></p>
                </div>
            </div>
            <div className='flex justify-between items-center '>
                <div className='w-1/2 lg:mr-16 '>
                    <h3 className="text-2xl text-primary font-bold">About Me</h3>
                    <p>
                        <span className='text-xl text-orange-500'>HI THERE ! I'M Md Abdur Rahim.
                        </span> <br /> I am a front End Developer. Using my experience and skills in web design, I can create fast, responsive, and attractive websites which will surely score very much higher in terms of the awesomeness of your intended website visitors.</p>
                </div>
                <div className='w-32  h-32 border-2 p-5 text-center'>
                    <h1 className='text-2xl text-primary font-bold'>5+</h1>
                    <h2>Month  Of Experience</h2>
                </div>
                <div className='w-32  h-32 border-2 p-5 text-center ml-6'>
                    <h1 className='text-2xl text-primary font-bold'>10+</h1>
                    <h2>Project Completed</h2>
                </div>

            </div>
            <div className='mt-20'>
                <div><h3 className="text-2xl text-primary font-bold">Education</h3>
                    <div className='flex justify-between  w-full items-center mb-10'>
                        <div className='lg:w-4/6 ' >
                            <h2 className="text-xl font-bold">Web Developer</h2>
                            <p className="text-sm font-bold">From there I learned about the basics of programming, Html, Css, Tailwind, Bootstrap, JavaScript, Node js,  React, React Router,  Firebase, Mongodb,  Express, Material and much more.</p>
                        </div>
                        <div className='border-2  border-solid  h-28'></div>
                        <div className='w-3/6 ml-6'>
                            <h2 className="text-xl font-bold">Academic Education
                            </h2>
                            <p className="text-sm  font-bold">I am in class nine. I am a student of Nithupur Government. Model High School and College</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-16'>
                <h1 className="text-2xl text-primary font-bold">My Beast Project</h1>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                    <a target="_blank" href="https://warehouse-managment-27bf4.web.app/"> <img className='mt-6 w-30 h-36 border-2' src={site1} alt="" /></a>
                    <a target="_blank" href="https://independent-service-prov-6d7cc.web.app/"> <img className='mt-6 w-30 h-36 border-2' src={site2} alt="" /></a>
                    <a target="_blank" href="https://convention-center-rahim.netlify.app/"> <img className='mt-6 w-30 h-36 border-2' src={site3} alt="" /></a>
                </div>
            </div>

            <div className='mb-6 '>
                <h1 className="text-2xl text-primary font-bold text-center">Contact Me </h1>
                <div className='flex justify-center items-center mt-2'>
                    <a target="_blank" href="https://www.facebook.com/MdAbdurRahim25/">
                         <img className='h-12 w-12 mr-6' src={facebook} alt="" /></a>
                    <a target="_blank" href="https://github.com/Rahim2725">
                        <img className='h-12 w-12 ' src={github} alt="" /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/rahimwebdeveloper/">
                         <img className='h-12 w-12 ml-6' src={linkedin} alt="" /></a>
                </div>

            </div>

        </section>
    );
};

export default MyPortfolio;