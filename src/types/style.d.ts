declare module '*.module.css' {
  const styles: { [key: string]: string };
  export default styles;
}

declare module '*.module.scss' {
  const styles: { [key: string]: string };
  export default styles;
}

declare module '*.jpg' {
  const url: string;
  export default url;
}

declare module '*.jpeg' {
  const url: string;
  export default url;
}

declare module '*.png' {
  const url: string;
  export default url;
}

declare module '*.gif' {
  const url: string;
  export default url;
}

declare module '*.webp' {
  const url: string;
  export default url;
}

declare module '*.svg' {
  const url: string;
  export default url;
}
