/// <reference types="react-scripts" />

declare module '*.css';
declare module '*.png';
declare module '*.jpg';

declare interface Window {
  echarts: any;
}
declare module "*.less" {
  const classes: { readonly [key: string]: string };
  export = classes;
}
