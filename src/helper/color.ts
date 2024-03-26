export const rgbToHex = (r: number, g: number, b: number) => {
  const toHex = (component: number) => {
    const hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return '#' + toHex(r) + toHex(g) + toHex(b);
}
