/**
 * v0 by Vercel.
 * @see https://v0.dev/t/QLfGOI2zEZt
 */
import Link from "next/link"

export default function Component() {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 py-12 md:py-24 lg:py-32 bg-black dark:bg-white">
      <div className="flex flex-col items-center justify-center space-y-4">
        <img
          alt="Profile Picture"
          className="object-cover rounded-full"
          height="200"
          src="/placeholder.svg"
          style={{
            aspectRatio: "200/200",
            objectFit: "cover",
          }}
          width="200"
        />
        <h2 className="text-2xl font-bold text-white dark:text-black">Yunative</h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">Web Developer</p>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">San Francisco, CA</p>
        <div className="flex items-center space-x-4">
          <a aria-label="Twitter Link" href="#">
            <svg
              className=" text-zinc-500 dark:text-zinc-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a aria-label="LinkedIn Link" href="#">
            <svg
              className=" text-zinc-500 dark:text-zinc-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect height="12" width="4" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          <a aria-label="Github Link" href="#">
            <svg
              className=" text-zinc-500 dark:text-zinc-400"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-sm text-zinc-500 dark:text-zinc-400 mr-2">Switch to:</p>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input className="hidden" type="checkbox" />
              <div className="toggle__line w-10 h-4 bg-zinc-200 rounded-full shadow-inner" />
              <div className="toggle__dot absolute w-6 h-6 bg-white rounded-full shadow inset-y-0 left-0" />
            </div>
            <div className="ml-3 text-sm font-medium text-zinc-500 dark:text-zinc-400">
              <p className="text-sm">Music</p>
            </div>
          </label>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center space-y-4 mt-4 md:mt-0">
        <div className="hidden">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Guitar</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Drums</p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Piano</p>
        </div>
      </div>
      <div className="flex flex-col items-start space-y-4 mt-4 md:mt-0">
        <h3 className="text-xl font-bold mb-4 text-white dark:text-black">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="w-full rounded-lg shadow-md bg-white dark:bg-zinc-800 p-4">
            <Link className="text-sm text-zinc-500 dark:text-zinc-400 underline" href="#">
              Project 1
            </Link>
          </div>
          <div className="w-full rounded-lg shadow-md bg-white dark:bg-zinc-800 p-4">
            <Link className="text-sm text-zinc-500 dark:text-zinc-400 underline" href="#">
              Project 2
            </Link>
          </div>
          <div className="w-full rounded-lg shadow-md bg-white dark:bg-zinc-800 p-4">
            <Link className="text-sm text-zinc-500 dark:text-zinc-400 underline" href="#">
              Project 3
            </Link>
          </div>
        </div>
        <div className="hidden">
          <div className="w-full rounded-lg shadow-md bg-white dark:bg-zinc-800 p-4">
            <Link className="text-sm text-zinc-500 dark:text-zinc-400 underline" href="#">
              Album 1
            </Link>
          </div>
          <div className="w-full rounded-lg shadow-md bg-white dark:bg-zinc-800 p-4">
            <Link className="text-sm text-zinc-500 dark:text-zinc-400 underline" href="#">
              Album 2
            </Link>
          </div>
          <div className="w-full rounded-lg shadow-md bg-white dark:bg-zinc-800 p-4">
            <Link className="text-sm text-zinc-500 dark:text-zinc-400 underline" href="#">
              Album 3
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

