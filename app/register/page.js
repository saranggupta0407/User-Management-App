import { pool } from "@/utils/dbConnect"
import dbConnect from "@/utils/dbConnect"
import { redirect } from "next/navigation";
import Link from "next/link";
export default function Page() {
        dbConnect()
        //CREATE
        async function createUser(data){
          "use server"
          let email = data.get("email")?.valueOf()
          let pass = data.get("password")?.valueOf()
          let fName = data.get("fName")?.valueOf()
          let lName = data.get("lName")?.valueOf()
          try{
            const newUser = await pool.query('INSERT INTO users (email, password,fname,lname) VALUES ($1, $2, $3, $4) RETURNING *', [email, pass,fName,lName])
            console.log(newUser.rows[0])
          }
          catch(err){
            console.log(err)
          }
          redirect('/')
        }
    return (
            <div class="max-w-lg mx-auto  bg-white dark:bg-gray-800 rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
                <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Welcome to U-Manager</h1>
                <form action={createUser} class="w-full flex flex-col gap-4">
                <div class="flex items-start flex-col justify-start">
                    <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">First Name</label>
                    <input type="text" id="fName" name="fName" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div class="flex items-start flex-col justify-start">
                    <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Last Name</label>
                    <input type="text" id="lName" name="lName" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div class="flex items-start flex-col justify-start">
                    <label for="username" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Username</label>
                    <input type="text" id="username" name="username" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div class="flex items-start flex-col justify-start">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input type="email" id="email" name="email" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div class="flex items-start flex-col justify-start">
                    <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                    <input type="password" id="password" name="password" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <div class="flex items-start flex-col justify-start">
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
                </div>

                <button type="submit" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm">Register</button>
                

                <div class="mt-4 text-center">
                <span class="text-sm text-gray-500 dark:text-gray-300">Already have an account? </span>
                <Link href="/" class="text-blue-500 hover:text-blue-600">Login</Link>
                </div>
                </form>
            </div>
       )
  }