const express = require("express"); // express를 쓰겠다.
const app = express(); // 함수 실행

const PORT = 8080; // 대문자로 쓰는 이유 : 중요하기 떄문
// 포트 주소를 할당해줌
const Login = require("./Router/login/index");
const test = require("./Router/test/index");

app.use(express.json());
// 익스프레스 요청이 들어오면 json으로 바꿔준다.
// post 요청에서 바디를 바꿔준다.
app.use(express.urlencoded({ extended: true }));
// true를 하면, qs 모듈을 사용하고 false면 query-string 모듈을 사용한다.
// 브라우저에서 포스트방식을 요청하면, url 방식으로

app.use("/login", Login);
app.use("/test", test);

app.get("/", (req, res, next) => {
  // / 있는곳으로 들어간다 -> 안에 내용을 보여주는 함수같은 역할
  // 서버가 사용자에게 요청을 보낼떄 / 가져온다
  res.header();
  res.send("안녕");
});
// app.get() = exppress().get()
// 사용자의 입력에 따라 서버에 보낼때 / 데이터를 서버에 줄 때

app.post("/login", (req, res, next) => {
  console.log(req.body);
  // 요청을 보냄
  res.send({ ok: "good" });
  // 요청에 응답한 값
});

app.listen(PORT, () => {
  console.log(`express server starrt ${PORT}`);
});
// 포트 실행

// Responxe Header가 중요하다
// express 사용해서 Request Headres의 기본값을 다 설정해준다.
// Accept에 문자열이고, html 이라는 걸 따로 지정을 안해도  보여준다.
// 정보

// postman
// 서버만 개발할때는, 화면이 보이지 않으니까 postman을 통해서 확인을 할 수 있다.
// 브라우저 역할을 대신 해준다

// 사용자가 글을 쓰면 json화 해줘서 서버에 보여준다.
