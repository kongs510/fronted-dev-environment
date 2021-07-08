import axios from "axios";

// const data = [
//   {keyword: '이탈리아'},
//   {keyword: '세프의요리'},
//   {keyword: '제철'},
//   {keyword: '홈파티'},
// ]


const model = {
  async get() {
    // const result = await axios.get('/api/keywords');

    // 직접 api 서버로 요청한다.
    const { data } = await axios.get("http://localhost:8081/api/keywords")
    return data
  },
}

export default model;
