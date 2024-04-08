import React from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Service", href: "/Service" },
  { name: "Stream", href: "/stream"},
  { name: "Team", href: "/Team" },
  { name: "Contact Us", href: "/ContactUs" },
  // { name: "Login", href: "/Login" }, // Added login button
];

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white-900 shadow-lg font-Ubuntu">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link to="/">
                  <div className="flex-shrink-0 text-black text-2xl ">
                    Streamy<strong className="text-indigo-600">Fy</strong>
                  </div>
                </Link>
              </div>

              <div className="flex sm:hidden">
                <Disclosure.Button className="text-black hover:bg-gray-300 hover:text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

              <div className="hidden sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      exact
                      to={item.href}
                      activeClassName="bg-gray-900 text-white"
                      className="text-black px-3 py-2 text-lg font-medium rounded-md   ext-3xl relative after:bg-indigo-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                  <Link
                    to="/Login"
                    class="relative inline-flex items-center px-10  overflow-hidden text-lg font-medium text-black  border-2 border-indigo-950 rounded-full hover:text-white group hover:bg-gray-50"
                  >
                    <span class="absolute left-0 block w-full h-0 transition-all bg-indigo-600 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>

                    <span class="relative">Login</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  exact
                  to={item.href}
                  activeClassName="bg-gray-900 text-white"
                  className="block px-3 py-2 text-base font-medium rounded-md text-black hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
