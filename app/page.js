
import { pool } from "@/utils/dbConnect"
import dbConnect from "@/utils/dbConnect"
import { redirect } from "next/navigation";
import Link from "next/link";

export default function Home() {
  console.log("Inside Home")
  dbConnect()
  //const obj = await pool.query("SELECT * FROM users")
  //const result = obj.rows
  async function Login(data){
    "use server"
    console.log(data)
    let email = data.get("email")?.valueOf()
    let pass = data.get("password")?.valueOf()
    const obj = await pool.query("SELECT * FROM users WHERE email=($1)",[email])
    const result = obj.rows
    if(result.length>0)
    {
      redirect("/dashboard")
      }
    }
    
  return (
        
    <div class="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
            <div class="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
              <h1 class="text-2xl font-bold text-center mb-4 dark:text-gray-200">Login to U-Manager</h1>
              <form action={Login}>
                <div class="mb-4">
                  <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
                  <input type="email" name = 'email' id="email" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="your@email.com" required/>
                </div>
                <div class="mb-4">
                  <label for="password" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Password</label>
                  <input type="password" name = 'password' id="password" class="shadow-sm rounded-md dark:text-gray-700 w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required/>
                  <Link href="/reset"
                    class="text-xs text-gray-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Forgot
                    Password?</Link>
                </div>
                <div class="flex items-center justify-between mb-4">
                  <div class="flex items-center">
                    <input type="checkbox" id="remember" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:outline-none" checked/>
                    <label for="remember" class="ml-2 block text-sm text-gray-700 dark:text-gray-300">Remember me</label>
                  </div>
                  <Link href="/register"
                    class="text-xs text-indigo-500 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create
                    Account</Link>
                </div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Login</button>
              </form>
            </div>
          </div>
  )
}
