import React from 'react'
import ComponentLayout from '../shared/ComponentLayout'
import smallBg from '../../assets/contact-bg.png'
import contactLogo from '../../assets/contact-logo2.png'
import SectionLogo from '../shared/SectionLogo'
import SectionTitle from '../shared/SectionTitle'
import Form from './form/Form'

const bg = ''

const Contact = () => {
  return (
    <>
      <SectionLogo image={contactLogo} />
      <SectionTitle title={'Contact Us'} />
      <Form />
    </>
  )
}

export default ComponentLayout({ bg })(Contact)
