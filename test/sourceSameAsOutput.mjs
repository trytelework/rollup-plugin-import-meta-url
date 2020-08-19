import ava from 'ava';

import { test as sourceTest } from '../lib/index.mjs';
import { test as outputTest } from '../build/index.mjs';

ava('Source and output export should be the same', (t) => {
  t.is(sourceTest, outputTest);
});
