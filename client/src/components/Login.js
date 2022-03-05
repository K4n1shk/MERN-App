import React from 'react'
import { LockClosedIcon } from '@heroicons/react/solid'
import { NavLink } from 'react-router-dom'
const Login = () => {
  return (
    <div>
      <div className="mt-10 bg-white min-h-full py-12 px-4 sm:px-6 lg:px-8 md:w-2/4 sm:w-full 2xl:w-1/4 mx-auto rounded-lg shadow-lg hover:shadow-md">
        <div className="mx-auto max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Sign In</h2>
          </div>
          <form className="mt-12 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px ">
              <div className='mb-4'>
                <div class="text-sm font-bold text-gray-700 tracking-wide mb-1 ml-1">Email Address</div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide mb-1 ml-1">Password</div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#14c871] focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <NavLink to={"#"} className="font-medium text-[#14c871] hover:text-[#14c871]">
                  Forgot your password?
                </NavLink>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#14c871] hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-green-200 group-hover:text-green-800" aria-hidden="true" />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
            Don't have an account ? <a class="cursor-pointer text-green-600 hover:text-indigo-800">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login


