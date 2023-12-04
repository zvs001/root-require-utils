import path from 'path'

export class RootUtil {
  path = process.env.PWD

  resolvePath(filePath: string): string {
    if (!this.path) throw new Error('RootUtil.path is not defined')
    return path.resolve(this.path, filePath)
  }

  // resolve() is renamed to resolvePath() deleted and might be added later with different behaviour

  exists(filePath: string): string | false {
    const requirePath = this.resolvePath(filePath)
    try {
      const resolvePath = require.resolve(requirePath)
      return resolvePath
    } catch (e) {
      return false
    }
  }

  require(filePath: string) {
    const requirePath = this.resolvePath(filePath)
    return require(requirePath)
  }

  import(filePath: string) {
    const requireData = this.require(filePath)
    return requireData?.default || requireData
  }
}

const rootRequireUtil = new RootUtil()

module.exports = rootRequireUtil
export default rootRequireUtil
