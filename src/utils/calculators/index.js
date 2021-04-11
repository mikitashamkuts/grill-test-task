// get height of an element in proportion

export const calculateHeightInProportions = (
  width,
  height,
  blockWidthOnScreen
) => {
  const widthInOnePersent = width / 100 // 100%
  const heightInPersent = height / widthInOnePersent
  const pixelsInOnePersent = blockWidthOnScreen / 100 // 100%
  return pixelsInOnePersent * heightInPersent
}

// get proportions of an element

export const calculateItemProportions = (
  sizeOfItem,
  blockWidthOnScreen,
  widthOfGrill
) => {
  const onePersentOfWidthinPixels = blockWidthOnScreen / widthOfGrill
  const onePersent = widthOfGrill / 100 // 100%
  return (sizeOfItem / onePersent) * onePersent * onePersentOfWidthinPixels
}

// get offset of an element in proportion

export const calculateItemPositionInProportion = (
  position,
  widthOfContainer,
  widthOfGrill
) => {
  return position * (widthOfContainer / widthOfGrill)
}
