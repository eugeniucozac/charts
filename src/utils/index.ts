export const rose = "rgb(255, 99, 132)";
export const blue = "rgb(53, 162, 235)";
export const green = "rgb(75, 192, 192)";
export const yellow = "rgb(255, 206, 86)";
export const purple = "rgb(153, 102, 255)";
export const orange = "rgb(255, 159, 64)";

export const toRGBA = (rgb: string, a = "0.5") => {
  const matchRGB = rgb.match(/^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/);
  if (matchRGB) {
    const [, r, g, b] = matchRGB;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
};

export const randomNumber = (max: number) => Math.floor(Math.random() * max);

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
