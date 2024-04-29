const jwt = require('jsonwebtoken');

jwt.sign(payload, key, { algorithm: 'none' }); // Noncompliant