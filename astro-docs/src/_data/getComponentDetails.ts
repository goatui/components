import componentsDetails from './componentsDetails.json';

export default function getComponentDetails(componentName: string) {
  return componentsDetails.components.find((component: any) => component.tag === componentName);
}
