// Copyright 2015 Peter W Moresi

// FunctionFoundry is a collection of pure functions.
//
// The functions accept input and produce output. They do not create side effects and are therefore composable.
//
// The library is organized several core compatibilities:
//
// 1. Logical functions
//   - AND, OR, NOT, EQ, NE, GT, GTE, LT, LTE, SWITCH, COND and more...
//
// 2. Math functions
//   - ADD, SUBTRACT, MULTIPLY, DIVIDE, SIN, COS, ect...
//
// 3. Text manipulation
//   - TEXT, NUMBERVALUE, SPLIT and more...
//
// 4. Lookup and reference/
//   - LOOKUP, VLOOKUP, HLOOKUP and more...
//
// 5. Date manipulation
//   - Functions withsSupport for spreadsheet serial numbers like DATE, DATEDIF and more...
//
// 6. Aggregation
//   - SUM, AVERAGE, MIN, MAX
//
// The library currently is approaching 100 functions. The long term goal is to support the ~300 functions supported by modern spreadsheet software.
//
// The test suite includes over ~600 assertions to ensure high quality and provide usage examples.
//
export {ABS} from './ABS'
export {ACOS} from './ACOS'
export {ADD} from './ADD'
export {AND} from './AND'
export {AVERAGE} from './AVERAGE'
export {BIN2DEC} from './BIN2DEC'
export {CELLINDEX} from './CELLINDEX'
export {CHANGED} from './CHANGED'
export {CHOOSE} from './CHOOSE'
export {CLEAN} from './CLEAN'
export {CODE} from './CODE'
export {COLUMN} from './COLUMN'
export {COLUMNLETTER} from './COLUMNLETTER'
export {COLUMNNUMBER} from './COLUMNNUMBER'
export {CONCATENATE} from './CONCATENATE'
export {COND} from './COND'
export {CONTAINS} from './IN'
export {COS} from './COS'
export {DATE} from './DATE'
export {DATEVALUE} from './DATEVALUE'
export {DATEDIF} from './DATEDIF'
export {DAYS360} from './DAYS360'
export {DEC2BIN} from './DEC2BIN'
export {DIFF} from './DIFF'
export {DIVIDE} from './DIVIDE'
export {EQ} from './EQ'
export {EXACT} from './EXACT'
export {FILTER} from './FILTER'
export {FIND} from './FIND'
export {FLATTEN} from './FLATTEN'
export {GT} from './GT'
export {GTE} from './GTE'
export {GUID} from './GUID'
export {HLOOKUP} from './HLOOKUP'
export {IF} from './IF'
export {IFBLANK} from './IFBLANK'
export {IFEMPTY} from './IFEMPTY'
export {IFERROR} from './IFERROR'
export {IFNA} from './IFNA'
export {IN} from './IN'
export {INDEX2COL} from './INDEX2COL'
export {INDEX2ROW} from './INDEX2ROW'
export {INDIRECT} from './INDIRECT'
export {ISARRAY} from './ISARRAY'
export {ISBLANK} from './ISBLANK'
export {ISDATE} from './ISDATE'
export {ISEMAIL} from './ISEMAIL'
export {ISEMPTY} from './ISEMPTY'
export {ISERROR} from './ISERROR'
export {ISEVEN} from './ISEVEN'
export {ISFUNCTION} from './ISFUNCTION'
export {ISNA} from './ISNA'
export {ISNUMBER} from './ISNUMBER'
export {ISODD} from './ISODD'
export {ISREF} from './ISREF'
export {ISTEXT} from './ISTEXT'
export {ISURL} from './ISURL'
export {LEN} from './LEN'
export {LOOKUP} from './LOOKUP'
export {LOWER} from './LOWER'
export {LT} from './LT'
export {LTE} from './LTE'
export {MIN} from './MIN'
export {MAX} from './MAX'
export {MULTIPLY} from './MULTIPLY'
export {N} from './N'
export {NUMBERVALUE} from './NUMBERVALUE'
export {NE} from './NE'
export {NOT} from './NOT'
export {OCT2DEC} from './OCT2DEC'
export {OR} from './OR'
export {PARSEBOOL} from './PARSEBOOL'
export {PARSEDATE} from './PARSEDATE'
export {PI} from './PI'
export {PMT} from './PMT'
export {POWER} from './POWER'
export {REF} from './REF'
export {REPLACE} from './REPLACE'
export {REPT} from './REPT'
export {RIGHT} from './RIGHT'
export {ROUND} from './ROUND'
export {ROUNDUP} from './ROUNDUP'
export {SEARCH} from './SEARCH'
export {SELECT} from './SELECT'
export {SERIAL} from './SERIAL'
export {SIN} from './SIN'
export {SORT} from './SORT'
export {SPLIT} from './SPLIT'
export {SUBSTITUTE} from './SUBSTITUTE'
export {SUBTRACT} from './SUBTRACT'
export {SUM} from './SUM'
export {TAN} from './TAN'
export {TAU} from './TAU'
export {TEXT} from './TEXT'
export {TRIM} from './TRIM'
export {UNIQUE} from './UNIQUE'
export {UPPER} from './UPPER'
export {VLOOKUP} from './VLOOKUP'
export {XOR} from './XOR'
