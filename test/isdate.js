import test from 'tape'
import error from '../fn/error'
import isdate from '../fn/isdate'

test('isdate', (t) => {
  t.plan(4)
  t.equal( isdate( new Date() ), true)
  t.equal( isdate( new Date("1/1/2000") ), true)
  t.equal( isdate( "1/1/2000" ), false, "Doesn't convert string to date")
  t.equal( isdate( "1-1-2000" ), false)
})
