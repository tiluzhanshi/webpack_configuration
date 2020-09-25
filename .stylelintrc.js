module.exports = {
  "extends": ["stylelint-config-standard"],
  "rules": {
    // "block-no-empty": true,
    // "comment-empty-line-before": "never",
    // "function-comma-space-after":"never",
    "at-rule-no-unknown": [true, {
      "ignoreAtRules": ["extend", "include", "each", "mixin"]
    }]
  }
};