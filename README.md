react
react-router-dom
react-hook-form
scss
vite
eslint
prettier
axios
zustand : global state
react-quert : api hook

src : 최상위 레벨에는 페이지, 라우팅, 서비스등의 실행 관련 요소들이 포함
src/@core : 애플리케이션의 전반적인 기능을 지원하는 핵심 로직과 구성 요소 포함

components > common : 공통 컴포넌트 작성
components > test : 테스트 컴포넌트 작성

store : store 관리
store > slice : slice 관리

pages : 각 페이지에 해당하며 라우터에 의해 직접 호출
views : 여러 페이지에서 사용될 수 있는 크고 복잡한 컴포넌트들을 포함 - ex) DashboardLayout.js, UserList.js, ProfileView.js
components : 일반적이고 재사용 가능한 작은 UI 요소들을 포함 ex) Button.jsx, InputField.jsx, Card.jsx

src/
|-- components
| |-- common
| | |-- Button
| | |-- Loading
|-- views
| |-- AppLayout
|-- pages
| |-- Home
| |-- NotFound

constans : 상수관리

api : api 관련

==== tanStackQuery 사용법 ====

1.  사용예시

```
// Queries : 조회
// query = { isPending, error, data, ... }
const query = useQuery({ queryKey: ['key'], queryFn: fetch함수 })

// Mutations : 변경
// mutation = { isPending, error, data, mutate, ... }
const mutation = useMutation({
mutationFn: fetch함수,
onSuccess: () => {
// 성공시 처리
...
//캐시 무효화
queryClient.invalidateQueries({ queryKey: ['key'] })
},
})
```

```
<div>
  <ul>{query.data?.map((todo) => <li key={todo.id}>{todo.title}</li>)}</ul>

  <button
    onClick={() => {
    mutation.mutate({
    id: Date.now(),
    title: 'Do Laundry',
    })
    }}
  >
    Add Todo
  </button>
</div>
```

2. 제거방법

1) provider 제거

- app.js : QueryClientProvider 제거

```
<QueryClientProvider client={queryClient}>
  <AppLayout>
    <Suspense fallback={<Loading />}>
      <Router />
    </Suspense>
  </AppLayout>
</QueryClientProvider>
```

2. useQuery 나 useMutation 대신 api custom hook 이나 service 호출 코드로 대체

ex)

- before

```
 const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: sendEmail,
  });
```

- after

```
const res = sendEmail()
```

==== tanStackQuery 사용법 ====

==== 다국어 처리 ====

1. 관련 라이브러리
   npm install i18next react-i18next i18next-http-backend i18next-browser-languagedetector

- i18next: 국제화를 위한 핵심 라이브러리입니다.
- react-i18next: React에서 i18next를 사용할 수 있도록 하는 바인딩 라이브러리입니다.
- i18next-http-backend: 원격 서버나 로컬 파일 시스템에서 번역 리소스를 로드할 수 있게 하는 플러그인입니다.
- i18next-browser-languagedetector: 사용자의 브라우저 언어 설정을 자동으로 감지하는 플러그인입니다.

2. src/i18n.js 생성

3. public/locales/ 에 번역파일 생성
   ex) public/locales/en/translation.json
   ex) public/locales/de/translation.json

4. test code

```
//test code
import { useTranslation } from 'react-i18next';
import '@src/i18n';

const LanguageTest = () => {
  const { t, i18n } = useTranslation();

  // 언어 전환 함수
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>
    </div>
  );
};
```

5. 제거
   1,2,3 번 제거만 하면 됨.

==== 다국어 처리 ====

==== react-helmet-async ===

1. 사용법

head 태그 변경하려고 하는 컴포넌트에서

```
//App.jsx
import { HelmetProvider } from 'react-helmet-async';

<HelmetProvider>
  <Router />
</HelmetProvider>

//component
import { Helmet } from 'react-helmet-async';

<HelmetProvider>
  <div>
    <Helmet>
      <title>페이지 제목</title>
      <meta name="description" content="페이지 설명" />
      <link rel="canonical" href="현재 페이지의 URL" />
      {/* 기타 필요한 메타 태그나 링크 태그 추가 */}
      {/* og 태그 추가 */}
      <meta property="og:title" content="오픈 그래프 페이지 제목" />
      <meta property="og:description" content="오픈 그래프 페이지 설명" />
      <meta property="og:image" content="이미지 URL" />
      <meta property="og:url" content="현재 페이지의 URL" />
      <meta property="og:type" content="website" />
    </Helmet>
    <div>
      {/* 컴포넌트 contents */}
    </div>
  </div>
</HelmetProvider>

```

여러개의 컴포넌트에서 Helmet을 설정할 수 있지만 적용되는 우선 순위는 최하단 컴포넌트 부터 적용됨

==== react-helmet-async ===
