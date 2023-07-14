import React from "react";
import { NavLink } from "react-router-dom";
import { isActiveStyles, isNotActiveStyles } from "../utils/style";
import Logo from "../assets/images/logo1.png";

const DbLeftSection = () => {
  return (
    <div>
      <div className='h-full py-8 flex flex-col bg-cardOverlay backdrop-blur-md shadow-md min-w-210 w-300 gap-3'>
        <NavLink
          to={"/"}
          className='flex items-center justify-start px-6 gap-4'
        >
          <img src={Logo} className='w-12' alt='' />
          <p className='font-semibold text-xl'>City</p>
        </NavLink>

        <hr />

        <ul className='flex flex-col gap-4'>
          <NavLink
            to={"/dashboard/home"}
            className={({ isActive }) =>
              isActive
                ? `${isActiveStyles} px-4 py-2 border-l-8  border-blue-500`
                : isNotActiveStyles
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/dashboard/orders"}
            className={({ isActive }) =>
              isActive
                ? `${isActiveStyles} px-4 py-2 border-l-8  border-blue-500`
                : isNotActiveStyles
            }
          >
            Orders
          </NavLink>
          <NavLink
            to={"/dashboard/items"}
            className={({ isActive }) =>
              isActive
                ? `${isActiveStyles} px-4 py-2 border-l-8  border-blue-500`
                : isNotActiveStyles
            }
          >
            Items
          </NavLink>
          <NavLink
            to={"/dashboard/newItem"}
            className={({ isActive }) =>
              isActive
                ? `${isActiveStyles} px-4 py-2 border-l-8  border-blue-500`
                : isNotActiveStyles
            }
          >
            Add New Item
          </NavLink>
          <NavLink
            to={"/dashboard/users"}
            className={({ isActive }) =>
              isActive
                ? `${isActiveStyles} px-4 py-2 border-l-8  border-blue-500`
                : isNotActiveStyles
            }
          >
            Users
          </NavLink>
        </ul>

        <div className='w-full items-center justify-center flex h-225 mt-auto px-2 '>
          <div className='w-full h-full rounded-md bg-[#4bb2f6] flex items-center justify-center flex-col gap-3 px-3'>
            <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
              <p className='text-2xl font-bold text-blue-500'>?</p>
            </div>
            <p className='text-xl text-primary font-semibold'>Help Center</p>
            <p className='text-base text-gray-500 text-center'>
              Having trouble in City. Please contact us for more questions
            </p>
            <p className='px-4 py-2 rounded-full bg-primary text-blue-600 cursor-pointer'>
              Get in touch
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DbLeftSection;
