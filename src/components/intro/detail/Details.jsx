import React from 'react'
import ComponentLayout from '../../shared/ComponentLayout'
import lamb from '../../../assets/lamb-100.png'
import detail from './detail'
import signature from '../../../assets/signature.png'
import SectionItem from '../../shared/SectionItem'
import SectionTitle from '../../shared/SectionTitle'
import SectionLogo from '../../shared/SectionLogo'

const Details = () => {
  return (
    <>
      <SectionLogo image={lamb} />
      <SectionTitle title={'Welcome'} />
      <ul className='mt-[100px] md:flex md:px-[50px]'>
        {detail.map(detail => (
          <SectionItem key={detail.title+detail.id} title={detail.title} description={detail.description} />
        ))}
      </ul>
      <img src={signature} alt='signature' className='my-[60px] md:w-[150px]' />
    </>
  )
}

export default ComponentLayout()(Details)
