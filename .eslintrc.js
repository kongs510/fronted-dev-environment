module.exports = {
    extends: [
      "airbub", // 미리 설정된 규칙 세트을 사용한다
      "eslint-config-prettier",
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