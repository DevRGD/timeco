export function parseIconClasses(className = '') {
  const svgClassPrefixes = ['text-'];
  const allClasses = className.split(/\s+/);
  const containerClasses = [];
  const svgClasses = [];

  allClasses.forEach((cls) => {
    if (svgClassPrefixes.some((prefix) => cls.startsWith(prefix))) {
      svgClasses.push(cls);
    } else {
      containerClasses.push(cls);
    }
  });

  return {
    containerClasses: containerClasses.join(' '),
    svgClasses: svgClasses.join(' '),
  };
}
