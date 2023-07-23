"use client"
import React, { useRef, useState } from 'react'
import { MagnifyingGlassIcon, XMarkIcon} from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";


const Search = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const router = useRouter()
  const closeIcon = useRef(null)

  const handleSubmit = (e)=> {
    e.preventDefault()

    if(!searchTerm) return
    
    router.push("/search?q=" + searchTerm)
  }

  const handleChange = async (value)=> {
    setSearchTerm(value)

    if (value) {
      closeIcon.current.classList.remove("hidden")
      closeIcon.current.classList.add("flex")

    } else {
      closeIcon.current.classList.add("hidden")
    }
  }

  const clearInput  = ()=> {
    setSearchTerm("")
    closeIcon.current.classList.add("hidden")
  }

  return (
    <div className='relative w-full max-w-sm'>
      <form className="flex justify-between border shadow-md w-full rounded-xl overflow-hidden " onSubmit={handleSubmit}>
          <input className="focus:outline-none w-full py-2 ps-5 pe-4" type="text" placeholder="Search Recipe" onChange={e=> handleChange(e.target.value)} value={searchTerm} />
          <span ref={closeIcon} className='hidden justify-center items-center' onClick={clearInput}>
            <XMarkIcon className='w-8 pe-1 text-neutral-500 border-r  border-zinc-400 cursor-pointer shrink-0' />
          </span>
          <button className=' hover:bg-blue-500 group w-12 transition-colors duration-300 ease-out flex justify-center items-center shrink-0'>
            <MagnifyingGlassIcon className="w-6 group-hover:text-white" />
          </button>
        </form>
    </div>
    
  )
}

export default Search