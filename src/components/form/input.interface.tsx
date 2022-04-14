interface InputComponentInterface {

  required?: boolean;
  disabled?: boolean;
  name: string;

  getComponentId(): Promise<string>;
  setFocus(): void;
  setBlur(): void;
}
