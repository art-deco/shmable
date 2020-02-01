import { equal, ok } from '@zoroaster/assert'
import Context from '../context'
import shmable from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof shmable, 'function')
  },
  async 'calls package without error'() {
    await shmable()
  },
  async 'gets a link to the fixture'({ fixture }) {
    const text = fixture`text.txt`
    const res = await shmable({
      text,
    })
    ok(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T