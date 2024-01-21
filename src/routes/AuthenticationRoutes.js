import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/mainC/Login3')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/mainC/Register3')));
const CRegister = Loadable(lazy(() => import('views/pages/authentication/mainC/CRegister')));
const CstartPage = Loadable(lazy(() => import('views/pages/authentication/mainC/CStartPage')));
const CLogin = Loadable(lazy(() => import('views/pages/authentication/mainC/CLogin')));
const CMainpage = Loadable(lazy(() => import('views/pages/authentication/mainC/CMainpage')));
const CMypage = Loadable(lazy(() => import('views/pages/authentication/mypage/CMypage')));
const CLibrary = Loadable(lazy(() => import('views/pages/authentication/library/CLibrary')));
const CMypage_info = Loadable(lazy(() => import('views/pages/authentication/mypage/CMypageInfo')));
const CMypage_pay = Loadable(lazy(() => import('views/pages/authentication/mypage/CMypagePay')));
const CMypage_liked = Loadable(lazy(() => import('views/pages/authentication/mypage/CMypageLiked')));
const CMypage_notice = Loadable(lazy(() => import('views/pages/authentication/mypage/CMypageNotice')));
const CMypage_block = Loadable(lazy(() => import('views/pages/authentication/mypage/CMypageBlock')));
const CBookshelf = Loadable(lazy(() => import('views/pages/authentication/bookshelf/CBookshelf')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

// 시작페이지 readme/start
// 로그인 readme/login
// 회원가입
// 메인 방
// 책장 메인
// 빈 책장
// 마이페이지 메인
// 도서관 메인페이지

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/pages/login/login3',
      element: <AuthLogin3 />
    },
    {
      path: '/pages/register/register3',
      element: <AuthRegister3 />
    },
    // By ReadMe
    {
      path: '/readme/register',
      element: <CRegister />
    },
    {
      path: '/readme/start',
      element: <CstartPage />
    },
    {
      path: '/readme/login',
      element: <CLogin />
    },
    {
      path: '/readme/main',
      element: <CMainpage />
    },
    {
      path: '/readme/mypage',
      element: <CMypage />
    },
    {
      path: 'readme/library',
      element: <CLibrary />
    },
    {
      path: 'readme/mypage/info',
      element: <CMypage_info />
    },
    {
      path: 'readme/mypage/pay',
      element: <CMypage_pay />
    },
    {
      path: 'readme/mypage/blocked',
      element: <CMypage_block />
    },
    {
      path: 'readme/mypage/liked',
      element: <CMypage_liked />
    },
    {
      path: 'readme/cs',
      element: <CMypage_notice /> // 모든 고객센터 메뉴 이씅ㅁ.
    },
    {
      path: 'readme/bookshelf',
      element: <CBookshelf />
    }
  ]
};

export default AuthenticationRoutes;
