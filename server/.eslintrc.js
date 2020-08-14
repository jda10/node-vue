module.exports = {
    "env": {
        "node": true,
        "commonjs": true,
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
    },
    "globals":{
        "res": true,
        "req": true
    }
};
