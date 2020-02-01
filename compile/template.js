const { _shmable } = require('./shmable')

/**
 * @methodType {_shmable.shmable}
 */
function shmable(config) {
  return _shmable(config)
}

module.exports = shmable

/* typal types/index.xml namespace */
