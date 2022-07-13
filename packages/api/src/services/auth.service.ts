const { expressjwt: jwt } = require('express-jwt')
const jwksRsa = require('jwks-rsa')

const AUTH_DOMAIN = process.env.AUTH_DOMAIN
const AUTH_AUDIENCE = process.env.AUTH_AUDIENCE
const ENV = process.env.NODE_ENV

// Create middleware to validate the JWT using express-jwt
// @ts-ignore
const testJwt = jwt({
  // Provide a signing key based on the key identifier in the header and the signing keys provided by your Auth0 JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${AUTH_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience (Identifier) and the issuer (Domain).
  audience: AUTH_AUDIENCE,
  issuer: `https://${AUTH_DOMAIN}/`,
  algorithms: ["RS256"]
})

const testingPassthrough = function (req, res, next) {
  next()
}

const authMiddleware = ENV !== 'test' ? testJwt : testingPassthrough

export {
  authMiddleware as checkJwt
}
