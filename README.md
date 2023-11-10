# noBuy 리액트 네이티브 프로젝트

## 사용하는 도구 버전

`[ruby] 2.7.6`  
`[cocoapods] 1.12.1`  
`[node] v16.~`  
`[java] 11`  
`[gradle] 7.3.3`
`[RN] 0.71.8`

## 피그마

## 도구 다운로드

[Nodejs](https://nodejs.org/en/)  
[Android](https://developer.android.com/studio)

## 안드로이드, 자바 경로 설정

```shell
vi ~/.zshrc ## or .bashprofile
```

```bash
# ruby rbenv for RN
eval "$(rbenv init - zsh)"
export PATH="$HOME/.rbenv/bin:$PATH"
eval "$(rbenv init -)"

# android
export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools

# java
export JAVA_HOME=`/usr/libexec/java_home -v 18`
export PATH=$PATH:$JAVA_HOME/bin
```

```shell
source ~/.zshrc ## or .bashprofile
```

## Node 설정

```shell
sudo ln -s "$(which node)" /usr/local/bin/node
```

## 실행 환경

```shell
# STEP 1 Start Meto
yarn start

# STEP 2 Start Device
yarn ios || yarn android
```

### 폰트 (?)

```shell
./assets/fonts 폴더에 폰트 파일 추가 (ttf, otf 확장자만 가능)
npx react-native-assets
```

### 캐쉬 지우기

```shell
yarn - yarn cache clean
Watchman - watchman watch-del-all
Android - cd android && ./gradlew clean && cd ..
iOS - cd ios && pod deintegrate && pod cache clean -all && rm -rf Podfile.lock && cd ..
```

## Log convention

데이터 체크 주석은 /_ 체크 _/로 기록

## GIT convention

feat: 🐲 새로운 기능을 추가
fix: 🐒 버그 수정
refactor: ♻️ 코드 리팩토링
Design: 💄 CSS 등 사용자 UI 디자인 변경
Docs: 📜 문서 및 코멘트 수정
Style: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
Test: 테스트 추가, 테스트 리팩토링(프로덕션 코드 변경 X)
Chore: 빌드 태스트 업데이트, 패키지 매니저를 설정하는 경우(프로덕션 코드 변경 X)
Rename: 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우
Remove: 파일을 삭제하는 작업만 수행한 경우

## 참고자료

[맥(Mac)에 react native 개발 환경 구축하기](https://dev-yakuza.posstree.com/ko/react-native/install-on-mac/)

## 에러 발생

[에러 해결🔑 error Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65.](https://positiveko-til.vercel.app/til/react-native/error65.html#_1-xcode%E1%84%8B%E1%85%A6%E1%84%89%E1%85%A5-derived-data-%E1%84%89%E1%85%A1%E1%86%A8%E1%84%8C%E1%85%A6%E1%84%92%E1%85%A1%E1%84%80%E1%85%B5)
