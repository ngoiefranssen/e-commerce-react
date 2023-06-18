export const Clamp = (min, max) => (v) => v <= min ? min : v >= max ? max : v;
