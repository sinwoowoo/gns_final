<template>
  <div class="page-contents">
    <div class="login container">
      <div class="row">
        <div class="col s12 offset-m3 m6">
          <div class="page-title">
            <div>
              <h2>로그인</h2>
            </div>
          </div>
          <!-- 2017.12.22  보안성검토 계정잠금 10회->5회로 변경-->
          <form id="loginform" name="loginform" method="post">
            <input type="hidden" name="flag" value="" />
            <input
              type="hidden"
              value="https://gns.kt.com/member/login.do"
              name="request_url"
            />
            <input type="hidden" name="mailpass" id="mailpass" value="" />
            <!--2018.02.23 captcha 음성듣기 버그 수정 -->
            <input type="hidden" value="" id="resound" />
            <!-- 2017.12.22  보안성검토 존재하지 않는 아이디 메세지 수정 및 조건수정-->
            <p></p>
            <input
              name="user_id"
              type="text"
              id="txtUserId"
              class="input-id"
              title="아이디"
              style="line-height: 20px"
              autocomplete="off"
              placeholder="아이디"
            />
            <input
              type="password"
              id="txPassword"
              class="input-pw"
              title="비밀번호"
              style="line-height: 20px"
              autocomplete="off"
              placeholder="비밀번호"
            />
            <input name="user_pw" type="hidden" />

            <p>
              <input
                type="checkbox"
                name="id_store"
                id="checkbox"
                value=""
                onclick="chkSaveID();"
              />
              <label for="saveID">아이디 저장</label>
            </p>

            <div id="captchaform">
              <!-- 2019.05.24 captcha 예외처리 긴급배포 로그인 아이디값 파라미터 추가 -->
              <input
                type="hidden"
                name="captchapass_user_Id"
                id="captchapass_user_Id"
                value=""
              />
              <input
                type="hidden"
                name="captchapass"
                id="captchapass"
                value=""
              />
              <input
                type="hidden"
                name="cokicheckid"
                id="cokicheckid"
                value=""
              />

              <div class="validationDiv">
                <!--  <input name="captchaCode" type="text" id="text" class="input-pw" title="보안문자를 입력해주세요" style="line-height: 20px; text-transform:uppercase;" autocomplete="off" placeholder="보안문자를 입력해주세요" onkeydown="javascript:onEnterkey(event, 'login');"> -->

                <!-- 2017.11.24 엔터 오류 수정 2가지 -->
                <!-- <input name="captchaCode" type="text" id="txtcaptchaCode" class="input-pw" title="보안문자를 입력해주세요" style="line-height: 20px; text-transform:uppercase;" autocomplete="off" placeholder="보안문자를 입력해주세요" onkeypress="if(event.keyCode==13){checkMsg()};"> -->
                <!-- 2018.02.23 로그인시 엔터키 잠금 -->
              </div>
              <div style="visibility: hidden" id="soundDiv"></div>
            </div>
          </form>
          <!-- 2019.11.15 쿠키 값 체크를 위해 전송하는 폼 추가  -->
          <form id="cokiForm" name="cokiForm" action="login" method="post">
            <input type="hidden" name="cokiid" id="cokiid" value="" />
            <input type="hidden" name="cokisalt" id="cokisalt" value="" />
          </form>
          <a
            href="javascript:"
            @click="login"
            class="btn btn-block kt-red"
            >로그인</a
          >
          <a href="javascript:join_move();" class="btn btn-flat btn-block"
            >회원가입</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// pinia 로그인 : id, pwd를 전송하여 로그인 처리
/*
import { useUserStore } from "@/stores/user/user.store";

const router = useRouter();

const username = ref('test5');
const password = ref('test5');
const userStore = useUserStore();

const login = async () => { // async 키워드 추가
  try {
    // userStore 인스턴스 사용 및 .value로 실제 값을 전달
    const result = await userStore.login(username.value, password.value);
    console.log("notNeedAuth:", result.config);

    if(result.config.notNeedAuth === true){
      router.push("/");
      //window.location.href = "https://dev.gns.kt.com/main.do";
      console.log("@@@@ 로그인 성공 @@@@@");      
    }

  } catch (error) {
    console.error("로그인 실패:", error);
  }
};
*/
</script>

<style lang="scss" scoped>
.login {
  padding: 40px 0; }
  .login .page-title div {
    height: 64px; }
  .login input[type=text], .login input[type=password] {
    width: 100%;
    vertical-align: bottom;
    padding: .5rem;
    height: 32px;
    line-height: 32px;
    font-size: 1rem;
    border-radius: 2px;
    border: 1px solid #d0d0d0;
    min-width: 100px; }
    .login input[type=text].input-id, .login input[type=password].input-id {
      margin-bottom: .5rem; }
  .login .btn, .login .btn-large {
    margin-bottom: .5rem; }

.join .txt-box {
  height: 200px;
  border-radius: 2px;
  border: 1px solid #d0d0d0;
  padding: 1rem;
  overflow-x: hidden;
  overflow-y: scroll;
  margin-bottom: 1rem; }

.user-info-write {
  width: 100%;
  display: table;
  margin-bottom: 1rem; }
  .user-info-write.read dl:first-child > dd {
    font-weight: bold; }
  .user-info-write dl {
    display: table-row; }
    .user-info-write dl dt, .user-info-write dl dd {
      display: table-cell;
      padding: 1rem;
      border-top: 1px solid #d0d0d0;
      vertical-align: middle; }
    .user-info-write dl:first-child dd {
      border-top: 2px solid #909090; }
    .user-info-write dl:first-child dt {
      border-top: 2px solid #e51c23; }
    .user-info-write dl dt {
      width: 15%;
      color: #616161;
      font-weight: bold; }
    .user-info-write dl:last-child > dt, .user-info-write dl:last-child > dd {
      border-bottom: 1px solid #909090; }
    .user-info-write dl textarea {
      width: calc(100% - 1rem);
      font-size: 1rem;
      border-radius: 2px;
      border: 1px solid #d0d0d0;
      padding: 0 .5rem; }
</style>
