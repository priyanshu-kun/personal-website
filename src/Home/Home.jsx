import React, {Suspense, lazy} from 'react'
import Header from '../Components/Header/Header.jsx'
import Technologies from '../Components/Technologies/Technologies.jsx'
import ScrollToBtn from '../Components/ScrollTopBtn/ScrollToBtn.jsx'
const Work = lazy(() => import('../Components/Work/Work.jsx'))
const Form = lazy(() => import('../Components/Form/Form.jsx'))
const Footer = lazy(() => import('../Components/Footer/Footer.jsx'))


 export default function Home({trigger, nav, setNav}) {
    return (
      <>
        <Header trigger={trigger} nav={nav} setNav={setNav}  /> 
        <Technologies />
        <Suspense fallback={<div>Loading...</div>} >
            <Work />
            <Form />
            <Footer /> 
        </Suspense>
        <ScrollToBtn />
      </>
    )
}
