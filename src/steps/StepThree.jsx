const StepThree = ({ goToNext }) => {
    const handleNext = () => {
      goToNext({ data3: 'add third data' })
    }
    return (
      <>
        <h1>Step Three</h1>
        <button onClick={handleNext}>Next</button>
      </>
    )
  }

  export default StepThree
