import React from 'react'
import lamb from '../../../assets/lamb-100.png'
import details from './details'
import signature from '../../../assets/signature.png'
import DetailItem from './DetailItem'
import SectionTitle from '../../shared/SectionTitle'
import SectionLogo from '../../shared/SectionLogo'

const Details = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <SectionLogo image={lamb} />
      <SectionTitle title={"Welcome"} />
      <ul className='mt-[100px] md:flex'>
        {details.map(detail => (
          <DetailItem title={detail.title} description={detail.description} />
        ))}
      </ul>
      <img src={signature} alt="signature" className="my-[60px] md:w-[150px]" />
    </div>
  )
}

export default Details
