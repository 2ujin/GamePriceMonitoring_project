# theteams_project
Weekly project about theteams

아래는 과제입니다.
과제 :
아래의 웹사이트 2곳에 있는 게임 정보 내 가격을 5시간동안 주기적으로 모니터링하여 가져오는 프로그램을 제작해보세요.

ORIGIN : https://www.origin.com/
STEAM : https://store.steampowered.com/

필수 사항 :
- 가격 정보를 가져와야할 게임 임의 3개
- html 화면에 chart.js 등의 js 라이브러리를 사용하여 가격 값을 출력해줄 것
(프로그램 언어선택 자유)

제작에 참고할 만한 사이트
참고 예시 : https://psprices.com/region-kr/game/122400/pa-keurai-4-dijiteol-goldeu-edisyeon-jepumpan
*위의 예시 사이트는 하루에 한번 PS4 사이트에 있는 가격 정보 내용을 가져와서 출력해주는 사이트 입니다.

Develop Diary
------------------------------------------------------------------------------------------------------

#0726 <br>
STEAM 웹 사이트에서 크롤링을 사용하여 가격 추출하기 <br>

#0727 <br>
기본적인 차트 라이브러리 사용 (alert로 확인까지) <br>
문제를 발견했다 ! 지금까지 짰던 코드는 생각해보니 실시간이 아니다.. <br> 
일정시간동안 크롤링 하는게 아님 ㅜ 네이버 실시간 검색어로 실험해봄. 해결해야지 ㅜㅜ <br>

#0728<br>
새벽 2시 ~ 5시 (잠 안와서 개발) 하다가 더 스트레스 받아서 잠 못잠 <br>
5시에 잠들어서 11시 기상.. 그리고 지금 7시 43분...여전히 개발..<br>
<br>
진짜.. 눈물난다... 또르륵
<br>
어쨌거나 저쨌거나 고생한 이야기는 티스토리에 적기로 하고<br>
azure에서 node.js를 사용하여 steams 크롤링 성공 !! (약 12시간동안 검색하고..헤매고..)<br>
어제 안됐던 실시간은 해결해따 실시간으로 값 찍힘 ㅎㅎ 네이버 실시간 검색어로 해봄 ㅎㅅㅎ<br>
string -> number(int) 형 변환도 성공.. 이제 DB 연동을 해볼게요,,<br>

#0729 <br>
현타의 연속이었다... 검색을 아무리해도 답은 안나오고... storage 쓸까 말까 mysql 시도하고 방황했다
그러다 29일 밤.. 우연히 유투브 동영상 강의를 보고.. storage 저장 방법을 알아냈다.
진짜 ms에서 쓴 자습서...? 시방 진짜 1도 도움 안됨 ;;

내 생명의 은인 = 유튜브......진짜 사랑합니다. 댓글 남기러 가야겠다 X)

어쨌거나 storage에 넣는 건 5줄이면 끝나는 일 이었다. 연동? 인서트? 그딴거 1도 필요없음 ㅋㅋ;
그래도 기분이 째져 이제 내가 크롤링 한 값이랑 연동만 하면 된다구요 ㅎㅎ;

이제 storage에 담긴 값들로 html에 연동하구 차트 값에 넣기만 하면 됨....... 눈물난다 ㅜㅜ

하 스벌탱 MS 존나 싫어 스발새끼들...... azure fuck you ^^ 

#0730 <br>
🌜 왠지 새벽코딩이 잘 될것 같은 새벽 1시다 <br>
azure storage에 값 잘 들어가고...!! 엑셀로 expport까지 됨.
파이썬 사용해서 엑셀 값 배열에 다 넣고.. 이제 이걸 html로 보내서 차트에 값을 넣기만 하면 될 것 같다.
ㅠㅠㅜㅠㅜㅠㅜㅠㅜ 이게 맞는지는 모르겠지만 뭔가 이젠 끝이 보여....눈물난다 ㅎㅎ^^
![image](https://user-images.githubusercontent.com/42020919/62144822-66234b00-b32d-11e9-801f-54cb9defbcd0.png)

* https://m.blog.naver.com/PostView.nhn?blogId=xowww&logNo=220858579104&proxyReferer=https%3A%2F%2Fwww.google.com%2F
* pip install flask

#0731 <br>
꺅 눈물난당 python에 있는 데이터를 어떻게 html에 넣어야할지 또 폭풍검색이었눈디... <br>
flask를 써야되는데...왜 나만 안되고 이상하다 생각했는데 결국 애초에 프로젝트 만들때 flask 프로젝트가 있었음
ㅋㅋㅋㅋ 허무 어이없음....그래도 어쨌거나 차트에 값 넣는거까지 렬루 성공이다
이제 진짜 프론트엔드만 좀 예뿌게 하면됨..

#0731-2 <br>
프론트엔드 끝냈땅 30분마다 받아오는 값을 이제 파이썬 값을 차트에 넣기만 하면 됨 (=노가다)
이제 그럼 진짜 꿑남 ㅎㅎㅎㅎㅎ 낼은 학교에서 스프링 css해야지....무슨 사이트로 하지
하 진짜... 끝냈다 끝냈어.. 근데 한가지 5시간동안만 시간제어를 어떻게 해야할지 모르겠따
또 고민해봐야지 ^^.. 일주일동안 고생한 나 자신... 진짜 수고많았따..................눈물 한바가지

#0801 <br>
오늘 학교에서 엑셀값과 차트에 날짜도 다 넣었당 드디어 낼 면접이다 떨린다 후하후하


## 최종적으로 해야할일
* azure storage에 게임 가격 2개정도 추가하기 - O 갑자기 에러나서 개빡쳤음 시바꺼 진짜
* 엑셀에서 값 가져올 때 날짜정보도 같이 갖고오기 - O 해써 임뫄
* 프론트엔드 수정 - 완벽해 !!!
* 게임 이미지도 넣고 차트도 넣고 ㅎㅎ - 끝끄르끗끝
