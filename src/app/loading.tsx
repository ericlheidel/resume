"use client"

import { useEffect, useState } from "react"
import { AiOutlineLoading3Quarters } from "react-icons/ai" // react-icons
import { HiArrowPath } from "react-icons/hi2"

export default function Loading() {
  const [showAltIcon, setShowAltIcon] = useState(false)

  // Switch icons for extra flair
  useEffect(() => {
    const interval = setInterval(() => {
      setShowAltIcon((prev) => !prev)
    }, 2000) // Switch every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center space-x-3">
        <div
          className="animate-spin text-[#1BFFFF]"
          style={{ fontSize: "3rem" }}
        >
          {showAltIcon ? (
            <HiArrowPath className="h-12 w-12 text-[#1BFFFF]" />
          ) : (
            <AiOutlineLoading3Quarters />
          )}
        </div>
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    </div>
  )
}
