import test from 'tape'
import error from '../fn/error'
import isna from '../fn/isna'

test('isna', (t) => {
  t.plan(4)
  t.equal( isna( error.na ), true)
  t.equal( isna( error.value ), false)
  t.equal( isna( 'error.na' ), false)
  t.equal( isna( new Date() ), false)
})
