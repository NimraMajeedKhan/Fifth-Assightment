import React from 'react'
import Heading from '@/components/Heading'
import Card from '@/components/Card'


const data =[
    {
        id:0,
        title:"Coffee Shop",
        img:"/project-1.PNG",
        tags:["HTML","CSS"],
    },
    {
        id:1,
        title:"FreshFood Website",
        img:"/project-2.PNG",
        tags:["HTML","CSS"],
    },
    {
        id:2,
        title:"Rock Paper Scissors",
        img:"/project-3.PNG",
        tags:["HTML","CSS","JavaScript"],
    }, 
    {
        id:3,
        title:"Amazon website",
        img:"/project-4.PNG",
        tags:["HTML","CSS"],
    }, 
    {
        id:4,
        title:"Countdown Timer",
        img:"/project-5.PNG",
        tags:["React","Node","CSS","TypeScript"]
    }, 
    {
        id:5,
        title:"Todo List",
        img:"/project-6.PNG",
        tags:["React","Node","CSS","TypeScript"]
    }

]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
    <Heading title='My Projects' />
    <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center pb-4'>
        {data.map((el)=>(<Card 
        key={el.id}
        title={el.title}
        img={el.img}
        tags={el.tags}
        
        />))}
    </div>
    

    </div>
  )
}

export default Projects;