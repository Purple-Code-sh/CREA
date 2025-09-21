// Para módulos de CSS
declare module "*.module.css" {
  const classes: { readonly [key: string]: string };
  export default classes;
}

// Para CSS normales
declare module "*.css";

// Para imágenes y otros assets
declare module "*.webp";
declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.svg";
