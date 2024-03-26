
export const ClearSubstrings = (value: string, substrings: string[]) => {
  let newValue = value;
  substrings.forEach((sub) => {
    newValue = newValue.replace(sub, '')
  })
  return newValue;
}