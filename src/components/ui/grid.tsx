import * as React from "react"

import { Button } from "@/components/ui/button"

export default function BentoGrid() {
  return (
<div className="container mx-auto my-16 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-3 space-x-8">
        <a className="col-span-1 row-span-2 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group" href="#">
          
          <div className="flex h-full group-hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              alt="Could be an image"
              className="object-cover w-full"
              height={360}
              src="/placeholder.svg"
              style={{
                aspectRatio: "480/360",
                objectFit: "cover",
              }}
              width={480}
            />
          </div>
        </a>
        <div className="col-span-2 grid grid-cols-2 gap-10">
        <a 
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-10 flex flex-col items-center justify-between group hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 space-y-12"
          href="/src/pages/Community"
        >
          <div className="text-center space-y-10">
            <h3 className="text-3xl font-semibold">Community</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Learn more about our society and community.</p>
          </div>
            <Button className="group-hover:bg-gray-900 group-hover:text-gray-50 transition-colors duration-300">
              Learn More
            </Button>
        </a>
        <a
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-10 flex flex-col items-center justify-between group hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 space-y-12"
          href="/src/pages/Opportunities">
          <div className="text-center space-y-10">
            <h3 className="text-3xl font-semibold">Opportunities</h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">Find local opportunties in the computer science space.</p>
          </div>
            <Button className="group-hover:bg-gray-900 group-hover:text-gray-50 transition-colors duration-300">
              Check them out
            </Button>

        </a>
        <a className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 space-y-12" href="/src/pages/Projects">
          <div className="flex h-full items-center justify-center p-10">
            <div className="text-center space-y-10">
              <h4 className="text-3xl font-semibold">Projects</h4>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors duration-300">
              Learn about student projects and maybe join them.
              </p>
              <Button className="group-hover:bg-gray-900 group-hover:text-gray-50 transition-colors duration-300">
                Projects here
              </Button>
            </div>
          </div>
        </a>
        <a className="bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden group hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 space-y-12" href="/src/pages/About">
          <div className="flex h-full items-center justify-center p-6  space-y-12">
            <div className="text-center space-y-10">
              <h4 className="text-3xl font-semibold">About Us</h4>
              <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-50 transition-colors duration-300">
                Administrators and founders..
              </p>
              <Button className="group-hover:bg-gray-900 group-hover:text-gray-50 transition-colors duration-300">
                Learn more
              </Button>
            </div>
          </div>
        </a>
      </div>
    </div>
    </div>
    )
    }