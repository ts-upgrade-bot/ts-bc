export enum OpCode {
  Eof,
  Const,
  Add,
  Sub,
  Mul,
  Div,

  PrefixIncr,
  PrefixDecr,
  PrefixPlus,
  PrefixMinus,
  PrefixTilde,
  PrefixNot,

  PostfixIncr,
  PostfixDecr,

  LT,
  LTE,
  GT,
  GTE,
  StrictEQ,
  StrictNEQ,

  Push,

  Drop,
  Dup,
  Over,
  Swap,

  Def,
  DefBlock,
  Load,
  Set,

  Jump,
  JumpIfTrue,
  JumpIfFalse,

  EnterBlockScope,
  EnterLabeledBlockScope,
  EnterIterableBlockScope,
  ExitBlockScope,

  Break,
  BreakLabel,

  Ret,
  Call,
  CallMethod,

  Null,
  Undefined,
  False,
  True,
  Zero,

  CreateArray,
  CreateFunction,
  CreateLambda,
  CreateObject,

  This,
  New,

  PropAccess,
  PropAssignment,

  ForInStart,
  ForInNext,
  ForOfStart,
  ForOfNext
}

export interface OpValue {
  value: number
}

export interface Label extends OpValue {}
