import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ControlledOnboardingFlow from './ControlledOnboardingFlow'
import StepOne from './steps/StepOne'
import StepTwo from './steps/StepTwo'
import StepThree from './steps/StepThree'

function App() {
  const [onboardingData, setOnboardingData] = useState({})
  const [currentIndex, setCurrentIndex] = useState(0)

  const onNext = (stepData) => {
    const updatedData = { ...onboardingData, ...stepData }

    setOnboardingData(updatedData)
    setCurrentIndex((prevState) => prevState + 1)
  }

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ControlledOnboardingFlow onNext={onNext} currentIndex={currentIndex}>
        <StepOne />
        <StepTwo />
        <StepThree />
      </ControlledOnboardingFlow>
    </div>
  )
}

export default App
