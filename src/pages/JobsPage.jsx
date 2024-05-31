import React from 'react'
import JobListings from '../components/JobListings'

const JobsPage = () => {
  return (
    <section className='bg-blue-100  px-4 py-6 text-center'> 
      <JobListings isHome={false} />
    </section>
  )
}

export default JobsPage