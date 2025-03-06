import { useState } from "react"
export default function Button() {
    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)
  return (
    <button onClick={handleClick} className="w-fit h-fit bg-indigo-600 p-2 text-white rounded-lg font-semibold text-sm">
      Clicked {count} times
    </button>
  )
}
