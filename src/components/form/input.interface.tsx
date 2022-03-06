interface InputComponentInterface {

  required?: boolean;

  disabled?: boolean;

  name: string;

  getGid(): Promise<string>;

  setFocus(): void;

  setBlur(): void;

}
