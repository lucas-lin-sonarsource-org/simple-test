const jwt = require('jsonwebtoken');

jwt.sign(payload, key, { algorithm: 'none' }); // Noncompliant
jwt.sign(payload, key, { algorithm: 'none' }); // Noncompliant
