import ava from 'ava';

import path from 'path';
import { test as sourceTest } from '../lib/index.mjs';
import { test as outputTest } from '../build/index.mjs';

ava('Source and output export should be the same', (t) => {
  t.is(
      path.relative('.', sourceTest.substr(7)),
      outputTest.substr(7),
  );
});
