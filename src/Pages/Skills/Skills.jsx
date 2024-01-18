import React from 'react';
import SectiionTitle from '../../Component/SectiionTitle/SectiionTitle';

const Skills = () => {
    return (
        <div className='my-10'>
            <SectiionTitle heading="Skills" subHeading="technology" />
            <div className='flex lg:justify-evenly my-10'>
                <div >
                    <h4 className='font-bold  underline text-2xl text-white my-6 mx-8'>Programming</h4>
                    <ul className='text-white mx-8 text-lg'>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SCSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <h4 className='font-bold underline text-2xl text-white my-6 mx-8'>Tools</h4>
                    <ul className='text-white mx-8 text-lg'>
                        <li>VS Code</li>
                        <li>Github</li>
                        <li>Postman</li>
                        <li>Figma</li>
                        <li>MS office</li>
                    </ul>
                </div>
                <div>
                <div>
                    <h4 className='font-bold underline text-2xl text-white my-6 mx-8'>Frameworks/Web</h4>
                    <ul className='text-white mx-8 text-lg'>
                        <li>ReactJS</li>
                        <li>NextJS</li>
                        <li>Bootstrap</li>
                        <li>Tailwind CSS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                    </ul>
                    <h4 className='font-bold underline text-2xl text-white my-6 mx-8 '>Database</h4>
                    <ul className='text-white mx-8 text-lg'>
                        <li>MongoDB</li>
                        
                    </ul>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;