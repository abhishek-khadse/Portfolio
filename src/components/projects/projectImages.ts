// Export project images with simpler names to avoid path issues

// Using relative paths from this file to the Assets directory
const SageShieldImg = new URL('../../../Assets/Sage Shield.jpg', import.meta.url).href;
const MalwareSageImg = new URL('../../../Assets/Malware Sage.jpg', import.meta.url).href;
const SageGuardImg = new URL('../../../Assets/Sage Guard.jpg', import.meta.url).href;
const SageEyeImg = new URL('../../../Assets/SageEYE.jpg', import.meta.url).href;

export {
  SageShieldImg,
  MalwareSageImg,
  SageGuardImg,
  SageEyeImg
};

// Import your project images here
// For now, we'll use placeholder images
export const SageShieldImgPlaceholder = '/placeholder-project-1.jpg';
export const MalwareSageImgPlaceholder = '/placeholder-project-2.jpg';
export const SageGuardImgPlaceholder = '/placeholder-project-3.jpg';
export const SageEyeImgPlaceholder = '/placeholder-project-4.jpg';
