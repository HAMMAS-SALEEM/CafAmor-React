import React, { useState } from 'react'
import SectionLogo from '../shared/SectionLogo'
import menu from '../../assets/menu-logo.png'
import bg from '../../assets/menu-bg.jpg'
import SectionTitle from '../shared/SectionTitle'
import ComponentLayout from '../shared/ComponentLayout'
import detail, { buttons } from './detail/detail'

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
            <button
              type='button'
              className={`text-white font-bold text-lg ${
                btn.name === mealType ? 'text-goldBtn' : 'text-white'
              } hover:text-goldBtn transition-all duration-300`}
              onClick={handleMealType}
            >
              {btn.name}
            </button>
          </li>
        ))}
      </ul>
      <ul className='z-10'>
        {detail
          .filter(meal => {
            if (meal.mealType === mealType) {
              return meal
            }
            return ''
          })
          .map(meal => {
            return (
              <li key={meal.title} className='flex'>
                <h3 className='text-[20px] font-bold mt-[10px] text-white'>
                  {meal.title}
                </h3>
                <h3 className='text-[20px] font-bold mt-[10px] text-white'>
                  {meal.price}
                </h3>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default ComponentLayout({ bg })(Menu)
