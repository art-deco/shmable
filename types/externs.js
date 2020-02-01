/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _shmable = {}
/**
 * Options for the program.
 * @record
 */
_shmable.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_shmable.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_shmable.Config.prototype.text

/* typal types/api.xml externs */
/**
 * Consumer Of Babel Bug.
 * @typedef {function(!_shmable.Config): !Promise<string>}
 */
_shmable.shmable
