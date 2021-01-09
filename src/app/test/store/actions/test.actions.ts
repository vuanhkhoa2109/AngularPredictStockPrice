export class AddNumber {
  static readonly type = '[TEST] Add number';

  constructor(public num: number) {
  }
}

export class RemoveNumber {
  static readonly type = '[TEST]Remove number';

  constructor(public num: number) {
  }
}
