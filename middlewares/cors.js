// allowedDomains needs to be an array of the domains that you want to allow to access your API
export const cors = (allowedDomains) => {
  return (req, res, next) => {
    const origin = req.header('origin')
    if (allowedDomains.includes(origin) || !origin) {
      res.header('Access-Control-Allow-Origin', origin)
      res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    }
    next()
  }
}
