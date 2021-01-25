module.exports = function(req, res, next) {
  // server maintains a "sessions" list/array
  // with objects that represent stored sessions
  // (clients that authed successfully)
  if (req.session && req.session.user)
}
