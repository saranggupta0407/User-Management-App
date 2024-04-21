import { pool } from "@/utils/dbConnect"
import dbConnect from "@/utils/dbConnect"
import { redirect } from "next/navigation";
import Link from "next/link";
 
// ...

export default async function Page() {
    dbConnect()
    const data = await pool.query("SELECT * FROM users")
    const result = data.rows
    return (
    result.map((element) => {

    
  return (
                <div key={element.id} class="flex flex-col h-screen bg-gray-100">

            <div class="bg-white text-white shadow w-full p-2 flex items-center justify-between">
                <div class="flex items-center">
                    <div class="flex items-center">
                        <h2 class="font-bold text-xl">User Management Application</h2>
                    </div>
                    <div class="md:hidden flex items-center">
                        <button id="menuBtn">
                            <i class="fas fa-bars text-gray-500 text-lg"></i>
                        </button>
                    </div>
                </div>

                <div class="space-x-5">
                    <button>
                        <i class="fas fa-bell text-gray-500 text-lg"></i>
                    </button>

                    <button>
                        <i class="fas fa-user text-gray-500 text-lg"></i>
                    </button>
                </div>
            </div>


            <div class="flex-1 flex flex-wrap">

                <div class="p-2 bg-white w-full md:w-60 flex flex-col md:flex hidden" id="sideNav">
                    <header class= "text-gray-900 text-center font-bold">U-Manager</header>
                    <nav>
                        <Link class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white underline-darkblue" href="#">
                            <i class="fas fa-users mr-2"></i>User Info
                        </Link>
                        <Link class="block text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white underline-darkblue" href="#">
                            <i class="fas fa-store mr-2"></i>Tenant Info
                        </Link>
                    </nav>

                    <Link class="block text-gray-500 py-2.5 px-4 my-2 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white mt-auto" href="/">
                        <i class="fas fa-sign-out-alt mr-2"></i>Logout
                    </Link>

                    <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mt-2"></div>

                </div>


                <div class="flex-1 p-4 w-full md:w-1/2">

                    <div class="relative max-w-md w-full">
                        <div class="absolute top-1 left-2 inline-flex items-center p-2">
                            <i class="fas fa-search text-gray-400"></i>
                        </div>
                        <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search..." />
                    </div>


                    <div class="mt-8 bg-white p-4 shadow rounded-lg">
                        <h2 class="text-gray-500 text-lg font-semibold pb-4">User Info</h2>
                        <div class="my-1"></div>
                        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                        <table class="w-full table-auto text-sm">
                            <thead>
                                <tr class="text-sm leading-normal">
                                    <td class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm dark:text-gray-700 border-b border-grey-light">User ID</td>
                                    <td class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm dark:text-gray-700 border-b border-grey-light">Email Address</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-grey-lighter">
                                        <td class="py-2 px-4 border-b dark:text-gray-700 border-grey-light text-center">{element.id}</td>
                                        <td class="py-2 px-4 border-b dark:text-gray-700 border-grey-light text-center">{element.email}</td>
                                    </tr>
                            </tbody>
                            <thead>
                                <tr class="text-sm leading-normal">
                                    <td class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm dark:text-gray-700 border-b border-grey-light">First Name</td>
                                    <td class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm dark:text-gray-700 border-b border-grey-light">Last Name</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-grey-lighter">
                                        <td class="py-2 px-4 border-b dark:text-gray-700 border-grey-light text-center">{element.fname}</td>
                                        <td class="py-2 px-4 border-b dark:text-gray-700 border-grey-light text-center">{element.lname}</td>
                                    </tr>
                            </tbody>
                        </table>
                    </div>


                    <div class="mt-8 bg-white p-4 shadow rounded-lg">
                        <h2 class="text-gray-500 text-lg font-semibold pb-4">Tenant Info</h2>
                        <div class="my-1"></div>
                        <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div>
                        <table class="w-full table-auto text-sm">
                            <thead>
                                <tr class="text-sm leading-normal">
                                    <td class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm dark:text-gray-700 border-b border-grey-light">Tenant ID</td>
                                    <td class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm dark:text-gray-700 border-b border-grey-light">Tenant Name</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="hover:bg-grey-lighter">
                                        <td class="py-2 px-4 border-b dark:text-gray-700 border-grey-light text-center">SDE05</td>
                                        <td class="py-2 px-4 border-b dark:text-gray-700 border-grey-light text-center">ContactWise</td>
                                </tr>
                            </tbody>
                            <thead>
                                <tr>
                                <td class="py-2 px-4 bg-grey-lightest font-bold uppercase text-sm dark:text-gray-700 border-b border-grey-light">Role</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td class="py-2 px-4 border-b dark:text-gray-700 border-grey-light text-center">Software Develper-II</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        
        ) 
        
            
            const menuBtn = document.getElementById('menuBtn');
            const sideNav = document.getElementById('sideNav');
   
            menuBtn.addEventListener('click', () => {
                sideNav.classList.toggle('hidden')});



           
        
  
}))
}
