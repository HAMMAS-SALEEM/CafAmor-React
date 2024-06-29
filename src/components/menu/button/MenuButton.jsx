import React from 'react'

const MenuButton = ({ name, mealType, handleMealType }) => {
  return (
    <div>
      <button
        type='button'
        className={`font-bold text-lg ${
          name === mealType ? 'text-goldBtn' : 'text-white'
        } hover:text-goldBtn transition-all duration-300`}
        onClick={handleMealType}
      >
        {name}
      </button>
    </div>
  )
}

export default MenuButton
