import React from 'react'

function SecondSection() {
  return (
    <div className='second-section gradient-animation'>
      <div className='section-content'>
        <div className='section-text'>
          <h2 className='section-title'>Discover Latest Trends</h2>
          <p className='section-description'>Explore our curated collection of premium clothing and accessories designed to elevate your style.</p>
        </div>
        <div className='section-image1'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 1'
          />
        </div>
      </div>
      <div className='section-images'>
        <div className='section-card'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 2'
          />
          <div className='card-description'>
          <h3>Stylish Shirt</h3>
            <p>An essential addition to your wardrobe, this shirt combines comfort with timeless elegance.</p>
            <p>Price: $29.99</p>
          </div>
        </div>
        <div className='section-card'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 3'
          />
          <div className='card-description'>
          <h3>Elegant Dress</h3>
            <p>Make a statement at any occasion with this exquisite dress, crafted to perfection.</p>
            <p>Price: $59.99</p>
          </div>
        </div>
        <div className='section-card'>
          <img
            src='https://m.media-amazon.com/images/I/81B77MW5wQL._AC_SL1500_.jpg'
            alt='Image 4'
          />
          <div className='card-description'>
          <h3>Trendy Jeans</h3>
            <p>Elevate your casual look with these trendy jeans, designed for comfort and style.</p>
            <p>Price: $39.99</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
