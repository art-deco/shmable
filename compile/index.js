const { _shmable } = require('./shmable')

/**
 * Consumer Of Babel Bug.
 * @param {!_shmable.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function shmable(config) {
  return _shmable(config)
}

module.exports = shmable

/* typal types/index.xml namespace */
/**
 * @typedef {_shmable.Config} Config `＠record` Options for the program.
 * @typedef {Object} _shmable.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
