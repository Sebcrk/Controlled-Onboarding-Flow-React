import React from 'react'

function ControlledOnboardingFlow({
  children,
  currentIndex,
  onNext
}) {
  const goToNext = (stepData) => {
    onNext(stepData)
  }

  const currentChild = React.Children.toArray(children)[currentIndex]
  const isValidelement = React.isValidElement(currentChild)
  if (isValidelement) {
    return React.cloneElement(currentChild, { goToNext })
  }
}

export default ControlledOnboardingFlow
