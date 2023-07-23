import React from 'react'
import Link from 'next/link'

const Favorites = () => {
  return (
    <div className='container mx-auto py-6 px-3 sm:px-5 sm:py-10 lg:px-10'>
      <h3 className='text-center text-2xl font-semibold mb-5 fade-down'>Favorite Meals</h3>

      <ul className='grid grid-cols-[repeat(auto-fit,_minmax(9rem,_1fr))] gap-4'>
        <li className='fade-in shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition-all' style={{'--order': "0"}}>
          <Link href="/search/53040">
            <div className='relative group'>
              <img  src="https://www.themealdb.com/images/media/meals/1c5oso1614347493.jpg" alt="Empanadas" />
              <div className='absolute top-0 left-0 h-full w-full bg-[#ff00008e] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out'>
                <span className='p-2 sm:p-3 border-2 rounded-full text-white'>View Recipe</span>
              </div>
            </div>
            <p className='px-5 py-2'>Empanadas</p>
          </Link>
        </li>

        <li className='fade-in shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all' style={{'--order': "1"}}>
          <Link href="/search/52844">
            <div className='group relative'>
              <img src="https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg" alt="Lasagna" />
              <div className='absolute top-0 left-0 h-full w-full bg-[#ff00008e] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out'>
                <span className='p-2 sm:p-3 border-2 rounded-full text-white'>View Recipe</span>
              </div>
            </div>
            <p className='px-5 py-2'>Lasagna</p>
          </Link>
        </li>

        <li className='fade-in shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all' style={{'--order': "2"}}>
          <Link href="/search/53063">
            <div className='relative group'>
              <img src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg" alt="Chivito Uruguayo" />
              <div className='absolute top-0 left-0 h-full w-full bg-[#ff00008e] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out'>
                <span className='p-2 sm:p-3 border-2 rounded-full text-white'>View Recipe</span>
              </div>
            </div>
            <p className='px-5 py-2'>Chivito Uruguayo</p>
          </Link>
        </li>

        <li className='fade-in shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all' style={{'--order': "3"}}>
          <Link href="/search/53014">
            <div className='relative group'>
              <img src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" alt="Pizza Express Margherita" />
              <div className='absolute top-0 left-0 h-full w-full bg-[#ff00008e] flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-500 ease-out'>
                <span className='p-2 sm:p-3 border-2 rounded-full text-white'>View Recipe</span>
              </div>
            </div>
            <p className='px-5 py-2'>Pizza Express Margherita</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Favorites