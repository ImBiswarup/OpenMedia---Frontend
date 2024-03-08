import React from 'react'

const Sidebar = () => {
    return (
        <div className='w-[25%] sticky'>
            <section class="text-gray-400 bg-gray-900 body-font">
                <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-full" alt="hero" src="https://dummyimage.com/720x600" />
                    <div class="text-center lg:w-2/3 w-full">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">UserName</h1>
                        <p class="leading-relaxed mb-8">Profile desc.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button class="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sidebar