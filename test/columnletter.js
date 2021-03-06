import columnletter from '../fn/columnletter';
import error from '../fn/error';
import test from 'tape';

test('columnletter', function(t) {
  t.plan(5);
  t.equal( columnletter(0), 'A' );
  t.equal( columnletter(25), 'Z' );
  t.equal( columnletter(26), 'AA' );
  t.equal( columnletter(NaN), error.value );
  t.equal( columnletter('invalid'), error.value );
})
