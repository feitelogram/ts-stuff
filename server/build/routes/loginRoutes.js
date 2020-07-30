"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
function requireAuth(req, res, next) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        next();
        return;
    }
    res.status(403).send('Forbidden');
}
router.get('/', function (req, res) {
    var _a;
    if ((_a = req.session) === null || _a === void 0 ? void 0 : _a.loggedIn) {
        res.send("\n  <div>\n  <h1>You are logged in.</h1>\n  <a href=\"/logout\">Logout</a>\n  </div>\n  ");
    }
    else {
        res.send("\n    <div>\n    <h1>You are not logged in.</h1>\n    <a href=\"/login\">Login</a>\n    </div>\n    ");
    }
});
router.get('/logout', function (req, res) {
    req.session = null;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('<p>Welcome to the protected page, logged-in user.</p>');
});
