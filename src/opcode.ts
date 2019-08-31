export enum OpCode {
  Eof,
  Const,
  Add,
  Sub,
  Mul,
  Div,
  Pow,
  Mod,

  PrefixPlus,
  PrefixMinus,

  BitwiseNot,
  BitwiseAnd,
  BitwiseOr,
  BitwiseXor,
  RightArithmeticShift,
  LeftArithmeticShift,
  RightLogicalShift,

  LogicalNot,
  LogicalAnd,
  LogicalOr,

  LoadLeftValue,
  SetLeftValue,

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
  One,

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
