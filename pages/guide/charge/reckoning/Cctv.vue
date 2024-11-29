<template>
    <main>
        <div class="row">
		    <div class="col s12 l6">
		        <h3>cctv 요금 상세 조회</h3>
		        <ul class="list-style1">
		          <li>CCTV 계약,약정,속도 구분을 선택 후 조회하시면 요금을 산정합니다.</li>
		        </ul>
		         <div class="user-info-write">
			      <dl>
			        <dt style="width: 17%;">계약구분</dt>
			        <dd>
			        	<fieldset class="search-box">
					    	<div class="select-wrap">
					            <select id="distance" title="검색 옵션 선택"><option value="">선택하세요</option><option value="신규계약">신규계약</option><option value="재계약">재계약</option></select>
					        </div>
					    </fieldset>
			        </dd>
			      </dl>
			       <dl>
			        <dt style="width: 17%;">약정구분</dt>
			        <dd><fieldset class="search-box">
					    	<div class="select-wrap">
					            <select id="dist_code2" title="검색 옵션 선택"><option value="">선택하세요</option><option value="3년약정">3년약정</option><option value="5년약정">5년약정</option><option value="5년어린이">5년어린이</option><option value="무약정">무약정</option></select>
					          </div>
					       </fieldset>
			        </dd>
			      </dl>
			      <dl>
			        <dt style="width: 17%;">속도구분</dt>
			        <dd>
						<fieldset class="search-box">
					    	<div class="select-wrap">
					            <select id="cctv_speed" title="검색 옵션 선택"><option value="">선택하세요</option><option value="10M">10M</option><option value="20M">20M</option><option value="30M">30M</option><option value="40M">40M</option><option value="50M">50M</option><option value="60M">60M</option><option value="70M">70M</option><option value="80M">80M</option><option value="90M">90M</option><option value="100M">100M</option></select>
					         </div>
					     </fieldset>
					</dd>
			      </dl> 
			    
			    </div>
			    <div class="center-align">
			    	<a href="javascript:" class="btn kt-red" onclick="calcul('cctv');">요금조회</a>
			    </div>
		      </div>
		      
		      <div class="col s12 l6">
		        <ul class="list-style1" style="margin-top:22px;">
		          <li>요금조회
		          	<ul>
		          		<li>선택한 정보로 요금을 조회 할 수 있습니다.</li>
		          	</ul>
		          </li>
		        </ul>
		        	<div class="user-info-write">
				      <dl>
				        <dt style="width: 17%;">계약구분</dt>
				        <dd><label for="r_gbn_l" class="kt-label right-m" id="distance_View"></label></dd>
				      </dl>
				     <dl>
				        <dt style="width: 17%;">약정구분</dt>
				        <dd><label for="r_gbn_l" class="kt-label right-m" id="dist_code2_view"></label></dd>
				      </dl>
				      <dl>
				        <dt style="width: 17%;">속도구분</dt>
				        <dd><label for="r_gbn_l" class="kt-label right-m" id="cctv_speed_view"></label></dd>
				      </dl>
				      
				    </div>
		        <ul class="list-style1">
		          <li>이용요금 (VAT별도, 단위:원)&nbsp;&nbsp;&nbsp;<span class="kt-red-text">※ 할인 및 설치비는 별도 적용됩니다.</span></li>
		        </ul>
		        <div class="user-info-write">
			      <dl>
			        <dt style="width: 17%;">이용요금</dt>
			        <dd><label for="r_gbn_l" class="kt-label right-m" id="fee_cctv"></label></dd>
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