/**
 * v0 by Vercel.
 * @see https://v0.dev/t/CILi7LoDbXy
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg w-full max-w-2xl p-8">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-40 h-40 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
              <img alt="Profile" className="w-full h-full object-cover" src="/placeholder.svg" />
            </div>
            <button className="absolute bottom-0 left-0 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-full w-10 h-10 flex items-center justify-center">
              <PencilIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-8 text-center">
            <h2 className="text-3xl font-bold">John Doe</h2>
            <button className="mt-4 bg-gray-900 dark:bg-gray-50 text-white dark:text-gray-900 rounded-full px-6 py-2 text-sm font-medium">
              Edit
            </button>
          </div>
          <div className="mt-8 w-full">
            <div className="flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Points</span>
              <span className="font-bold text-lg">1,000</span>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Notifications</span>
              <Switch />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Logout</span>
              <Button size="icon" variant="ghost">
                <LogOutIcon className="w-6 h-6" />
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-gray-500 dark:text-gray-400 text-lg">Delete Account</span>
              <Button size="icon" variant="ghost">
                <TrashIcon className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function PencilIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
      <path d="m15 5 4 4" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}