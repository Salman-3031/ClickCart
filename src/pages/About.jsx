import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
      <div className="container py-5 space-y-2">
        <h1 className='text-2xl font-semibold font-rubik text-center'>About ClickCart</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum hic laborum rem natus soluta quam, eaque alias sunt neque a sit laudantium beatae debitis blanditiis quidem voluptas, cum quis odit. Quae, neq enim assumenda. Harum, illum numquam!</p>

        <h2 className='text-btnColor text-xl font-semibold'>Our Mission</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque necessitatibus id velit facere molestiae non culpa, consequuntur quidem fugiat nesciunt! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus optio est vitae nostrum a velit sequi voluptatum sapiente dolore quaerat veniam vel obcaecati assumenda id similique reiciendis placeat atque, blanditiis repellat. Sunt explicabo, nihil consequatur ratione deleniti quae molestiae delectus obcaecati in officia recusandae ipsa libero, architecto dolorum at unde incidunt laudantium necessitatibus enim excepturi.</p>

        <h2 className='text-btnColor text-xl font-semibold'>Why choose ClickCart?</h2>
        <ul className='list-inside list-disc'>
          <li>Lorem ipsum doltur adipisicing elit. Impedit, nobis?</li>
          <li>Lorem ipsum dolor si Lorem ipsum dolor sit amet. adipisicing elit. Impedit, nobis?</li>
          <li>Lorem ipsum dolor sit amet consectetur ad Impedit, nobis?</li>
        </ul>

        <h2 className='text-btnColor text-xl font-semibold'>Our Vision</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque necessitatibus id velit facere molestiae non culpa, consequuntur Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis, beatae quidem nesciunt distinctio optio dolorem suscipit autem quis quod! quidem fugiat nesciunt!</p>

        <h2 className='text-btnColor text-xl font-semibold text-center !-mb-2'>Join the ClickCart Family</h2>
        <p className='text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque necessitatibus id velit facere molestiae non culpa, consequuntur quidem fugiat nesciunt!</p>
        <div className='text-center'>
         <Link to={'/product'}> <button className='bg-btnColor px-3 py-1 rounded-sm text-white '>start Shoping</button></Link>
        </div>
      </div>
    </div>
  )
}

export default About