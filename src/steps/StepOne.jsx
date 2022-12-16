import React from 'react'

const StepOne = ({ goToNext }) => {
    const handleNext = () => {
      goToNext({ data1: 'add first data' })
    }
    return (
      <>
        <h1>Step One</h1>
        <button onClick={handleNext}>Next</button>
      </>
    )
  }

export default StepOne