<template>
  <main>
    <layoutPageTitle
      :path="['kt그룹서비스','기본회선서비스']"
      title="A. 전용회선 서비스"
      description="kt그룹 국가정보통신서비스의<span class='kt-red-text'>전용회선 서비스</span>를 알려드리겠습니다." 
    />
  </main>

  <div class="page-contents">
    <div class="container">    
      <div class="page-tab">
        <div class="current-label">
          <a href="javascript:">기본회선 서비스</a>
        </div>
        <ul>
          <li class="active">
            <a href="javascript:menuMove('/service/leased_basic.do');"
              >기본회선 서비스</a
            >
          </li>
          <li>
            <a href="javascript:menuMove('/service/leased_backbone.do');"
              >백본회선 서비스</a
            >
          </li>

          <li>
            <a href="javascript:menuMove('/service/leasedline_infra.do');"
              >전용회선 인프라</a
            >
          </li>
        </ul>
      </div>

      <div class="radio-tab">
        <ul>
          <li>
            <input type="radio" name="radio-tab" id="t1" value="service_info" checked="checked" />
            <label for="t1"> 서비스 정보</label>
          </li>
          <li>
            <input type="radio" name="radio-tab" id="t2" value="price_info" />
            <label for="t2">요금 안내</label>
          </li>
        </ul>
      </div>
    </div>

    <div class="container service_info">
      <div class="row">
        <div class="col s12">
          <h3>기본회선 서비스 개요</h3>
          <ul class="list-style1">
            <li>기관간 연결수단을 제공하는 전용회선 서비스</li>
            <li>* 접속방식 : E1/T1, DS3, SDH, Ethernet 등</li>
            <li>- 망분리 회선, 단기이용 서비스 포함</li>
          </ul>
          <h3>제공내용</h3>
          <ul class="list-style1">
            <li>9.6Kbps~10Gbps</li>
            <li>(속도별/거리별 정액제)</li>
            <li>*단기이용은 2Mbps 이상부터 적용</li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h3>&lt; 참고 : 단기간 이용서비스 개요 &gt;</h3>
          <div class="left-align">
            <img
              src="@/assets/images/img_leased_basic_new.png"
              alt="tset"
              class="responsive-img2"
            />
          </div>
          <ul class="list-style1">
            <li>
              <b>(정의)</b> 대회·행사·선거 등 한시적인 통신수요에 대해
              기본회선을 사용기간 동안만 과금 하는 서비스
            </li>
            <li>
              <b>(이용요금)</b> 기본회선 1일 24시간, 한 달 30일 기준으로 사용한
              기간을 나누어 일할 계산방식을 적용하며, 사용기간 등이 모호할 경우
              신청시 협의·조정
            </li>
            <br />
            <li>※ 단기이용은 2M 이상부터 제공, 설치 및 철거비 별도 협의</li>
            <li>
              ※ 설치 및 철거비 산정기준 : 장비투자비, 제공거리에 따른 선로설비,
              루트의 이원화 여부 등의 직접비 요소와 인건비 및 제반경비요소를
              고려하여 산정
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container price_info ">
      <div class="col s12 m3 right-align">
        <a href="javascript:" class="btn show-on-small" onclick="openPop();"
          >요금상세조회</a
        >
      </div>

      <div class="row">
        <div class="col s12">
          <h3>기본회선 서비스 요금안내</h3>
          <ul class="list-style1">
            <li>
              단, ATM 접속방식의 경우, VBR/UBR, 단방향 및 비대칭 요금수준은
              1단계 국가정보통신서비스 이용제도와 동일하게 적용
            </li>
            <li>
              "*"로 표시한 속도는 기존 해당속도 이용기관에 한하여 제공(신규 청약
              및 계약변경 불가)
            </li>
          </ul>
          <div class="right-align">
            <label for="r_gbn_l" class="kt-label right-m"
              >(단위 : 원/월, 부가세별도)</label
            >
          </div>
          <table class="centered highlight">
            <thead>
              <tr>
                <th rowspan="2">속도체계</th>
                <th colspan="7">거리체계</th>
              </tr>
              <tr>
                <th>시내</th>
                <th>30Km이내</th>
                <th>50Km이내</th>
                <th>100Km이내</th>
                <th>200Km이내</th>
                <th>300Km이내</th>
                <th>300Km초과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2.4Kbps*</td>
                <td>24,000</td>
                <td>77,000</td>
                <td>107,000</td>
                <td>169,000</td>
                <td>192,000</td>
                <td>215,000</td>
                <td>232,000</td>
              </tr>
              <tr>
                <td>9.6Kbps</td>
                <td>48,000</td>
                <td>153,000</td>
                <td>214,000</td>
                <td>338,000</td>
                <td>384,000</td>
                <td>430,000</td>
                <td>464,000</td>
              </tr>
              <tr>
                <td>56Kbps*</td>
                <td>85,000</td>
                <td>269,000</td>
                <td>375,000</td>
                <td>593,000</td>
                <td>673,000</td>
                <td>754,000</td>
                <td>814,000</td>
              </tr>
              <tr>
                <td>64Kbps</td>
                <td>96,000</td>
                <td>307,000</td>
                <td>428,000</td>
                <td>677,000</td>
                <td>768,000</td>
                <td>861,000</td>
                <td>929,000</td>
              </tr>
              <tr>
                <td>128Kbps*</td>
                <td>106,000</td>
                <td>319,000</td>
                <td>446,000</td>
                <td>711,000</td>
                <td>870,000</td>
                <td>974,000</td>
                <td>1,052,000</td>
              </tr>
              <tr>
                <td>192Kbps*</td>
                <td>143,000</td>
                <td>433,000</td>
                <td>605,000</td>
                <td>963,000</td>
                <td>1,179,000</td>
                <td>1,321,000</td>
                <td>1,427,000</td>
              </tr>
              <tr>
                <td>256Kbps</td>
                <td>180,000</td>
                <td>547,000</td>
                <td>764,000</td>
                <td>1,216,000</td>
                <td>1,489,000</td>
                <td>1,668,000</td>
                <td>1,803,000</td>
              </tr>
              <tr>
                <td>320Kbps*</td>
                <td>195,000</td>
                <td>593,000</td>
                <td>826,000</td>
                <td>1,316,000</td>
                <td>1,612,000</td>
                <td>1,809,000</td>
                <td>1,953,000</td>
              </tr>
              <tr>
                <td>384Kbps</td>
                <td>210,000</td>
                <td>639,000</td>
                <td>889,000</td>
                <td>1,417,000</td>
                <td>1,736,000</td>
                <td>1,950,000</td>
                <td>2,103,000</td>
              </tr>
              <tr>
                <td>448Kbps*</td>
                <td>230,000</td>
                <td>707,000</td>
                <td>984,000</td>
                <td>1,430,000</td>
                <td>1,923,000</td>
                <td>2,157,000</td>
                <td>2,328,000</td>
              </tr>
              <tr>
                <td>512Kbps</td>
                <td>251,000</td>
                <td>711,000</td>
                <td>995,000</td>
                <td>1,444,000</td>
                <td>2,111,000</td>
                <td>2,364,000</td>
                <td>2,554,000</td>
              </tr>
              <tr>
                <td>640Kbps*</td>
                <td>271,000</td>
                <td>714,000</td>
                <td>1,005,000</td>
                <td>1,457,000</td>
                <td>2,297,000</td>
                <td>2,575,000</td>
                <td>2,780,000</td>
              </tr>
              <tr>
                <td>768Kbps</td>
                <td>292,000</td>
                <td>718,000</td>
                <td>1,016,000</td>
                <td>1,471,000</td>
                <td>2,484,000</td>
                <td>2,786,000</td>
                <td>3,006,000</td>
              </tr>
              <tr>
                <td>960Kbps*</td>
                <td>294,000</td>
                <td>722,000</td>
                <td>1,027,000</td>
                <td>1,484,000</td>
                <td>2,747,000</td>
                <td>3,078,000</td>
                <td>3,327,000</td>
              </tr>
              <tr>
                <td>1Mbps</td>
                <td>297,000</td>
                <td>726,000</td>
                <td>1,038,000</td>
                <td>1,497,000</td>
                <td>2,760,000</td>
                <td>3,140,000</td>
                <td>3,394,000</td>
              </tr>
              <tr>
                <td>1.5Mbps</td>
                <td>299,000</td>
                <td>729,000</td>
                <td>1,048,000</td>
                <td>1,511,000</td>
                <td>2,773,000</td>
                <td>3,298,000</td>
                <td>3,549,000</td>
              </tr>
              <tr>
                <td>2Mbps</td>
                <td>301,000</td>
                <td>732,000</td>
                <td>1,056,000</td>
                <td>1,522,000</td>
                <td>2,783,000</td>
                <td>3,421,000</td>
                <td>3,555,000</td>
              </tr>
              <tr>
                <td>3Mbps</td>
                <td>390,000</td>
                <td>832,000</td>
                <td>1,193,000</td>
                <td>1,569,000</td>
                <td>2,974,000</td>
                <td>3,497,000</td>
                <td>3,599,000</td>
              </tr>
              <tr>
                <td>4Mbps</td>
                <td>479,000</td>
                <td>955,000</td>
                <td>1,319,000</td>
                <td>1,865,000</td>
                <td>3,072,000</td>
                <td>3,599,000</td>
                <td>3,625,000</td>
              </tr>
              <tr>
                <td>5Mbps</td>
                <td>567,000</td>
                <td>1,078,000</td>
                <td>1,508,000</td>
                <td>2,100,000</td>
                <td>3,233,000</td>
                <td>3,769,000</td>
                <td>4,180,000</td>
              </tr>
              <tr>
                <td>6Mbps</td>
                <td>592,000</td>
                <td>1,135,000</td>
                <td>1,589,000</td>
                <td>2,269,000</td>
                <td>3,406,000</td>
                <td>3,985,000</td>
                <td>4,538,000</td>
              </tr>
              <tr>
                <td>7Mbps</td>
                <td>633,000</td>
                <td>1,214,000</td>
                <td>1,700,000</td>
                <td>2,428,000</td>
                <td>3,644,000</td>
                <td>4,252,000</td>
                <td>4,856,000</td>
              </tr>
              <tr>
                <td>8Mbps</td>
                <td>648,000</td>
                <td>1,332,000</td>
                <td>1,815,000</td>
                <td>2,592,000</td>
                <td>3,890,000</td>
                <td>4,538,000</td>
                <td>5,187,000</td>
              </tr>
              <tr>
                <td>9Mbps</td>
                <td>703,000</td>
                <td>1,429,000</td>
                <td>1,962,000</td>
                <td>2,822,000</td>
                <td>4,148,000</td>
                <td>4,822,000</td>
                <td>5,510,000</td>
              </tr>
              <tr>
                <td>10Mbps</td>
                <td>760,000</td>
                <td>1,529,000</td>
                <td>2,111,000</td>
                <td>3,057,000</td>
                <td>4,400,000</td>
                <td>5,097,000</td>
                <td>5,822,000</td>
              </tr>
              <tr>
                <td>12Mbps</td>
                <td>782,000</td>
                <td>1,744,000</td>
                <td>2,424,000</td>
                <td>3,183,000</td>
                <td>4,544,000</td>
                <td>5,304,000</td>
                <td>6,061,000</td>
              </tr>
              <tr>
                <td>14Mbps</td>
                <td>812,000</td>
                <td>1,867,000</td>
                <td>2,599,000</td>
                <td>3,408,000</td>
                <td>4,870,000</td>
                <td>5,682,000</td>
                <td>6,497,000</td>
              </tr>
              <tr>
                <td>16Mbps</td>
                <td>865,000</td>
                <td>2,076,000</td>
                <td>2,855,000</td>
                <td>4,327,000</td>
                <td>5,187,000</td>
                <td>5,932,000</td>
                <td>6,921,000</td>
              </tr>
              <tr>
                <td>18Mbps</td>
                <td>919,000</td>
                <td>2,297,000</td>
                <td>3,124,000</td>
                <td>4,592,000</td>
                <td>5,511,000</td>
                <td>6,262,000</td>
                <td>7,406,000</td>
              </tr>
              <tr>
                <td>20Mbps</td>
                <td>972,000</td>
                <td>2,430,000</td>
                <td>3,303,000</td>
                <td>4,858,000</td>
                <td>5,834,000</td>
                <td>6,592,000</td>
                <td>7,772,000</td>
              </tr>
              <tr>
                <td>22Mbps</td>
                <td>1,044,000</td>
                <td>2,701,000</td>
                <td>3,628,000</td>
                <td>5,117,000</td>
                <td>6,215,000</td>
                <td>7,303,000</td>
                <td>8,288,000</td>
              </tr>
              <tr>
                <td>24Mbps</td>
                <td>1,112,000</td>
                <td>2,891,000</td>
                <td>3,890,000</td>
                <td>5,559,000</td>
                <td>6,664,000</td>
                <td>7,830,000</td>
                <td>8,887,000</td>
              </tr>
              <tr>
                <td>26Mbps</td>
                <td>1,175,000</td>
                <td>3,053,000</td>
                <td>4,111,000</td>
                <td>5,874,000</td>
                <td>7,373,000</td>
                <td>8,277,000</td>
                <td>8,924,000</td>
              </tr>
              <tr>
                <td>28Mbps</td>
                <td>1,232,000</td>
                <td>3,085,000</td>
                <td>4,445,000</td>
                <td>6,247,000</td>
                <td>8,344,000</td>
                <td>9,096,000</td>
                <td>9,180,000</td>
              </tr>
              <tr>
                <td>30Mbps</td>
                <td>1,286,000</td>
                <td>3,240,000</td>
                <td>4,675,000</td>
                <td>6,665,000</td>
                <td>8,839,000</td>
                <td>9,636,000</td>
                <td>9,725,000</td>
              </tr>
              <tr>
                <td>35Mbps</td>
                <td>1,334,000</td>
                <td>3,416,000</td>
                <td>4,766,000</td>
                <td>6,806,000</td>
                <td>9,056,000</td>
                <td>9,870,000</td>
                <td>10,387,000</td>
              </tr>
              <tr>
                <td>40Mbps</td>
                <td>1,383,000</td>
                <td>3,594,000</td>
                <td>4,841,000</td>
                <td>6,920,000</td>
                <td>9,247,000</td>
                <td>10,089,000</td>
                <td>11,069,000</td>
              </tr>
              <tr>
                <td>45Mbps</td>
                <td>1,479,000</td>
                <td>3,848,000</td>
                <td>5,178,000</td>
                <td>7,418,000</td>
                <td>9,492,000</td>
                <td>10,354,000</td>
                <td>11,835,000</td>
              </tr>
              <tr>
                <td>50Mbps</td>
                <td>1,541,000</td>
                <td>3,916,000</td>
                <td>5,270,000</td>
                <td>7,531,000</td>
                <td>9,641,000</td>
                <td>10,538,000</td>
                <td>12,051,000</td>
              </tr>
              <tr>
                <td>55Mbps</td>
                <td>1,590,000</td>
                <td>4,084,000</td>
                <td>5,498,000</td>
                <td>7,855,000</td>
                <td>9,793,000</td>
                <td>10,997,000</td>
                <td>12,581,000</td>
              </tr>
              <tr>
                <td>60Mbps</td>
                <td>1,637,000</td>
                <td>4,256,000</td>
                <td>5,729,000</td>
                <td>8,182,000</td>
                <td>9,945,000</td>
                <td>11,449,000</td>
                <td>13,103,000</td>
              </tr>
              <tr>
                <td>65Mbps</td>
                <td>1,702,000</td>
                <td>4,339,000</td>
                <td>5,957,000</td>
                <td>8,508,000</td>
                <td>10,271,000</td>
                <td>11,913,000</td>
                <td>13,622,000</td>
              </tr>
              <tr>
                <td>70Mbps</td>
                <td>1,768,000</td>
                <td>4,421,000</td>
                <td>6,188,000</td>
                <td>8,836,000</td>
                <td>10,600,000</td>
                <td>12,381,000</td>
                <td>14,147,000</td>
              </tr>
              <tr>
                <td>75Mbps</td>
                <td>1,776,000</td>
                <td>4,488,000</td>
                <td>6,225,000</td>
                <td>8,878,000</td>
                <td>10,651,000</td>
                <td>12,439,000</td>
                <td>14,211,000</td>
              </tr>
              <tr>
                <td>80Mbps</td>
                <td>1,784,000</td>
                <td>4,499,000</td>
                <td>6,262,000</td>
                <td>8,920,000</td>
                <td>10,702,000</td>
                <td>12,497,000</td>
                <td>14,275,000</td>
              </tr>
              <tr>
                <td>85Mbps</td>
                <td>1,792,000</td>
                <td>4,510,000</td>
                <td>6,299,000</td>
                <td>8,962,000</td>
                <td>10,753,000</td>
                <td>12,555,000</td>
                <td>14,339,000</td>
              </tr>
              <tr>
                <td>90Mbps</td>
                <td>1,800,000</td>
                <td>4,521,000</td>
                <td>6,336,000</td>
                <td>9,004,000</td>
                <td>10,804,000</td>
                <td>12,613,000</td>
                <td>14,403,000</td>
              </tr>
              <tr>
                <td>95Mbps*</td>
                <td>1,808,000</td>
                <td>4,532,000</td>
                <td>6,373,000</td>
                <td>9,046,000</td>
                <td>10,855,000</td>
                <td>12,671,000</td>
                <td>14,467,000</td>
              </tr>
              <tr>
                <td>100Mbps</td>
                <td>1,817,000</td>
                <td>4,544,000</td>
                <td>6,410,000</td>
                <td>9,091,000</td>
                <td>10,906,000</td>
                <td>12,729,000</td>
                <td>14,536,000</td>
              </tr>
              <tr>
                <td>155Mbps</td>
                <td>2,289,000</td>
                <td>5,387,000</td>
                <td>7,540,000</td>
                <td>10,833,000</td>
                <td>12,924,000</td>
                <td>15,099,000</td>
                <td>17,251,000</td>
              </tr>
              <tr>
                <td>200Mbps</td>
                <td>2,560,000</td>
                <td>6,400,000</td>
                <td>8,963,000</td>
                <td>12,794,000</td>
                <td>15,368,000</td>
                <td>17,909,000</td>
                <td>20,480,000</td>
              </tr>
              <tr>
                <td>300Mbps</td>
                <td>3,160,000</td>
                <td>7,900,000</td>
                <td>11,064,000</td>
                <td>15,814,000</td>
                <td>18,971,000</td>
                <td>22,135,000</td>
                <td>25,302,000</td>
              </tr>
              <tr>
                <td>400Mbps</td>
                <td>3,416,000</td>
                <td>8,886,000</td>
                <td>13,670,000</td>
                <td>17,077,000</td>
                <td>20,509,000</td>
                <td>23,931,000</td>
                <td>27,341,000</td>
              </tr>
              <tr>
                <td>500Mbps</td>
                <td>3,671,000</td>
                <td>9,551,000</td>
                <td>14,690,000</td>
                <td>18,364,000</td>
                <td>22,028,000</td>
                <td>25,707,000</td>
                <td>29,369,000</td>
              </tr>
              <tr>
                <td>600Mbps(622Mbps)</td>
                <td>3,983,000</td>
                <td>10,354,000</td>
                <td>15,938,000</td>
                <td>19,906,000</td>
                <td>23,918,000</td>
                <td>27,896,000</td>
                <td>31,861,000</td>
              </tr>
              <tr>
                <td>700Mbps</td>
                <td>4,255,000</td>
                <td>11,058,000</td>
                <td>17,024,000</td>
                <td>21,261,000</td>
                <td>25,548,000</td>
                <td>29,796,000</td>
                <td>34,016,000</td>
              </tr>
              <tr>
                <td>800Mbps</td>
                <td>4,601,000</td>
                <td>11,962,000</td>
                <td>18,414,000</td>
                <td>23,000,000</td>
                <td>27,589,000</td>
                <td>32,190,000</td>
                <td>36,808,000</td>
              </tr>
              <tr>
                <td>900Mbps</td>
                <td>4,875,000</td>
                <td>12,325,000</td>
                <td>19,138,000</td>
                <td>24,989,000</td>
                <td>32,311,000</td>
                <td>35,370,000</td>
                <td>37,371,000</td>
              </tr>
              <tr>
                <td>1Gbps</td>
                <td>5,138,000</td>
                <td>12,613,000</td>
                <td>19,770,000</td>
                <td>27,014,000</td>
                <td>36,148,000</td>
                <td>37,164,000</td>
                <td>38,181,000</td>
              </tr>
              <tr>
                <td>1.5Gbps</td>
                <td>6,336,000</td>
                <td>17,198,000</td>
                <td>24,015,000</td>
                <td>30,454,000</td>
                <td>37,381,000</td>
                <td>43,164,000</td>
                <td>44,894,000</td>
              </tr>
              <tr>
                <td>2Gbps</td>
                <td>6,646,000</td>
                <td>17,806,000</td>
                <td>24,645,000</td>
                <td>31,427,000</td>
                <td>38,051,000</td>
                <td>44,177,000</td>
                <td>46,096,000</td>
              </tr>
              <tr>
                <td>2.5Gbps</td>
                <td>6,957,000</td>
                <td>20,175,000</td>
                <td>25,688,000</td>
                <td>32,831,000</td>
                <td>40,207,000</td>
                <td>46,798,000</td>
                <td>51,936,000</td>
              </tr>
              <tr>
                <td>5Gbps</td>
                <td>8,552,000</td>
                <td>23,873,000</td>
                <td>31,581,000</td>
                <td>37,947,000</td>
                <td>47,403,000</td>
                <td>50,730,000</td>
                <td>59,859,000</td>
              </tr>
              <tr>
                <td>7.5Gbps*</td>
                <td>10,149,000</td>
                <td>28,329,000</td>
                <td>38,099,000</td>
                <td>47,155,000</td>
                <td>57,470,000</td>
                <td>63,244,000</td>
                <td>73,396,000</td>
              </tr>
              <tr>
                <td>10Gbps</td>
                <td>11,745,000</td>
                <td>32,783,000</td>
                <td>44,813,000</td>
                <td>56,936,000</td>
                <td>67,537,000</td>
                <td>76,540,000</td>
                <td>87,676,000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h3>망분리회선 : 기본회선서비스 대상</h3>
          <ul class="list-style1">
            <li>
              망분리회선의 구간별 합산요금에 대하여 해당 인하율만큼 인하하여
              저렴한 요금으로 제공
            </li>
            <li>동일루트, 동일장비를 통해 사용하는 추가회선에 적용</li>
            <li>다량/다회선 할인 중복 적용 불가</li>
          </ul>
          <table class="centered">
            <thead>
              <tr>
                <th>구분</th>
                <th>2회선</th>
                <th>3회선</th>
                <th>4회선이상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-end-bottom">인하율</td>
                <td class="border-end-bottom">15%</td>
                <td class="border-end-bottom">17%</td>
                <td class="border-end-bottom">20%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h3>단기이용 : 기본회선서비스/인터넷서비스 대상 (할인 적용 불가)</h3>
          <ul class="list-style1">
            <li>단기이용은 2M 이상부터 제공, 설치 및 철거비 별도 협의</li>
            <li>
              설치 및 철거비 산정기준 : 장비투자비, 제공거리에 따른 선로설비,
              루트의 이원화 여부 등의 직접비 요소와 인건비 및 제반경비요소를
              고려하여 산정
            </li>
          </ul>
          <table class="centered">
            <thead>
              <tr>
                <th>
                  단기이용 : 기본회선서비스/인터넷서비스 대상(할인적용 불가)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-end-bottom">
                  단기회선이용요금 = (기준요금/30일 * 사용일수)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col s12 l6">
          <h3>예비회선 할인</h3>
          <table class="centered">
            <thead>
              <tr>
                <th colspan="2">구분</th>
                <th>용도설명</th>
                <th>할인율(%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colspan="2">재해복구</td>
                <td>
                  기관의 재해대비 복구회선 재해가 발생하지 않은 평시에도
                  재해복구 훈련 등 주기적으로 활용할 수 있음
                </td>
                <td>50%</td>
              </tr>
              <tr>
                <td rowspan="2" class="border-end-bottom">이중화</td>
                <td>예비백업</td>
                <td>
                  주/예비 회선으로 운영하고 평상시 예비회선에는 트래픽이
                  전송되지 않고 장애 시에만 트래픽이 전송됨
                </td>
                <td>추가회선에 대해 50%</td>
              </tr>
              <tr>
                <td>부하분산</td>
                <td>
                  주/부 회선의 각 2개 회선을 운영하며, 평상시 양쪽회선에
                  트래픽이 분산 전송되다가 장애시에는 정상회선으로 트래픽 전부
                  전송 * 부회선은 주회선 대역폭의 70% 이상인 경우 해당
                </td>
                <td>추가회선에 대해 40%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col s12 l6">
          <h3>장기계약 할인</h3>
          <table class="centered">
            <thead>
              <tr>
                <th>구분</th>
                <th>2년이상 3년미만</th>
                <th>3년이상 5년미만</th>
                <th>5년이상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-end-bottom">할인율</td>
                <td class="border-end-bottom">7%</td>
                <td class="border-end-bottom">12%</td>
                <td class="border-end-bottom">14%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h3>다량이용금액 할인</h3>
          <ul class="list-style1">
            <li>요금납입책임자 기준, 월 납부금액에 따른 이용요금 할인</li>
          </ul>
          <table class="centered">
            <thead>
              <tr>
                <th>구분</th>
                <th>5백~1천만</th>
                <th>~3천만</th>
                <th>~5천만</th>
                <th>~1억</th>
                <th>~3억</th>
                <th>~5억</th>
                <th>~10억</th>
                <th>~15억</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-end-bottom">할인율</td>
                <td class="border-end-bottom">2%</td>
                <td class="border-end-bottom">3%</td>
                <td class="border-end-bottom">4%</td>
                <td class="border-end-bottom">6%</td>
                <td class="border-end-bottom">8%</td>
                <td class="border-end-bottom">10%</td>
                <td class="border-end-bottom">12%</td>
                <td class="border-end-bottom">15%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="row">
        <div class="col s12">
          <h3>다회선이용 할인</h3>
          <ul class="list-style1">
            <li>요금납입책임자 기준, 이용회선수에 따른 이용요금 할인</li>
          </ul>
          <table class="centered">
            <thead>
              <tr>
                <th>구분</th>
                <th>3~9회선</th>
                <th>10~49회선</th>
                <th>50~99회선</th>
                <th>100~399회선</th>
                <th>400~699회선</th>
                <th>700~999회선</th>
                <th>1000회선 이상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-end-bottom">할인율</td>
                <td class="border-end-bottom">4%</td>
                <td class="border-end-bottom">6%</td>
                <td class="border-end-bottom">7%</td>
                <td class="border-end-bottom">8%</td>
                <td class="border-end-bottom">8%</td>
                <td class="border-end-bottom">8%</td>
                <td class="border-end-bottom">8%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>



<div class="popup">
  <div class="page-contents">
		<div class="container">
			<div class="page-title" style="height:auto">
		      <div style="height:auto">
		        <h2>기본회선 서비스 요금상세조회</h2>
		        <p>kt그룹 국가정보통신서비스의 <span class="kt-red-text">기본회선 서비스 요금상세조회</span>를 알려드리겠습니다.</p>
		      </div>
		  </div>
			
      <div class="row">
          <div class="col s12 l6">
              <h3>요금 상세 조회</h3>
              <ul class="list-style1">
                <li>회선을 설치할 지역을 선택 후 조회하시면, 설치 거리에 따른 요금을 산정합니다.
                  <ul>
                    <li>찾으실 지역의 동/읍/면 이름을 공백 없이 입력해주세요.</li>
                </ul>
                </li>
              </ul>
              <div class="user-info-write">
              <dl>
                <dt style="width: 17%;">상위주소</dt>
                <dd><input type="text" class="kt-input ml_0" title="상위주소" name="topStationText" id="topStationText"> <a href="javascript:" class="btn" onclick="stationSearch('T')">검색</a><br>
                  <div class="select-wrap">
                      <select name="topStationCombo" id="topStationCombo" title="검색 옵션 선택">
                        <option value="" selected>상위주소 입력 후 검색 결과에서 상세 주소를 선택하세요</option>                      
                      </select>
                    </div>
                </dd>
              </dl>
              <dl>
                <dt style="width: 17%;">하위주소</dt>
                <dd>
                  <input type="text" class="kt-input ml_0" title="하위주소" name="subStationText" id="subStationText"> <a href="javascript:" class="btn" onclick="stationSearch('S')">검색</a><br>
                  <div class="select-wrap">
                    <select name="subStationCombo" id="subStationCombo" title="검색 옵션 선택">
                      <option value="" selected>하위주소 입력 후 검색 결과에서 상세 주소를 선택하세요</option>                         
                    </select>
                  </div>
                </dd>
              </dl>
              <dl>
                <dt style="width: 17%;">속도</dt>
                <dd>
              <div class="select-wrap">
                      <select name="speed" id="speed" title="검색 옵션 선택"><option value="">선택하세요</option><option value="2.K">2.K</option><option value="2.4K">2.4K</option><option value="9.6K">9.6K</option><option value="56K">56K</option><option value="64k">64k</option><option value="128K">128K</option><option value="192K">192K</option><option value="256K">256K</option><option value="320K">320K</option><option value="384K">384K</option><option value="448K">448K</option><option value="512K">512K</option><option value="640K">640K</option><option value="768K">768K</option><option value="960K">960K</option><option value="1M">1M</option><option value="1.5M">1.5M</option><option value="2M">2M</option><option value="3M">3M</option><option value="4M">4M</option><option value="5M">5M</option><option value="6M">6M</option><option value="7M">7M</option><option value="8M">8M</option><option value="9M">9M</option><option value="10M">10M</option><option value="12M">12M</option><option value="14M">14M</option><option value="16M">16M</option><option value="18M">18M</option><option value="20M">20M</option><option value="22M">22M</option><option value="24M">24M</option><option value="26M">26M</option><option value="28M">28M</option><option value="30M">30M</option><option value="35M">35M</option><option value="40M">40M</option><option value="45M">45M</option><option value="50M">50M</option><option value="55M">55M</option><option value="60M">60M</option><option value="65M">65M</option><option value="70M">70M</option><option value="75M">75M</option><option value="80M">80M</option><option value="85M">85M</option><option value="90M">90M</option><option value="95M">95M</option><option value="100M">100M</option><option value="155M">155M</option><option value="200M">200M</option><option value="300M">300M</option><option value="400M">400M</option><option value="500M">500M</option><option value="622M">622M</option><option value="700M">700M</option><option value="800M">800M</option><option value="900M">900M</option><option value="1G">1G</option><option value="1.5G">1.5G</option><option value="2G">2G</option><option value="2.5G">2.5G</option><option value="5G">5G</option><option value="7.5G">7.5G</option><option value="10G">10G</option></select>
                  </div>
            </dd>
              </dl>
            </div>
            <div class="center-align">
              <a href="javascript:" class="btn kt-red" onclick="calcul('basic');">요금조회</a>
            </div>
            </div>
            
            <div class="col s12 l6">
              <ul class="list-style1" style="margin-top:43px;">
                <li>요금조회
                  <ul>
                    <li>선택한 정보로 요금을 조회 할 수 있습니다.</li>
                  </ul>
                </li>
              </ul>
              <div class="user-info-write">
              <dl>
                <dt style="width: 17%;">상위주소</dt>
                <dd><label for="r_gbn_l" class="kt-label right-m" id="topStationView"></label></dd>
              </dl>
              <dl>
                <dt style="width: 17%;">하위주소</dt>
                <dd><label for="r_gbn_l" class="kt-label right-m" id="subStationView"></label></dd>
              </dl>
              <dl>
                <dt style="width: 17%;">속도</dt>
                <dd><label for="r_gbn_l" class="kt-label right-m" id="speedView"></label></dd>
              </dl>
            </div>
              <br>
              <ul class="list-style1">
                <li>월 이용요금 (VAT별도, 단위:원)&nbsp;&nbsp;&nbsp;<span class="kt-red-text">※ 할인 및 설치비는 별도 적용됩니다.</span></li>
              </ul>
              <div class="user-info-write">
              <dl>
                <dt style="width: 20%;" id="dist_gubun">총설치거리</dt>
                <dd><label for="r_gbn_l" class="kt-label right-m" id="displayDistance"></label></dd>
              </dl>
              <dl>
                <dt style="width: 20%;">이용요금</dt>
                <dd><label for="r_gbn_l" class="kt-label right-m" id="fee"></label></dd>
              </dl>
            </div>
      </div>
          
      </div>
	  
      <!-- 임시변수 -->    
      <input type="hidden" id="dist_code" name="dist_code" value="">
      <input type="hidden" name="cctvYN" id="cctvYN" value="N">
      <input type="hidden" name="internetYN" id="internetYN" value="N">
      <div class="center" style="padding: 20px;">
        <a href="javascript:" class="btn" onclick="calcul('basic');">닫기</a>
      </div>
		</div>        
	</div>    
</div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.page-title {
  position: relative;
  background: url("@/assets/images/line_h2_text.gif") 0 100% repeat-x;
  margin-top: 2rem;
  margin-bottom: 3rem;
}

.page-title div h2 {
  margin: 0;
  margin-right: 1rem;
  display: inline-block;
  color: #e51c23;
  font-size: 2rem;
  font-weight: normal;
  height: 100%;
  background: url("@/assets/images/line_h2_title.gif") 0 100% repeat-x;
  position: absolute;
}

.page-title div p {
  font-size: 13px;
  display: inline-block;
  color: #9e9e9e;
  margin: 0;
  padding: 3.5rem 0 2rem 0;
}

.page-title ul {
  position: absolute;
  right: 0;
  top: 10px;
  overflow: hidden;
  margin: 0;
}

.page-title ul li {
  float: left;
  height: 28px;
  line-height: 28px;
  display: inline-block;
  color: #9e9e9e;
  padding-right: 1.5rem;
  padding-left: 0.5rem;
  background: url("@/assets/images/bullet_rocation_arrow.gif") 100% 0 no-repeat;
  font-size: 0.9rem;
}

.page-title ul li:last-child {
  padding-right: 0;
  background: none;
  color: #424242;
}
.page-title ul li:last-child a {
  color: #039be5;
}
.kt-red-text {
  color: #e51c23 !important;
}

div.page-contents h3 {
  margin: 0;
  margin-bottom: 1rem;
  font-size: 1.1rem;
  position: relative;
  line-height: 2.6rem;
  color: #424242;
}

div.page-contents ul.list-style1 li {
  padding-left: 1rem;
  position: relative;
  margin-bottom: 0.4rem;
}

div.page-contents h3:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 1.2rem;
  height: 2px;
  background: #e51c23;
}

div.page-contents {
  margin-bottom: 5rem;
  line-height: 1.5;
  color: #757575;
}

.page-tab {
  position: relative;
  margin-bottom: 2rem;
}
.page-tab.active ul {
  display: block;
}
.page-tab.active div.current-label > a:after {
  content: "expand_less";
}
.page-tab div.current-label > a {
  display: block;
  font-size: 1.2rem;
  padding: 0.8rem 0.2rem;
  color: #e51c23;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
  position: relative;
}
.page-tab div.current-label > a:after {
  position: absolute;
  top: calc(50% - 12px);
  right: 1rem;
  font-size: 24px;
  content: "expand_more";
  font-family: "Material Icons";
  color: inherit;
}
.page-tab ul {
  display: none;
  position: absolute;
  width: 100%;
  top: calc(100% + 2rem);
  left: 0;
  margin: 0;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.24), 0 1px 7px 0 rgba(0, 0, 0, 0.22),
    0 3px 3px -2px rgba(0, 0, 0, 0.3);
  z-index: 890;
}
.page-tab ul li a {
  display: block;
  font-size: 1.2rem;
  padding: 1rem;
  color: #757575;
  font-weight: bold;
  border-bottom: 1px solid #d1d1d1;
}
.page-tab ul li a:hover {
  color: #e51c23;
}
.page-tab ul li.active > a {
  color: #e51c23;
}
.page-tab ul li:last-child > a {
  border-bottom: none;
}

.page-tab div.current-label {
  display: none;
}
.page-tab ul {
  display: block;
  position: static;
  overflow: hidden;
  border-radius: 0;
  background: url("@/assets/images/tab_line.gif") 0 100% repeat-x;
  box-shadow: none;
}
.page-tab ul li {
  float: left;
  display: inline-block;
}
.page-tab ul li a {
  color: #9e9e9e;
  margin-right: 0.2rem;
  border-radius: 5px 5px 0 0;
  font-weight: bold;
  border: 1px solid transparent;
  border-bottom: none;
}
.page-tab ul li a:hover {
  color: #e51c23;
  background: #eaeaea;
}
.page-tab ul li.active > a {
  background: #fff;
  color: #e51c23;
  border: 1px solid #bdbdbd;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #e51c23;
  box-shadow: inset 0 1px 0 #e51c23;
}

.radio-tab ul {
  margin: 0;
  margin-bottom: 2rem;
  background: #d1d1d1;
  border-radius: 0.4rem;
  display: inline-block;
  box-shadow: inset 0px 1px 3px 0px rgba(0, 0, 0, 0.48);
}
.radio-tab ul li {
  float: left;
}
.radio-tab ul li input[type="radio"] {
  display: none;
}
.radio-tab ul li input[type="select"] {
  display: none;
}
.radio-tab ul li input[type="select"] ~ label i {
  vertical-align: middle;
  font-size: 24px;
}
.radio-tab ul li input[type="radio"]:checked ~ label {
  background: #e51c23;
  color: #fff;
  position: relative;
}
.radio-tab ul li input[type="radio"]:checked ~ label:after {
  position: absolute;
  content: "";
  width: 0;
  height: 0;
  top: 100%;
  left: calc(50% - 0.3rem);
  border-left: 0.6rem solid transparent;
  border-right: 0.6rem solid transparent;
  border-top: 0.6rem solid #f00;
}
.radio-tab ul li input[type="radio"] ~ label {
  display: block;
  border-radius: 0.4rem;
  line-height: 3em;
  height: 3em;
  padding: 0 2rem;
}
.radio-tab ul li input[type="radio"] ~ label i {
  vertical-align: middle;
  font-size: 24px;
}


.popup{
    position: fixed;
    top:0;
    height: 100vh;
    background: #00000050;
    z-index: 10000;
    width: 100%;

    .page-contents{
        padding-top: 5%;
           margin: auto;
           
        .container{
            background: #fff;
            border:1px solid #e1e1e1;
            padding: 0 20px;
            
        }
    }
}

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

      .kt-input {
    padding: 0 .4rem;
    height: 32px;
    line-height: 32px;
    font-size: 1rem;
    border-radius: 2px;
    border: 1px solid #d0d0d0;
    margin: .2rem 0;
    vertical-align: middle;
}

.select-wrap {
  height: 32px;
  overflow: hidden;
  position: relative;
  border: 1px solid #d0d0d0;
  border-radius: 2px;
  display: inline-block;
  cursor: pointer;
  vertical-align: middle;
  background: url(../images/down_arrow.gif) no-repeat 100% 50%; }
  .select-wrap select {
    user-select: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    cursor: pointer;
    padding: 0 .5rem;
    font-size: 1rem;
    border: 0;
    border-radius: 0;
    height: 32px;
    line-height: 32px;
    padding-right: 3rem;
    background: transparent; }
    .select-wrap select::-ms-expand {
      display: none; }

      table {
  width: 100%;
  margin-bottom: 1rem;
  border-collapse: collapse; }
  table.body-scroll {
    overflow-y: scroll; }
  table thead tr:first-child > th {
    border-top: 2px solid #909090; }
    table thead tr:first-child > th:first-child {
      border-top: 2px solid #e51c23; }
  table thead tr > th {
    border-right: none; }
  table thead tr:last-child > th, table thead tr:only-child > th {
    border-bottom: 1px solid #9e9e9e; }
  table th {
    background: #eaeaea;
    color: #616161;
    font-weight: bold; }
  table tr td, table tr th {
    font-size: 1rem;
    padding: .6rem .8rem;
    display: table-cell;
    vertical-align: middle;
    border-top: 1px solid #d0d0d0; }
    table tr td:not(:last-child), table tr th:not(:last-child) {
      border-right: 1px dotted #d0d0d0; }
    table tr td.border-end-bottom, table tr th.border-end-bottom {
      border-bottom: 1px solid #9e9e9e; }
    table tr td.border-end-right, table tr th.border-end-right {
      border-right: 1px dotted #d0d0d0; }
  table tr:last-child td, table tr:last-child th {
    border-bottom: 1px solid #9e9e9e; }
  table.centered thead tr th, table.centered tbody tr td {
    text-align: center; }
  table.highlight > tbody > tr {
    transition: background-color .25s ease; }
    table.highlight > tbody > tr:hover {
      background-color: #fdeaeb; }
  table.striped > tbody > tr:nth-child(odd) {
    background-color: #fafafa; }
  table.striped > tbody > tr > td {
    border-radius: 0; }
  table.vertical-table {
    display: block;
    position: relative; }
    table.vertical-table td:empty:before {
      content: '\00a0'; }
    table.vertical-table th, table.vertical-table td {
      vertical-align: top;
      box-sizing: border-box;
      border-right: 1px dotted #d0d0d0; }
    table.vertical-table thead {
      display: block;
      float: left; }
      table.vertical-table thead tr {
        display: block; }
        table.vertical-table thead tr th {
          border: 1px solid #d0d0d0;
          border-bottom: none; }
          table.vertical-table thead tr th:first-child {
            border-top: 2px solid #e51c23; }
          table.vertical-table thead tr th:last-child {
            border-bottom: 1px solid #909090; }
          table.vertical-table thead tr th::before {
            content: "\00a0"; }
    table.vertical-table tbody {
      display: block;
      width: auto;
      position: relative;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      border-right: 1px solid #d0d0d0;
      font-size: 0; }
      table.vertical-table tbody tr {
        display: inline-block;
        vertical-align: top;
        border-bottom: 1px solid #909090 !important; }
        table.vertical-table tbody tr td, table.vertical-table tbody tr th {
          border-top: 1px solid #d0d0d0; }
        table.vertical-table tbody tr td:first-child, table.vertical-table tbody tr th:first-child {
          border-top: 2px solid #909090; }
        table.vertical-table tbody tr:last-child td, table.vertical-table tbody tr:last-child th {
          border-bottom: none; }
    table.vertical-table th {
      display: block; }
    table.vertical-table td {
      display: block;
      min-height: 1.25em; }
    table.vertical-table tr {
      padding: 0; }
      table.vertical-table tr td.border-end-bottom, table.vertical-table tr td.border-end-bottom {
        border-bottom: none; }
</style>
