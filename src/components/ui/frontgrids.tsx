import * as React from "react"
import { useEffect, useRef } from "react";

export default function RevisedGrids() {
    const scrollRef = useRef(null);
    const contentRef = useRef(null); // Reference to the original content

    useEffect(() => {
        const scrollAmount = 1; // Adjust the scroll speed here
        let frameRequest;

        const scrollContent = () => {
            if (scrollRef.current && contentRef.current) {
                // Check if we've reached the end of the original content
                if (scrollRef.current.scrollLeft >= contentRef.current.clientWidth) {
                    // Reset scroll to the start
                    scrollRef.current.scrollLeft -= contentRef.current.clientWidth;
                } else {
                    // Normal scroll
                    scrollRef.current.scrollLeft += scrollAmount;
                }
            }
            frameRequest = requestAnimationFrame(scrollContent);
        };

        frameRequest = requestAnimationFrame(scrollContent);

        return () => cancelAnimationFrame(frameRequest); // Clear requestAnimationFrame on component unmount
    }, []);

    // Create a function to render the grid items
    const renderGridItems = () => (
        [...Array(10)].map((_, index) => (
            <div key={index} className="min-w-[200px] min-h-[200px] rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-500 ease-in-out hover:scale-[1.01] hover:shadow-lg hover:bg-gray-900/90 flex-none border border-gradient-to-r from-indigo-500 to-purple-500 p-[1px]">
                {/* Content of the grid item */}
                <h2 className="text-xl font-bold mb-2">Item {index + 1}</h2>
            </div>
        ))
    );


        
    return (
        <div className="container mx-auto sm:px-6 lg:px-0">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-2 px-4 py-4 md:px-0 md:py-2">
                <div className="grid grid-rows-2 gap-3 lg:px-2">
                    <div className="rounded-lg bg-[url('/placeholder.svg')] bg-cover bg-center transition-all duration-500 
                    ease-in-out hover:scale-[1.01] hover:shadow-lg hover:bg-gray-200/90 border border-gradient-to-r from-indigo-500 to-purple-500 p-[1px]" />
                    <div className="rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-500 ease-in-out hover:scale-[1.01] 
                    hover:shadow-lg hover:bg-gray-200/90 flex flex-col justify-center items-center border border-gradient-to-r from-indigo-500 to-purple-500 p-[1px]">
                        <h2 className="text-5xl font-bold mb-2">ECSS</h2>
                    </div>
                </div>
                <div className="grid col-span-2 grid-cols-2 md:grid-cols-2 gap-3">
                    <div className="rounded-lg bg-gradient-to-r from-indigo-500800 transition-all duration-500 ease-in-out hover:scale-[1.01] 
                    hover:shadow-lg hover:bg-gray-200/90 border border-gradient-to-r from-indigo-500 to-purple-500 p-[1px]" />
                    <div className="col-span-2 row-span-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 p-4 flex flex-col 
                    justify-center items-center text-white h-[400px] transition-all duration-500 ease-in-out hover:scale-[1.01] hover:shadow-lg">
                        <h2 className="text-7xl font-extrabold mb-10 w-full text-center">ELITE CS</h2>
                        <h2 className="text-8xl font-extrabold mb-5 w-full text-center">SOCIETY</h2>
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-indigo-500800 transition-all duration-500 ease-in-out hover:scale-[1.01] 
                    hover:shadow-lg hover:bg-gray-200/90 border border-gradient-to-r from-indigo-500 to-purple-500 p-[1px]" />
                </div>
                <div className="grid grid-rows-2 gap-3 lg:px-2">
                    <div className="rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-500 ease-in-out hover:scale-[1.01] 
                    hover:shadow-lg hover:bg-gray-200/90 flex flex-col justify-center items-center border border-gradient-to-r from-indigo-500 to-purple-500 p-[1px]">
                        <h2 className="text-5xl font-bold mb-2">200+</h2>
                        <h3 className="text-2xl">Students</h3>
                    </div>
                    <div className="rounded-lg bg-gray-100 dark:bg-gray-800 transition-all duration-500 ease-in-out hover:scale-[1.01] 
                    hover:shadow-lg hover:bg-gray-200/90 flex flex-col justify-center items-center border border-gradient-to-r from-indigo-500 to-purple-500 p-[1px]">
                        <h2 className="text-5xl font-bold mb-2">200+</h2>
                        <h3 className="text-2xl">Partners</h3>
                    </div>
                </div>
            </div>
            <div ref={scrollRef} className="flex overflow-x-auto py-4 space-x-4 px-4 md:px-0">
                {/* Original content */}
                <div ref={contentRef} className="flex space-x-4">
                    {renderGridItems()}
                </div>
                {/* Duplicated content */}
                <div className="flex space-x-4">
                    {renderGridItems()}
                </div>
            </div>
        </div>
    )
}