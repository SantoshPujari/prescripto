import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img
          src={assets.about_image}
          alt=''
          className='w-full md:max-w-[360px]'
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            aspernatur architecto sunt. Aspernatur facilis qui omnis voluptate
            voluptatibus voluptates aliquam amet facere labore cupiditate,
            laboriosam commodi error earum. Velit, qui!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit amet
            beatae quibusdam? Tempora et voluptatibus provident unde, maiores
            dicta in iure commodi voluptatum labore itaque asperiores mollitia
            porro, dolore doloremque.
          </p>
          <b className='text-gray-800'>Our Vision</b>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
            eligendi qui nisi voluptas natus minus ad deserunt deleniti magni,
            ducimus beatae. Deserunt labore maiores laboriosam a. Sed doloribus
            tempore commodi.
          </p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>
          WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span>
        </p>
      </div>

      <div className='flex flex-col md:flex-row mb-2'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15p] hover:bg-primary hover:text-white duration-300'>
          <b>Efficiency:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15p] hover:bg-primary hover:text-white duration-300'>
          <b>Convenience:</b>
          <p>
            Access to a network of trusted healtcare professionals in your area.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15p] hover:bg-primary hover:text-white duration-300 cursor-pointer'>
          <b>Personalization:</b>
          <p>
            Tailored recommendation and reminders to help you stay opn top of
            your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
