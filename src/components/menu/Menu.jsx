import React, { useState } from 'react'
import SectionLogo from '../shared/SectionLogo'
import menu from '../../assets/menu-logo.png'
import bg from '../../assets/menu-bg.jpg'
import SectionTitle from '../shared/SectionTitle'
import ComponentLayout from '../shared/ComponentLayout'
import detail, { buttons } from './detail/detail'
import MenuButton from './button/MenuButton'
import MenuItem from './menuItem/MenuItem'

const Menu = () => {
  const [mealType, setMealType] = useState('Breakfast')

  const handleMealType = e => setMealType(e.target.innerHTML)

  return (
    <div className='flex flex-col justify-center items-center z-10'>
      <SectionLogo image={menu} />
      <SectionTitle title={'Our Menu'} overlay={true} />
      <ul className='flex z-10 gap-8 my-[50px]'>
        {buttons.map(btn => (
          <li key={btn.name}>
            <MenuButton
              name={btn.name}
              mealType={mealType}
              handleMealType={handleMealType}
            />
          </li>
        ))}
      </ul>
      <ul className='grid md:grid-cols-2 gap-x-[60px] z-10'>
        {detail
          .filter(meal => {
            if (meal.mealType === mealType) {
              return meal
            }
            return ''
          })
          .map(meal => {
            return (
              <MenuItem meal={meal} key={meal.title} />
            )
          })}
      </ul>
    </div>
  )
}

export default ComponentLayout({ bg })(Menu)
