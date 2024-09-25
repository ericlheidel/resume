import Image from "next/image"
import Link from "next/link"
import { FaHome } from "react-icons/fa"

export default function Resume() {
  return (
    <div>
      <div className="flex justify-center p-6 text-[#1BFFFF] text-3xl text-center font-semibold">
        <FaHome size={30} color="aqua" />
        <div className="ml-4">
          <Link href="https://www.eheidel.com">Home</Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Image
          src="/assets/Eric_Heidel_Resume_JPG_1.jpg"
          alt="Page Number 1 of Eric Heidel's Resume"
          width={1000}
          height={1000}
          priority
          unoptimized
        />
        <Image
          src="/assets/Eric_Heidel_Resume_JPG_2.jpg"
          alt="Page Number 2 of Eric Heidel's Resume"
          width={1000}
          height={1000}
          priority
          unoptimized
        />
      </div>
    </div>
  )
}
