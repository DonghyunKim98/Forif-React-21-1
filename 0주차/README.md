# 0주차 스터디 (Orientation)

## 멘토 소개
- 한양대학교 정보시스템학과 18학번 김동현
- 의식주 어플리케이션 안드로이드 개발자 (2020.01~06)
- 다수의 프론트앤드 프로젝트 진행 및 완료
  - Forif 20-2 
    - 카메라 필터 어플리케이션 (React Native, TypeScript)
    - [Travel Info](https://travel-info.life/) (Svelte, Go) 
  - 한양대학교 공과대학교 공식 밴드 한울림 : 공식 어플리케이션 제작중 (연습실 예약, 번개모임, 자유게시판 기능)
  - 1일 1질문을 기반으로 하는 ASK_YOU(묻는다) 제작중

## React 소개
- JavaScript **View** Library / FrameWork 
  - View 를 담당하고 있다는 점은 매우 중요합니다. React를 학습한 이후 계속하여 언급할 예정입니다.
- Most Popular & Used Library / FrameWork
![스크린샷 2021-03-12 오후 3 02 46](https://user-images.githubusercontent.com/60422588/110899235-164b9900-8344-11eb-83b0-67d0ac075bcd.png)
- 스크린샷은 npm(node package module)에서 해당 페키지를 다운로드한 사람 숫자입니다. react가 다른 2개의 라이브러리/프레임워크에 비해 압도적인 다운로드를 보여주고 있습니다.
- View 의 측면에서 단순한 웹 페이지가 아닌, SPA를  **웹 어플리케이션**을 구축할 수 있게 도와줍니다.

### Is React Library or FrameWork?
- React가 라이브러리인지 프레임워크인지는 사람마다 이야기하는 바가 다릅니다.   
- 공식사이트에서는 라이브러리라고 이야기합니다.
- 하지만 라이브러리치고는 규모도 클 뿐만 아니라, 반드시 지켜야 하는 규약도 굉장히 많습니다. (위키피디아에서는 프레임워크라고 규정해놨습니다.)
- 이 부분에 대해서는 [이 사이트](https://kruschecompany.com/react-framework-library/) 를 한번 참고하셔도 좋을 것 같습니다.

## JavaScript란?
- 웹 페이지를 더 **동적**으로 만들어주는 프로그래밍 언어입니다.
- 스크립트 (script) 언어이기 때문에 배우기 매우 쉬운편에 속하지만, 난잡하다는 느낌이 들때가 있습니다.

## 실습 진행
### Installation
- `node.js` : 스크립트 언어인 JavaScript를 백앤드(서버)로 사용할 수 있게 만든 기술 
  - `npm`(node package module) : Node.js 기반으로 만들어진 패키지들을 인터넷을 이용하여 손쉽게 다운로드 할 수 있습니다.
  - Installation : [Node.org](https://nodejs.org) 공식사이트에서 다운로드 
    - 짝수 버젼 : 안정적, 신뢰도 높음 (LTS -> Long Term Support)
    - 홀수 버젼 : 최신기능
    - 짝수 버젼을 Install 할 것을 권합니다.
  - 설치가 끝난 이후 터미널에 아래 명령어를 입력하여 설치가 완료되었는지 확인합니다
  ```
  npm -v 
  ```
  > 터미널은 윈도우 기준 `window+ R` 을 클릭하여 나오는 창에 `cmd`를 입력하면 확인할 수 있습니다.
- Vscode : 가장 유명한 Text Editor입니다. MicroSoft에서 만들었으며, 사용자수와 extension면에서 다른 text editor가 따라잡지 못하는 수준입니다.   
[공식 사이트]()에서 OS에 맞는 버젼을 다운 받아주시기 바랍니다.
- React : [React 공식 홈페이지](https://ko.reactjs.org/docs/create-a-new-react-app.html)의 설명에 따라 설치
  - `CRA` (Create React App) : 부분적으로 React를 적용하는 것이 아닌 모든 웹페이지를 React로 만들고 싶다면, CRA를 이용하는 것이 좋습니다.
- `git` : 프로그래밍 버젼 관리 툴입니다. git에 대해선 포리프에서 추가적인 스터디가 제공될 예정입니다.   
  [공식 사이트](https://git-scm.com/downloads)에서 OS에 맞는 버젼을 다운로드 하시기 바랍니다. 설치 이후 터미널에 아래 명령어를 입력하여 설치가 완료되었는지 확인합니다. 
  ```
  git --version
  ```
- `github` : git의 원격저장소 입니다. 가장 많이 쓰이는 원격저장소 이며, 현재 micorsoft가 인수한 상태입니다.    
   [github](github.com)에 회원가입을 진행해주시기 바랍니다. 가급적 학교메일로 하길 권장드립니다. (무료로 pro로 업그레이드가 진행됩니다.)

### Settings `git`
- `git` 의 경우 초기 세팅이 필요합니다. 아래 명령어를 터미널에 입력하시기 바랍니다. 이때 `userName`은 어떤 것으로 해도 상관이 없으나 `user.email`은 반드시 **깃헙에 가입한 메일로 진행**해주시기 바랍니다
```
  git config user.email "akainoo@hanyang.ac.kr"
  git config user.name "DongHyunKim"
```

### Settings `vscode`
- vscode는 여러가지 extension을 깔면 실습하기 편해집니다.
 ![image](https://user-images.githubusercontent.com/60422588/111070698-2f0ba880-8516-11eb-8218-46fb051dda31.png)
- 위의 이미지에 있는 버튼을 누르면 extension을 깔수 있는 곳으로 넘어갑니다
- 아래 리스트에 있는 
### CRA 실행
- 아무 폴더를 만들고 vscode로 열어줍니다
- vscode에서 해당 폴더에 연결된 터미널을 직접적으로 열어주는 단축키(ctrl+`) 로 터미널을 열어줍니다.
- CRA를 npm을 이용해서 다운로드 받습니다. [공식 사이트](https://ko.reactjs.org/docs/create-a-new-react-app.html#create-react-app)를 보시면서 진행하시면 됩니다.
  - `cd`는 change directory의 약자로, text를 입력하면 text와 일치하는 하위 폴더로 이동을 하고, `..`을 입력하면 상위폴더로 이동을 합니다.
- 이후 해당 터미널에서 `npm start`를 입력하시면 CRA가 실행이 됩니다.
- 아래와 같은 화면이 출력이 된다면 성공입니다!
![image](https://user-images.githubusercontent.com/60422588/111070900-236cb180-8517-11eb-8d90-9e047f34fd95.png)


### CRA 구조 설명
```
my-app/
  README.md     # 해당 웹 어플리케이션과 관련한 Readme 
  node_modules/ # npm으로 설치한 모든 파일들이 들어감, git으로 보통 공유하지 않기 때문에 .gitignore에 등록함
  package.json  # npm으로 설치한 모든 파일들이 명시되어 있는 곳. 어떤 것들을 npm으로 설치했는지 알 수 있음
  public/       # 공유 폴더. 상대 경로를 이용하지 않고 접근할 수 있음 -> CRA를 쓰는 가장 큰 이유중 하나
    index.html  # Root Html 파일. 결국 이 HTML 파일에 모든 것을 그려냄
    favicon.ico # Root image 파일. 다양한 기능을 할 수 있습니다.
  src/ # React 코드들(JSX)이 들어오는 공간 
    App.css    
    App.js  
    App.test.js
    index.css
    index.js
    logo.svg
```
## 앞으로의 전반적인 계획
- 1주차~4주차 => `HTML` `CSS` `JavaScript` 에서 중요한 부분을 집중적으로 학습합니다.
  - 그 중에서도 `JavaScript`를 , 그 중에서도 DOM을 다루는 방법을 가장 집중적으로 다룰 예정입니다.
  - `JavaScript` 관련 문법 사항은 간략하게, 또는 관련 강의 링크를 제공해드릴 예정입니다.
- 5주차~8주차or10주 => React를 학습합니다
  - 2017년 이후 업데이트 된 [Hook](https://ko.reactjs.org/docs/hooks-intro.html)을 집중적으로 학습합니다.
  - 기회가 된다면 파이어베이스 등을 이용한 Serverless도 학습할 계획입니다.

## 찾아볼만한 키워드
- MVC Pattern : React는 MVC모델에서 View에 최적화되어 있습니다.
- SPA : React는 SPA를 이용하여 구현되었습니다.
- Library VS FrameWork : 각각 무엇인지, **차이점**이 무엇인지 알아보는 것은 웹 개발의 전반적인 지식을 습득하는데 도움이 됩니다.
> 이번주는 github 과 git 을 이용하여 과제 업로드 방식을 설명하기 너무 방대하므로 다음주로 넘기겠습니다.

### Single Page Application (SPA)
> 키워드를 찾아 정리하는 예시입니다.
- 서버로부터 *완전한 새로운 페이지를 불러오지 않고*,  현재의 페이지 중 **일부만 동적으로 다시 작성함**으로써 사용자와 소통하는 웹 어플리케이션이나 웹사이트
    - **Native application과 유사한 UX**를 제공할 수 있음
- 기존의 Server Side Rendering 과 비교할때 배포도 간단함

---

#### 기존의 WEB 방식과의 차이점

- link tag를 사용하는 **전통적인 WEB 방식**
    1. 새로운 페이지 요청 시마다 정적 리소스가 다운로드
    2. 전체 페이지를 다시 랜더링

    ⇒ 새로고침이 발생되어 사용성이 좋지 않음 

    ⇒  변경이 필요없는 부분을 포함하여  전체 페이지 갱신

- SPA
    1. 웹 어플리케이션에 필요한 **모든 정적 요소를 최초에 한번 다운로드**
    2. 새로운 페이지 요청 시 , **페이지 갱신에 필요한 데이터만**을 전달 받음

    ⇒ 전체적인 트래픽 감소

    ⇒ 전체 페이지 렌더링 X : 새로고침 발생 X

    ⇒ **사용자 경험(UX) 향상** → 어플리케이션 속도의 향상 → **모바일 퍼스트 전략 부합**

---

#### SPA의 단점

- **초기 구동 속도**

⇒ SPA는 웹 어플리케이션에 필요한 모든 정적 리소스를 최초에 한번 다운로드

⇒ 따라서 초기 구동 속도가 **상대적으로 느림**

⇒ 하지만, SPA는 웹페이지보다는 어플리케이션에 적합한 기술이므로 결정적인 단점 X

- **SEO(Search Engine Optimization) 문제**

⇒ SPA 는 기본적으로 **CSR(Client Side Rendering)**

⇒ 따라서, 검색엔진 최적화가 항상 문제가 되어 왔음

⇒ 하지만, 이 역시, SPA는 웹페이지가 아닌 어플리케이션을 위한 기술이므로 결정적인 단점 X

⇒ 또한 SPA FrameWork (React, Angular) 등은 SEO 대응 기술이 이미 존재함

- 더 자세한 SPA와 관련된 사항은 [이 사이트](https://poiemaweb.com/js-spa) 에서 확인 할 수 있습니다.
---

## 유용한 참고 (공식) 사이트
- https://reactjs.org/   
React 공식 사이트. 한글 번역도 잘 되어 있는 편이나, 영어로 확인하는 습관을 들이시길 바랍니다.    
혹시, 제 설명과 공식 사이트에서의 설명이 조금 다른 부분이 있다면 무조건 **공식 사이트의 설명을 우선시** 해주시기 발바니다.   
- https://create-react-app.dev/   
CRA (Create React App) 공식 사이트. CRA로 사이트를 만들때 세밀한 설정을 건들이고 싶다면, 확인해 주시면 됩니다.
- https://velopert.com/reactjs-tutorials   
벨로퍼트는 현재 우리나라에서 가장 이름이 알려진 웹 개발자 중 한명입니다. 
개발자들이 이용하는 [velog](https://velog.io/) 를 React로 개발하셨고, 블로그를 통해 재능 기부로 여러 강의를 제공하고 있습니다.
위의 링크는 그 중 가장 유명한 React 강의 입니다. 한국어 설명을 보고 싶다면 벨로펄트의 블로그를 참고하시는 것이 좋습니다.
- https://developer.mozilla.org   
웹 개발을 위한 공식 사이트. 파이어폭스(웹 브라우저) MDN 제단에서 운영중인 사이트입니다.   
HTML , CSS , JavaScript 관련 공식 사항은 이 사이트에서 찾기를 권합니다.
- https://www.youtube.com/channel/UC_4u-bXaba7yrRz_6x6kb_w   
제가 개인적으로 웹 개발 공부를 할 때 가장 많은 도움을 받은 사이트입니다.   
JavaScript 관련 문법이 이해가 안된다면, 채널에 있는 JavaScript 무료 강의를 참고해도 좋을듯 합니다.
