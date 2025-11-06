# 카카오 선물하기
카카오 테크 캠퍼스 2단계인 카카오 선물하기 페이지를 클론 코딩하였습니다.

## 기간
2025년 7월 ~ 8월 (2개월)

# 기능
## 1. 메인 페이지
![20251106-1038-07.9075997.gif](..%2F..%2F..%2F..%2FAppData%2FLocal%2FPackages%2FMicrosoft.ScreenSketch_8wekyb3d8bbwe%2FTempState%2FGif%2F20251106-1038-07.9075997.gif)
- 로그인 페이지, 선물 테마 페이지, 선물 랭킹 페이지로 이동할 수 있게 연결해줍니다.
- 선물 랭킹 섹션에서는 외부 api를 받아와 정보에 맞는 api를 불러 옵니다.

## 2. 로그인 페이지
![20251106-1046-00.8756099.gif](..%2F..%2F..%2F..%2FAppData%2FLocal%2FPackages%2FMicrosoft.ScreenSketch_8wekyb3d8bbwe%2FTempState%2FGif%2F20251106-1046-00.8756099.gif)
- 비밀번호가 **8글자 미만**이면 경고 메세지가 나타나게 했습니다.
- kakao.com 이외의 메일을 넣으면 **kakao.com**으로 설정하라는 alert를 띄웠습니다.
- 경고 메세지는 **react-toastify**를 이용하여 UI를 개선하였습니다.
- 로그인을 완료하고 나면 메인 페이지의 '선물한 친구를 선택해주세요.' 섹션에 로그인한 나의 이메일의 @ 앞부분이 나타납니다.

## 3. 선물 테마 페이지
![20251106-1049-33.5691456.gif](..%2F..%2F..%2F..%2FAppData%2FLocal%2FPackages%2FMicrosoft.ScreenSketch_8wekyb3d8bbwe%2FTempState%2FGif%2F20251106-1049-33.5691456.gif)
- 원하는 선물 테마를 누르면 해당 테마의 선물 상품을 볼 수 있습니다.
- 선물 상품은 외부 api를 이용하여 가져왔습니다.
- useSuspenseInfiniteQuery를 이용해 **무한 스크롤**을 적용하였습니다.

## 4. 선물 상세 정보 페이지
![20251106-1055-25.3424907.gif](..%2F..%2F..%2F..%2FAppData%2FLocal%2FPackages%2FMicrosoft.ScreenSketch_8wekyb3d8bbwe%2FTempState%2FGif%2F20251106-1055-25.3424907.gif)
- 외부 api에서 해당 상품의 정보를 받아 상세 정보를 볼 수 있습니다.
- 마음에 드는 상품이면 하트 표시로 저장할 수 있습니다. 하트는 로그아웃하고 로그인해도 그대로 유지됩니다.

## 5. 선물하기 페이지
![20251106-1102-04.5912395.gif](..%2F..%2F..%2F..%2FAppData%2FLocal%2FPackages%2FMicrosoft.ScreenSketch_8wekyb3d8bbwe%2FTempState%2FGif%2F20251106-1102-04.5912395.gif)
- 외부 api에서 받은 카드를 선택할 수 있습니다.
- 보내는 사람과 메세지를 수정할 수 있습니다.
- 작성할 수 있는 곳에서 하나라도 작성하지 않으면 선물할 수 없습니다.
- 또한, 작성하지 않은 곳 아래에 경고 메세지가 나타납니다.
![20251106-1104-56.6167662.gif](..%2F..%2F..%2F..%2FAppData%2FLocal%2FPackages%2FMicrosoft.ScreenSketch_8wekyb3d8bbwe%2FTempState%2FGif%2F20251106-1104-56.6167662.gif)
- 전화번호 형식이 옳지 않으면 전화 번호에 대한 오류가 발생합니다.
- 받는 사람을 추가할 수 있으며, 받는 사람과 상품 갯수가 증가할 때마다 총 금액이 늘어납니다.
![20251106-1107-19.0799490.gif](..%2F..%2F..%2F..%2FAppData%2FLocal%2FPackages%2FMicrosoft.ScreenSketch_8wekyb3d8bbwe%2FTempState%2FGif%2F20251106-1107-19.0799490.gif)
- 작성을 완료하면 입력한 내용의 react-toastify alert가 나타납니다.

# 테크 스팩
<table>
  <thead>
    <tr>
      <th>Frontend</th>
      <th>DevOps</th>
      <th>Others</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td align="center">
        <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black"  alt="react"/><br/>
        <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" alt="vite"/><br/>
        <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/Emotion-DB7093?logo=emotion&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/ReactQuery-FF4154?logo=reactquery&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/ReactHookForm-EC5990?logo=reacthookform&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/ReactRouter-CA4245?logo=reactrouter&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/ReactToastify-5E17EB?logoColor=white" />
      </td>
      <td align="center">
        <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/ESLint-4B32C3?logo=eslint&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black" /><br/>
        <img src="https://img.shields.io/badge/GitHub_Actions-2088FF?logo=githubactions&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white" />
      </td>
      <td align="center">
        <img src="https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/lucide-181717?logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/SVG-FFB13B?logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/MSW-000000?logoColor=white" /><br/>
        <img src="https://img.shields.io/badge/JSDOM-5A5A5A?logoColor=white" />
      </td>
    </tr>
  </tbody>
</table>


# 실행
## 프로젝트 세팅
```npm install```을 완료한 후, `npm run dev`로 백엔드를 실행시킨다. (프론트와 백엔드가 함께 시작됩니다.)

백엔드 실행이 완료된 후,

https://react-gift-product-detail-kakao-h3920wu3u-ju-hyeongs-projects.vercel.app/ 

에 접속을 하면 됩니다.

# 회고
## 고민 1: 코드의 일관성과 유지보수성
**문제점**:
- 초기 코드는 컴포넌트 로직과 스타일 코드가 뒤섞여 있었음.
- 파일명 규칙이 없었으며, 의미를 알기 힘든 매직 넘버(#FFFFFFFF, showCount === 6)가 많았음.
- 개인의 편의만 생각한, 협업을 고려하지 않은 코드였음.

**해결책**:
- 멘토님의 조언으로 ThemeProvider를 도입하여 디자인 시스템을 구축했음.
- 색상, 폰트 사이즈 등을 상수로 관리하여 일관성을 확보했음.
- 수정이 필요할 때 단 한 곳만 변경하면 되도록 만들어 유지보수성을 극적으로 향상시켰음.

## 고민 2: 예측 불가능한 에러에 대한 안정성
**문제점**: 
- 필터 상태 유지를 위해 localStorage와 커스텀 훅 usePersistedState를 사용했음.
- 하지만 localStorage의 값이 손상되어 JSON.parse()가 실패할 경우, 앱 전체가 멈출 수 있는 치명적인 위험을 인지하지 못했음.

**해결책**: 
- 기능의 'Happy Path' 너머를 생각하는 방어적 코딩의 중요성을 배웠음.
- try-catch 문을 추가하여 예외 상황이 발생하더라도 애플리케이션이 중단되지 않도록 코드를 보강했음.

## 고민 3: 반복되는 데이터 패칭 로직과 비효율
**문제점**: 
- 기능별로 데이터 페칭 훅(useFetchThemes, useFetchRanking 등)을 만들다 보니 로딩, 에러, 데이터 상태를 관리하는 로직이 거의 완벽하게 중복되었음.

**해결책**:
- 추상화: 제네릭을 활용한 범용 useFetchData 훅을 만들어 중복을 제거했음.
- 중앙화: axios interceptor를 도입하여 여러 곳에 흩어져 있던 에러 처리 로직을 한 곳에서 관리했음.
- 책임 분리: 무한 스크롤 구현 시, 데이터 페칭 로직과 스크롤 감지 로직을 useInfiniteScrollObserver 훅으로 분리하여 각자의 책임에 집중하도록 설계했음.

## 고민 4: 복잡한 비동기 상태 관리와 사용자 경험
**문제점**: 
- useState와 useEffect로 가득한 명령형 데이터 페칭 코드는 복잡하고 어려웠음. 
- 또한, 찜 기능처럼 즉각적인 피드백이 중요한 기능에서 API 응답을 기다리는 시간은 사용자 경험을 저해했음.

**해결책**:
- 선언적 데이터 관리: React Query를 도입하여 데이터 페칭, 캐싱, 동기화 로직을 단 하나의 useQuery 훅으로 대체했음.
- Suspense와 ErrorBoundary로 비동기 UI 처리를 React에 위임하며 코드 복잡성을 크게 낮췄음.
- 사용자 경험 개선: API 제약 속에서 찜 기능에 **낙관적 업데이트(Optimistic Update)**를 구현하기 위해 sessionStorage를 활용하는 방안을 고민했음. 
- 이 과정을 통해 기술적 선택이 사용자 경험과 실무적 트레이드오프에 미치는 영향을 종합적으로 사고하는 능력을 길렀음.

## 고민 5: 코드의 신뢰성 보증과 자동화
**문제점**: 
- 프로젝트의 규모가 커지면서 수동 테스트만으로는 애플리케이션의 안정성을 보증하기 어려웠음.

**해결책**:
- 테스트 환경 구축: Mock Service Worker (MSW)로 API 의존성을 제거하여 안정적인 테스트 환경을 마련했음.
- CI/CD 자동화: GitHub Actions로 CI 파이프라인을 구축하여, Pull Request가 생성될 때마다 lint, build, test가 자동으로 실행되도록 설정했음. 
- 이를 통해 코드의 품질을 스스로 책임지고 보증할 수 있게 되었음. 

## 정리한 블로그
- **노션**: 

https://www.notion.so/teamsparta/2-T-I-L-2192dc3ef51480cb9549fb76350e5935?p=21b2dc3ef51480c2a0fdd7653a539869&pm=s

- **개인 블로그**: 

https://j-brothers.tistory.com/category/%EC%B9%B4%ED%85%8C%EC%BA%A0/2%EB%8B%A8%EA%B3%84?page=1
- **모각코 회의록**:

https://www.notion.so/teamsparta/2-2192dc3ef51480708305e47b723e5f90?p=21c2dc3ef51480149474dc2ab0a006c8&pm=s

1. 로그인 구현<br>
   깃허브:<br>https://github.com/JuHyeong424/react-gift-login <br>
   pull request:<br>https://github.com/next-step/react-gift-login/pulls?q=is%3Apr+is%3Aclosed+%EC%9E%A5%EC%A3%BC%ED%98%95
<br><br>
2. 주문하기 구현<br>
   깃허브: <br>https://github.com/JuHyeong424/react-gift-order-kakao/tree/step3<br>
   pull request: <br>https://github.com/next-step/react-gift-order/pulls?q=is%3Apr+is%3Aclosed+%EC%9E%A5%EC%A3%BC%ED%98%95
<br><br>
3. 선물하기 구현<br>
   깃허브: <br>https://github.com/JuHyeong424/react-gift-product-list/tree/step03<br>
   pull request: <br>https://github.com/next-step/react-gift-product-list/pulls?q=is%3Apr+is%3Aclosed+%EC%9E%A5%EC%A3%BC%ED%98%95
<br><br>
4. 선물하기 디테일 구현 - 배포 완료<br>
   깃허브: <br>https://github.com/JuHyeong424/react-gift-product-detail-kakao/tree/step03<br>
   pull request: <br>https://github.com/next-step/react-gift-product-detail/pulls?q=is%3Apr+is%3Aclosed+%EC%9E%A5%EC%A3%BC%ED%98%95
