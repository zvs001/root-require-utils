import path from 'path'

class RootUtil {
  path = process.env.PWD

  resolvePath(filePath: string): string {
    if (!this.path) throw new Error('RootUtil.path is not defined')
    return path.resolve(this.path, filePath)
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
