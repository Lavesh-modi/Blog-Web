// components/Navbar.js
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-chich">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="https://flowbite.com/">
          <img src="/img1.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
            Blogger
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:bg-black"
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-chich md:dark:bg-chich dark:bg-chich">
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:dark:text-black"
                aria-current="page"
              >
                Our story
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent  md:text-black md:dark:text-black"
                aria-current="page"
              >
                Membership
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent  md:text-black md:dark:text-black"
                aria-current="page"
              >
                Write
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-black md:dark:text-black"
                aria-current="page"
              >
                Sign In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
