export const calculateProportions = (width, height, blockWidthOnScreen) => {
  const widthInOnePersent = width / 100 // 100%
  const heightInPersent = height / widthInOnePersent
  const pixelsInOnePersent = blockWidthOnScreen / 100 // 100%
  return pixelsInOnePersent * heightInPersent
}

export const calculateItemDisplaySize=(width, height, blockWidthOnScreen)=>{

}