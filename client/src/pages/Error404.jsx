import React from 'react'
import { Link } from 'react-router'

function Error404() {
  return (
    <section className="flex items-center h-screen !bg-[#111827] sm:p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">Axtarış üzrə nəticə tapılmadı.</p>
          <br />
          <Link to={"/"} rel="noopener noreferrer"  className="inline-block p-[32px] font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Ana səhifəyə geri qayıdın!</Link>
        </div>
      </div>
    </section>
  )
}

export default Error404