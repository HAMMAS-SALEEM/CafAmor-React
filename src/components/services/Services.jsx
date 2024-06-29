import React from 'react'
import ComponentLayout from '../shared/ComponentLayout'
import SectionTitle from '../shared/SectionTitle'
import SectionLogo from '../shared/SectionLogo'
import serviceLogo from '../../assets/foodtray.png'
import detail from './detail/detail'
import SectionItem from '../shared/SectionItem'
import SectionItemLogo from '../shared/SectionItemLogo'

const bg = ''

const Services = () => {
  return (
    <>
      <SectionLogo image={serviceLogo} />
      <SectionTitle title={'Our Services'} />
      <ul className='my-[100px] md:grid md:grid-cols-2 md:px-[50px] lg:grid-cols-4'>
        {detail.map(detail => (
          <li key={detail.title + detail.id}>
            <SectionItemLogo image={detail.image} />
            <ul>
              <SectionItem
                title={detail.title}
                description={detail.description}
              />
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ComponentLayout({bg})(Services)
