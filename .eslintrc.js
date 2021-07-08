module.exports = {
    extends: [
      "airbnb", // 미리 설정된 규칙 세트을 사용한다
      "eslint-config-prettier",
      "eslint:recommended",
      "plugin:prettier/recommended"
    ],
  },
  {
    plugins: [
      "prettier"
    ],
    rules: {
      "prettier/prettier": "error"
    },
  }