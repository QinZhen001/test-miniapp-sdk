import { IOptions, State } from './type';

class MiniappSdk {
  options: IOptions;
  version = '1.0.0';
  state: State = State.Idle;

  constructor(options: IOptions) {
    this.options = options;
  }

  setState(state: State) {
    this.state = state
  }

  getState(): State {
    return this.state
  }
}


export default MiniappSdk;
