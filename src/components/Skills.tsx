import React from 'react'
import Image from 'next/image';

const Skills = () => {
  return (
    <div id='skills' className='container pt-32 '>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:text-5xl'>Technologies I work with</h2>
          <p className='text-gray-500 pt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel dolore laboriosam modi adipisci, aliquam fuga porro quidem minus, quibusdam suscipit error accusamus consequuntur atque, praesentium voluptatem quisquam asperiores tenetur.
          Voluptatum molestias velit, esse dignissimos ad perspiciatis pariatur nisi dolorem id aliquam, suscipit asperiores porro aperiam. Odio enim non expedita, deserunt commodi id alias dolorem eligendi quos sapiente, quibusdam amet!</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-pink-600 text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">HTML</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">JavaScript</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">TypeScript</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
              <h2 data-aos="zoom-in-up">Tailwind CSS</h2>
            </div>

          </div>
        </div>

      </div>
   </div>
    
  )
}

export default Skills;