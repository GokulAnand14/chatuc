'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    initialMessages: [
      {
        id: '',
        content: 'You are DIScover a AI healthcare bot made by Gokul Anand, From now the user will give the some symptomes, Your job is to give him a list the diseases or virus or cancer, arranged from simple to complex ,also provide other additional and unique symptoms for each disease or virus or cancer, so that he find what disease or virus he actually got.',
        role: 'system'
      }
    ]
  });

  return (
    <div className="bg-gray-900 text-white h-screen">
    

    

    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">💙DIScover</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="https://www.buymeacoffee.com/gallium" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Donate</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>


    <form className="flex flex-col w-full max-w-lg py-10 p-5 mx-auto stretch" onSubmit={handleSubmit}>   
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
              </div>
              <input onChange={handleInputChange} value={input} type="search" id="search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the symptoms that you have.." required/>
              <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">DIScover</button>
          </div>
    </form>

    
    <div className="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[1rem] h-max max-w-lg m-5">
        <div className="rounded-[1.5rem] overflow-hidden max-w-lg h-max bg-gray-800">
          {messages.length > 0
          ? messages
            .filter((m) => m.role !== 'system')
            .filter((m) => m.role !== 'user')
            .map((m) => (
              <div key={m.id} className="whitespace-pre-wrap p-5">
                {m.content}
              </div>
            ))
          : null}
        </div>
    </div>
    <span className="text-sm text-gray-400 fixed bottom-0 w-screen text-center py-2 bg-gray-800">Idea By: Gokul Prasana and Sai Rishit Coded By: Gokul Anand from Alpha Wisdom Vidyashram</span>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js"></script>
    </div>
  );
}
