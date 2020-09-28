export function url(href: string) {
  return `url(${href})`;
}

export function throttle(func: Function) {
  let flag = false;

  return async (...args: any[]) => {
    if (flag) return;

    flag = true;

    await func(...args);

    flag = false;
  };
}

export function nextFrame() {
  return new Promise(requestAnimationFrame);
}

export function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
