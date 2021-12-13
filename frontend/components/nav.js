import React from "react"
import Link from "next/link"
import { isCurrent } from "../lib/isCurrent"

const Nav = ({ categories }) => {
  return (
    <>
      <nav
        className="flex px-11 items-center justify-between flex-wrap py-4 fixed w-full z-10 top-0 text-lg"
        //x-data="{ isOpen: false }"
        //@keydown.escape="isOpen = false"
        //:class="{ 'shadow-lg bg-gray-200 dark:bg-grey-200' : isOpen , 'bg-gray-100 dark:bg-grey-100' : !isOpen}"
      >
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Link href="/">
            <a className="text-white no-underline hover:text-white hover:no-underline">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-pink-600 to-purple-600 text-5xl font-black motion-safe:animate-pulse">
                <i className="em em-grinning"></i> Wotta
              </span>
            </a>
          </Link>
        </div>

        <button
          type="button"
          className="block lg:hidden px-2 text-pink-600 hover:text-gray-600 focus:outline-none focus:text-gray-600"
          //@click="isOpen = !isOpen"
          //:class="{ 'transform-180': isOpen }"
        >
          <svg
            className="h-6 w-6 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              // x-show="isOpen"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              // x-show="!isOpen"
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto"
          //:class="{ 'block shadow-3xl': isOpen, 'hidden': !isOpen }"
          //@click.away="isOpen = false"
          //x-show.transition="true"
        >
          {/*  //href="{{ url }}" */}
          <ul className="pt-6 lg:pt-0 list-reset lg:flex justify-end flex-1 items-center">
            {categories.map((category) => {
              let current = isCurrent(`/category/${category.attributes.slug}`)
              return (
                <li className="mr-3" key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a
                      className={`inline-block py-2 px-4 no-underline text-xl ${
                        current
                          ? "text-pink-600 font-medium"
                          : "text-gray-600 hover:text-pink-600 hover:text-underline"
                      }`}
                    >
                      {category.attributes.name}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
