import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-[calc(100vh-58px)] h-[calc(100vh-58px)]'>
      <div className="container flex justify-center items-center h-full">
        <div className='form-div shadow shadow-[#00000071] p-5 rounded-sm max-w-[400px] w-full'>
          <h2 className='text-center text-2xl font-medium font-rubik mb-3'>Get in touch with ClickCart</h2>
          <form action="" className='space-y-4'>
            <div>
              <label htmlFor="name">Your Name</label>
              <input className='px-3 py-1 w-full rounded-sm shadow shadow-[#00000071]' type="text" placeholder='Name' />
            </div>
             <div>
              <label htmlFor="name">Your Email</label>
              <input className='px-3 py-1 w-full rounded-sm shadow shadow-[#00000071]' type="email" placeholder='eamail' />
            </div>

              <div>
              <label htmlFor="name">Your Message</label>
              <textarea className='px-3 py-1 w-full rounded-sm resize-none shadow shadow-[#00000071]' type="email" placeholder='eamail' />
            </div>
            <button className="bg-gradient-to-r from-btnColor to-btnRight text-white px-3 py-1 rounded-sm w-full ">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact