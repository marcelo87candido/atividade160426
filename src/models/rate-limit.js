const rateLimit = require("express-rate-limit"); 

const limiter = rateLimit(
  {
  windowMs: 60 * 1000, // 1 minuto
  max: 10, // 10 requisições
  message: "Muitas requisições, tente novamente depois. Marcelo Candido RGM 707624-1"
  }
);

module.exports = limiter;
