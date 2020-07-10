{
    "extends": "airbnb-base",
    "env": {
    "es6": true,
    "node": true,
    "mocha": true
    },
    "rules": {
    "no-underscore-dangle": ["error",{"allow": ["_id","_doc"]}],
    "no-unused-vars": ["error",{ "argsIgnorePattern": "^(req|res|next)" }]
    }
   }