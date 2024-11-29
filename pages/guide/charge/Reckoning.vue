<template>
  <PageSubtab label="" :tabs="tabs" />
	<!--<main>
		<div class="row">
			<div class="col s12 m12 l9">
				<label for="search_llnum" class="kt-label">상품분류 :</label>
				<div class="select-wrap">
					<select class="s_goods" id="basic_goods" title="검색 옵션 선택" onchange="goCharge(this.value)">
						<option value="basic" selected="">기본회선</option>
						<option value="basic">백본회선</option>						
						<option value="ip">인터넷</option>						
						<option value="cctv">CCTV</option>
						<option value="IoT">IoT</option>
					</select>
				</div>
			</div>
		</div>
	</main>-->
</template>

<script setup lang="ts">
  import Basic from "./reckoning/Basic.vue";
  import Cctv  from "./reckoning/Cctv.vue";
  import Iot  from "./reckoning/Iot.vue";
  import Ip  from "./reckoning/Ip.vue";

  const tabs = [    
    { name: 'basic', label: '기본/백본 회선', component: Basic},
    { name: 'ip', label: '인터넷', component: Ip},    
    { name: 'cctv', label: 'CCTV', component: Cctv},
    { name: 'iot', label: 'IOT', component: Iot},    
  ];
</script>

<script lang="ts">
export default {
  name: 'Basic'
}
</script>

<style lang="scss" scoped>
</style>