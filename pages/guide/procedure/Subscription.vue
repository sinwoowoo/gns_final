<template>
  <main>
    <div class="row">
      <ol class="process">
        <li>
          <div>
              <i>account_box</i>
              <p>1. 이용대상 확인</p>
          </div>
        </li>
        <li>
          <div>
              <i>shopping_cart</i>
              <p>2. 이용서비스 확정</p>
          </div>
        </li>
        <li>
          <div>
              <i>playlist_add_check</i>
              <p>3. 서비스 이용신청 작성 및 kt 송부</p>
          </div>
        </li>
        <li>
          <div>
              <i>event</i>
              <p>4. 서비스 개통일자 확인 및 이용요금 안내</p>
          </div>
        </li>
        <li>
          <div>
              <i>thumb_up</i>
              <p>5. 서비스 개통</p>
          </div>
        </li>
        <li>
          <div>
            <i>receipt</i>
            <p>
                6. 이용요금 납부<br>
                <span>(개통 다음날)</span>
            </p>
          </div>
        </li>
      </ol>
    </div>

    <div class="process-bg">
      <div>
        <h3>이용대상</h3>
          <ul class="list-style1">
            <li>국가기관(행정기관, 입법기관, 사법기관) 및 지방자치단체</li>
            <li>공공기관 운영에 관한 법률 제4조에 따른 공공기관(준정부기관)</li>										          
          </ul>
          <li>※ 단, 공공기관은 "B"그룹 서비스 이용불가, "C"그룹(인터넷전화서비스)을 사용하고자 하는 경우에만 "B"그룹 서비스 이용가능(음성 용도)</li>
      </div>          
    </div>
  </main>
  
</template>

<script lang="ts">
export default {
  name: 'Subscription'
}
</script>

<style lang="scss" scoped>
div {
  display: inline-block;    
  >i{
      font-family: "Material Icons";
      font-style: normal;
      vertical-align: middle;          
      font-size: 50px;
      justify-content: center;
    }
}

.process {
    display: flex;
    padding-left: 50px;
    li {
        width: 20%;
        text-align: center;
        padding-right: 50px;
        position: relative;
        &:not(:last-child){
            
            &::after{
                content: "navigate_next";
                
                display: block;
                font-family: "Material Icons";
                font-weight: normal;
                font-style: normal;
                font-size: 50px;

                position: absolute;
                top: 30px;
                right:0;
            }
        }

        div {
            i {
                font-family: "Material Icons";
                font-style: normal;
                vertical-align: middle;
                font-size: 50px;
                color: #e51c23;
                
            }

            p {
                border-top: 1px solid #d0d0d0;
                font-size: 1rem;
                margin-top: 10px;
                padding-top: 10px;
            }
        }
    }
}

@include tablet {
    .process {
        padding-left: 0;
        flex-wrap: wrap;
        li {
            width: 33%;
        }
    }
}

@include mobile {
    .process {
        padding-left: 0;
        flex-wrap: wrap;
        li {
            width: 50%;
        }
    }
}

.process-bg {
  display: flex;
  padding-left: 50px;
  background-image: url("@/assets/images/img_procedure1.jpg"); 
  background-repeat: no-repeat;
  background-position: 100% 100%;
}

</style>