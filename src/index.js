import { c } from 'erte'

/**
 * @type {_shmable.shmable}
 */
export default async function shmable(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@artdeco/shmable called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').shmable} _shmable.shmable
 */
