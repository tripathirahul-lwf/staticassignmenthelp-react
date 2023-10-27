import React from 'react'
import './App.css'
import Header from './component/header/Header'
import Services from './component/services/Services'
import Step from './component/steps/Step'
import Review from './component/review/Review'
import Faq from './component/faq/Faq'
import Footer from './component/footer/Footer'
import Cta from './component/cta/Cta'
import Content from './component/content/Content'
import Trusted from './component/trusted/Trusted'

const App = () => {
  return (
    <>
      <Header />
      <Trusted />
      <Step />
      <Services />
      <Content />
      <Cta />
      <Review />
      <Faq />
      <Footer />
    </>
  )
}

export default App
