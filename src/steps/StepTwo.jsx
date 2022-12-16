const StepTwo = ({ goToNext }) => {
  const handleNext = () => {
    goToNext({ data2: 'add second data' })
  }
  return (
    <>
      <h1>Step Two</h1>
      <button onClick={handleNext}>Next</button>
    </>
  )
}

export default StepTwo
