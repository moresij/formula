import test from 'tape'
import error from '../fn/error'
import lookup from '../fn/lookup'

test('lookup', (t) => {
  t.plan(3)
  t.equal( lookup( 'Good', ['Good', 'Bad'] ), 'Good')
  t.equal( lookup( 1, [1,2], ['Good', 'Bad'] ), 'Good')
  t.equal( lookup( 2, [1,2], ['bad', 'good'] ), 'good')
})
