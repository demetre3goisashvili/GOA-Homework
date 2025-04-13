import React from 'react';

const Signin = () => {
  return (
    <div className='flex justify-center pt-20'>
      <div className="h-180 w-100 bg-orange-100 border text-center">
        <form className="pt-10">
          <label className="text-3xl font-sans" htmlFor="name">Name</label><br /><br />
          <input className="border h-13 pl-5 text-2xl" id="name" type="text" placeholder="Name" /><br /><br />
          <label className="text-3xl font-sans" htmlFor="email">Email</label><br /><br />
          <input className="border h-13 pl-5 text-2xl" id="email" type="email" placeholder="Email" /><br /><br />
          <label className="text-3xl font-sans" htmlFor="pass">Password</label><br /><br />
          <input className="border h-13 pl-5 text-2xl" id="pass" type="password" placeholder="Password" /><br /><br />
          <input className="h-13 w-73 border bg-orange-500 cursor-pointer" id="sub" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Signin;

