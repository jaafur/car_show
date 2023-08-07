import Image from 'next/image'
import ShowMore from '@/components/ShowMore'
import CarCard from '@/components/CarCard'
import { fetchCars } from '@/utils'
import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import CustomFilter from '@/components/CustomFilter'
import { fuels, yearsOfProduction } from '@/constants'

export default async function Home({searchParams}) {

  const allCars = await fetchCars({
    manufacturer :searchParams.manufacturer || '',
    year : searchParams.year || 2022,
    fuel : searchParams.fuel || '',
    limit : searchParams.limit || 10 ,
    model : searchParams.model || ''
  })
  const isDataEmpty =!Array.isArray(allCars) || allCars.length <1 || !allCars
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='font-extrabold text-4xl'>Car Catalogue</h1>
          <p>Explore The Cars u Might Like </p>
        </div>
        <div className='home__filters'>
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilter title='fuel' options={fuels}/>
            <CustomFilter title='year'  options={yearsOfProduction}/>
          </div>
          {!isDataEmpty ? (
             <section>
              <div className='home__cars-wrapper'>
                {allCars?.map((car) => (
                  <CarCard car={car} />
                ))}
              </div>
              <ShowMore 
                pageNumber={(searchParams.limit || 10)/10}
                isNext = {(searchParams.limit ||10) >allCars.length }
              />
              </section>
          ):(
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops ,No Results</h2>
            <p>{allCars?.message}</p>
          </div>)
          }

        </div>
      </div>
    </main>
  )
}