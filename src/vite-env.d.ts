/// <reference types="vite/client" />

// Figma asset declarations
declare module "figma:asset/*" {
  const figmaAssetUrl: string;
  export default figmaAssetUrl;
}

// Image asset declarations
declare module "*.png" {
  const pngUrl: string;
  export default pngUrl;
}

declare module "*.jpg" {
  const jpgUrl: string;
  export default jpgUrl;
}

declare module "*.jpeg" {
  const jpegUrl: string;
  export default jpegUrl;
}

declare module "*.gif" {
  const gifUrl: string;
  export default gifUrl;
}

declare module "*.svg" {
  const svgUrl: string;
  export default svgUrl;
}