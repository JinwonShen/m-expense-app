# 💰 MyExpenseApp

React Native + Expo + TypeScript 기반의 **개인 지출 관리 앱**입니다.  
사용자가 **문자 내용을 붙여넣어 자동으로 지출을 등록**할 수 있고,  
캘린더 및 리스트 화면을 통해 내역을 확인할 수 있도록 설계되었습니다.

<br>

## 📱 주요 기능 (MVP)

- 지출 등록: 금액 + 메모 입력, 또는 문자 붙여넣기 파싱
- 지출 내역 확인: FlatList로 전체 내역 출력
- 총 지출 합계 계산
- 데이터 로컬 저장 (AsyncStorage)
- 간편한 화면 이동: Bottom Tab + Floating Action Button

<br>

## 📐 앱 화면 구조

```
[앱 구조]
┌──────────────┐
│  TabNavigator       │
│     ┌─────────────┐ ▼
│     │ 📅 캘린더 탭        → 일별 지출 금액 확인
│     │ 📃 리스트 탭        → 전체 내역 확인
│     │ ➕ FAB 버튼       → 지출 등록 모달로 이동
│     └─────────────┘
└──────────────┘
```

<br>

## 🧱 프로젝트 구조

```
my-expense-app/
├── App.tsx
├── src/
│   ├── screens/
│   │   ├── CalendarScreen.tsx
│   │   ├── ListScreen.tsx
│   │   └── RegisterScreen.tsx
│   ├── components/      # (추후 추가될 입력, 리스트 컴포넌트)
│   ├── utils/           # 파싱, 저장 유틸리티
│   └── types/           # 지출 항목 타입 정의
```

<br>

## 🛠 사용 기술

| 기술                      | 설명                           |
| ------------------------- | ------------------------------ |
| [Expo](https://expo.dev/) | React Native 앱 빠른 개발 환경 |
| React Native              | 모바일 앱 UI 구성 프레임워크   |
| TypeScript                | 타입 안정성 강화               |
| React Navigation          | 화면 전환 및 탭 구성           |
| AsyncStorage              | 로컬 데이터 저장               |

<br>

## 🚀 실행 방법

### 1. 설치

```bash
npm install
```

### 2. 앱 실행

```bash
npx expo start
```

- iOS: `i` 키 → 시뮬레이터 실행
- Android: `a` 키
- 모바일 기기: [Expo Go](https://expo.dev/client) 앱 설치 후 QR코드 스캔

<br>

## ✨ 향후 확장 계획

- [ ] 문자 붙여넣기 → 지출 자동 파싱
- [ ] 지출 항목 카테고리 분류
- [ ] 월별 예산 설정 및 초과 알림
- [ ] 통계 및 차트 시각화
- [ ] 다크모드 지원

<br>

## 👨‍💻 개발자

- GitHub: [JinwonShen](https://github.com/JinwonShen)
