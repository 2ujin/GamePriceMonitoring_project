# GamePriceMonitoring_project
웹사이트 2곳에 있는 게임 정보 내 가격을 5시간동안 주기적으로 모니터링하여 가져오는 프로그램을 제작

ORIGIN : https://www.origin.com/
STEAM : https://store.steampowered.com/

필수 사항 :
- 가격 정보를 가져와야할 게임 임의 3개
- html 화면에 chart.js 등의 js 라이브러리를 사용하여 가격 값을 출력해줄 것
(프로그램 언어선택 자유)

제작에 참고할 만한 사이트
참고 예시 : https://psprices.com/region-kr/game/122400/pa-keurai-4-dijiteol-goldeu-edisyeon-jepumpan
*위의 예시 사이트는 하루에 한번 PS4 사이트에 있는 가격 정보 내용을 가져와서 출력해주는 사이트 입니다.

Screen Image
------------------------------------------------------------------------------------------------------
##1 첫화면 (5가지 게임의 차트와 게임 이미지)
<img width="948" alt="1" src="https://user-images.githubusercontent.com/42020919/62413899-b8c37680-b64f-11e9-8e3d-21e4868b93d9.PNG">

##2 게임 상세보기 (1가지 게임의 차트와 게임 상세정보)
<img width="950" alt="2" src="https://user-images.githubusercontent.com/42020919/62413900-b95c0d00-b64f-11e9-92be-cfbd6a2cc449.PNG">


Develop Diary
------------------------------------------------------------------------------------------------------

#0726 <br>
STEAM 웹 사이트에서 크롤링을 사용하여 가격 추출하기 <br>

#0727 <br>
기본적인 차트 라이브러리 사용 (alert로 확인까지) <br>

#0728<br>
새벽 2시 ~ 5시 (잠 안와서 개발)<br>
5시에 잠들어서 11시 기상.. 그리고 지금 7시 43분...여전히 개발..<br>
<br>
<br>
azure에서 node.js를 사용하여 steams 크롤링 성공 !! (약 12시간동안 검색하고..헤매고..)<br>

#0729 <br>
현타의 연속이었다... 검색을 아무리해도 답은 안나오고... storage 쓸까 말까 mysql 시도하고 방황했다
그러다 29일 밤.. 우연히 유투브 동영상 강의를 보고.. storage 저장 방법을 알아냈다.

내 생명의 은인 = 유튜브......

#0730 <br>
🌜 왠지 새벽코딩이 잘 될것 같은 새벽 1시다 <br>
azure storage에 값 잘 들어가고...!! 엑셀로 expport까지 됨.
파이썬 사용해서 엑셀 값 배열에 다 넣고.. 이제 이걸 html로 보내서 차트에 값을 넣기만 하면 될 것 같다.
ㅠㅠㅜㅠㅜㅠㅜㅠㅜ 이게 맞는지는 모르겠지만 뭔가 이젠 끝이 보여....눈물난다 ㅎㅎ^^
![image](https://user-images.githubusercontent.com/42020919/62144822-66234b00-b32d-11e9-801f-54cb9defbcd0.png)

* https://m.blog.naver.com/PostView.nhn?blogId=xowww&logNo=220858579104&proxyReferer=https%3A%2F%2Fwww.google.com%2F
* pip install flask

#0731 <br>
flask를 사용해서 python에 저장한 값을 html로 뿌렸다

#0731-2 <br>
프론트엔드 끝냈땅 30분마다 받아오는 값을 이제 파이썬 값을 차트에 넣기만 하면 됨

#0801 <br>
오늘 학교에서 엑셀값과 차트에 날짜도 다 넣었당


## 최종적으로 해야할일
* azure storage에 게임 가격 2개정도 추가하기 - O 갑자기 에러나서 개빡쳤음 시바꺼 진짜
* 엑셀에서 값 가져올 때 날짜정보도 같이 갖고오기 - O 해써 임뫄
* 프론트엔드 수정 - 완벽해 !!!
* 게임 이미지도 넣고 차트도 넣고 ㅎㅎ - 끝끄르끗끝
