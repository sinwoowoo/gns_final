<template>
    <main>
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
				            <select name="topStationCombo" id="topStationCombo" title="검색 옵션 선택"><option value="">상위주소 입력 후 검색 결과에서 상세 주소를 선택하세요</option></select>
				          </div>
			        </dd>
			      </dl>
			      <dl>
			        <dt style="width: 17%;">하위주소</dt>
			        <dd>
			          <input type="text" class="kt-input ml_0" title="하위주소" name="subStationText" id="subStationText"> <a href="javascript:" class="btn" onclick="stationSearch('S')">검색</a><br>
			          <div class="select-wrap">
			            <select name="subStationCombo" id="subStationCombo" title="검색 옵션 선택"><option value="">하위주소 입력 후 검색 결과에서 상세 주소를 선택하세요</option></select>
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
    </main>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.user-info-write {
	width: 100%;
	display: table;
	margin-bottom: 1rem; 
}

.user-info-write.read dl:first-child > dd {
	font-weight: bold; 
}

.user-info-write dl {
	display: table-row; 
}

.user-info-write dl dt, .user-info-write dl dd {
	display: table-cell;
	padding: 1rem;
	border-top: 1px solid #d0d0d0;
	vertical-align: middle; 
}

.user-info-write dl:first-child dd {
	border-top: 2px solid #909090; 
}

.user-info-write dl:first-child dt {
	border-top: 2px solid #e51c23; 
}

.user-info-write dl dt {
	width: 15%;
	color: #616161;
	font-weight: bold; 
}

.user-info-write dl:last-child > dt, .user-info-write dl:last-child > dd {
	border-bottom: 1px solid #909090; 
}

.user-info-write dl textarea {
	width: calc(100% - 1rem);
	font-size: 1rem;
	border-radius: 2px;
	border: 1px solid #d0d0d0;
	padding: 0 .5rem; 
}
</style>