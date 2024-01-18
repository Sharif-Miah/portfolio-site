import React from 'react';

const SectiionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center'>
            <h1 className='text-[32px] lg:text-[40px] font-bold  uppercase text-white'>{heading}</h1>
            <p className='text-[#F3B90B] sm:text-[14px] lg:text-[16px] uppercase'>{subHeading}</p>
        </div>
    );
};

export default SectiionTitle;