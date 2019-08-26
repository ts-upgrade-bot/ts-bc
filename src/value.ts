export enum ObjectType {
  Number,
  String,
  Boolean,
  Object,
  Value,
  Function,
  Array
}

export abstract class VObject {
  protected abstract get type(): ObjectType
  public abstract debugValue(): any

  isNumber(): this is JSNumber {
    return this.type === ObjectType.Number
  }

  isString(): this is JSString {
    return this.type === ObjectType.String
  }

  isBoolean(): this is JSBoolean {
    return this.type === ObjectType.Boolean
  }

  isPrimitive(): this is JSPrimitive {
    return this.isNumber() || this.isBoolean() || this.isString()
  }

  isValue() {
    return this.type === ObjectType.Value
  }

  isObject(): this is JSObject {
    return this.type === ObjectType.Object
  }

  toNumber() {
    if (this.isNumber()) {
      return this
    }
    throw new Error('invalid cast')
  }

  toString() {
    if (this.isString()) {
      return this
    }
    throw new Error('invalid cast')
  }

  toBoolean(): JSBoolean {
    throw new Error('invalid cast')
  }
}

export abstract class JSPrimitive extends VObject {
  protected abstract get value(): string | number | boolean

  public debugValue() {
    return this.value
  }
}

export abstract class JSObject extends VObject {
  private rc: number = 0

  public debugValue() {
    return this
  }
}

export class JSValue extends VObject {
  constructor(private ref: JSObject) {
    super()
  }

  public debugValue() {
    return this.ref.debugValue()
  }

  public get type() {
    return ObjectType.Value
  }
}

export class JSNumber extends JSPrimitive {
  constructor(public value: number) {
    super()
  }

  public get type() {
    return ObjectType.Number
  }

  toBoolean() {
    return new JSBoolean(!!this.value)
  }
}

export class JSString extends JSPrimitive {
  constructor(public value: string) {
    super()
  }

  public get type() {
    return ObjectType.String
  }
}

export class JSBoolean extends JSPrimitive {
  constructor(public value: boolean) {
    super()
  }

  public get type() {
    return ObjectType.Boolean
  }

  toBoolean() {
    return this
  }
}

export class JSFunction extends JSObject {
  constructor(public pos: number, args: number) {
    super()
  }

  public get type() {
    return ObjectType.Function
  }
}

export class JSArray extends JSObject {
  public get type() {
    return ObjectType.Array
  }

  constructor(private items: VObject[]) {
    super()
  }
}
