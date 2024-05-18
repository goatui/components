import componentsDetails from './componentsDetails.json';

export function getComponentDetails(tagName: string) {
  return componentsDetails.components.find((component: any) => component.tag === tagName);
}

const arr = componentsDetails.components.filter((component: any) => component.metadata.name).map((component: any) => component.tag);

export function getNextAndPrevious(target: string) {
  const index = arr.indexOf(target);
  if (index === -1) {
    console.log(`"${target}" not found in the array.`);
    return;
  }

  const nextIndex = (index + 1) % arr.length;
  const prevIndex = (index - 1 + arr.length) % arr.length;

  const nextElement = arr[nextIndex];
  const prevElement = arr[prevIndex];

  return {
    nextComponent: getComponentDetails(nextElement),
    previousComponent: getComponentDetails(prevElement),
  };
}
