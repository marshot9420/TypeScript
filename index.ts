// d.ts파일은 다른 ts파일에서 import 가능
import { Age, Person } from "./test";

let age: Age = 28;

// ts파일에 타입 정의가 너무 길면 d.ts파일 만들기도 함
// import/export 할게 많으면 namespace 또는 import * as 사용
