import React from 'react'
import SecondSection from '../components/SecondSection'

function BrandPage() {
  return (
    <div>
      <div className='brand-container'>
        <div className='brand-info'>
          <h1 className='brand-name'>Fashion Haven</h1>
          <p className='brand-description'>
          Discover timeless elegance and modern sophistication with Fashion Haven. 
          </p>
          <button className='purchase-button'>Purchase Now</button>
        </div>
      </div>
     <SecondSection/>
    </div>
  )
}

export default BrandPage
