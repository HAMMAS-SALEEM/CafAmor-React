import React from 'react'
import Chef from './Chef'
import bg from '../../assets/chef-bg.jpg'
import logo from '../../assets/beef-steak.png'
import ComponentLayout from '../shared/ComponentLayout'
import SectionLogo from '../shared/SectionLogo'
import SectionTitle from '../shared/SectionTitle'
import { chefs } from './detail'

const ChefContainer = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <SectionLogo image={logo} />
      <SectionTitle title={'Our Chefs'} />
      <ul className="flex flex-wrap justify-center items-center gap-5 mb-[100px] z-30">
        {chefs.map(chef => (
          <Chef key={chef.name} chef={chef} />
        ))}
      </ul>
    </div>
  )
}

export default ComponentLayout({ bg })(ChefContainer)
