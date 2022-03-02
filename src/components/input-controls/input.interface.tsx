interface InputComponentInterface {

  getGid(): Promise<string>;

  setFocus(): void;

  setBlur(): void;

}
