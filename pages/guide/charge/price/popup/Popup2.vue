<template>
	<section class="layer-page popup2"  @click="emit('close')">
		<div class="layer-main">
			<layoutLayerTitle
				title="2단계 요금정보"
				description="kt그룹 국가정보통신서비스의 <span class='kt-red-text'>2단계 요금정보</span>를 알려드리겠습니다."
			/>
			<div class="layer-content">
				<div class="row">
					<div class="col s12">
						<h3>기본회선서비스</h3>
						<div class="right-align">
							<label for="r_gbn_l" class="kt-label right-m">(단위 : 원/월,
								부가세별도)</label>
						</div>
						<table class="centered highlight">
							<thead>
								<tr>
									<th rowspan="2">속도체계(Mbps)</th>
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
									<td>733,000</td>
									<td>1,059,000</td>
									<td>1,524,000</td>
									<td>2,786,000</td>
									<td>3,456,000</td>
									<td>3,704,000</td>
								</tr>
								<tr>
									<td>3Mbps*</td>
									<td>390,000</td>
									<td>849,000</td>
									<td>1,211,000</td>
									<td>1,724,000</td>
									<td>3,091,000</td>
									<td>3,818,000</td>
									<td>4,090,000</td>
								</tr>
								<tr>
									<td>4Mbps</td>
									<td>479,000</td>
									<td>964,000</td>
									<td>1,363,000</td>
									<td>1,925,000</td>
									<td>3,395,000</td>
									<td>4,180,000</td>
									<td>4,476,000</td>
								</tr>
								<tr>
									<td>5Mbps</td>
									<td>567,000</td>
									<td>1,080,000</td>
									<td>1,514,000</td>
									<td>2,126,000</td>
									<td>3,699,000</td>
									<td>4,541,000</td>
									<td>4,861,000</td>
								</tr>
								<tr>
									<td>6Mbps</td>
									<td>610,000</td>
									<td>1,177,000</td>
									<td>1,657,000</td>
									<td>2,332,000</td>
									<td>4,069,000</td>
									<td>5,000,000</td>
									<td>5,352,000</td>
								</tr>
								<tr>
									<td>7Mbps*</td>
									<td>653,000</td>
									<td>1,274,000</td>
									<td>1,799,000</td>
									<td>2,537,000</td>
									<td>4,439,000</td>
									<td>5,458,000</td>
									<td>5,843,000</td>
								</tr>
								<tr>
									<td>8Mbps</td>
									<td>697,000</td>
									<td>1,373,000</td>
									<td>1,941,000</td>
									<td>2,743,000</td>
									<td>4,809,000</td>
									<td>5,916,000</td>
									<td>6,333,000</td>
								</tr>
								<tr>
									<td>10Mbps</td>
									<td>783,000</td>
									<td>1,568,000</td>
									<td>2,227,000</td>
									<td>3,155,000</td>
									<td>5,549,000</td>
									<td>6,832,000</td>
									<td>7,314,000</td>
								</tr>
								<tr>
									<td>12Mbps</td>
									<td>842,000</td>
									<td>1,772,000</td>
									<td>2,530,000</td>
									<td>3,592,000</td>
									<td>6,409,000</td>
									<td>7,917,000</td>
									<td>8,477,000</td>
								</tr>
								<tr>
									<td>14Mbps</td>
									<td>902,000</td>
									<td>1,976,000</td>
									<td>2,834,000</td>
									<td>4,028,000</td>
									<td>7,269,000</td>
									<td>9,004,000</td>
									<td>9,639,000</td>
								</tr>
								<tr>
									<td>16Mbps</td>
									<td>961,000</td>
									<td>2,181,000</td>
									<td>3,137,000</td>
									<td>4,465,000</td>
									<td>8,130,000</td>
									<td>9,726,000</td>
									<td>10,503,000</td>
								</tr>
								<tr>
									<td>18Mbps</td>
									<td>1,021,000</td>
									<td>2,385,000</td>
									<td>3,441,000</td>
									<td>4,901,000</td>
									<td>8,991,000</td>
									<td>10,267,000</td>
									<td>11,087,000</td>
								</tr>
								<tr>
									<td>20Mbps</td>
									<td>1,080,000</td>
									<td>2,588,000</td>
									<td>3,745,000</td>
									<td>5,338,000</td>
									<td>9,643,000</td>
									<td>10,807,000</td>
									<td>11,670,000</td>
								</tr>
								<tr>
									<td>22Mbps</td>
									<td>1,160,000</td>
									<td>2,794,000</td>
									<td>4,049,000</td>
									<td>5,848,000</td>
									<td>10,393,000</td>
									<td>11,648,000</td>
									<td>12,578,000</td>
								</tr>
								<tr>
									<td>24Mbps</td>
									<td>1,235,000</td>
									<td>2,990,000</td>
									<td>4,341,000</td>
									<td>6,353,000</td>
									<td>11,143,000</td>
									<td>12,488,000</td>
									<td>13,486,000</td>
								</tr>
								<tr>
									<td>26Mbps</td>
									<td>1,305,000</td>
									<td>3,177,000</td>
									<td>4,619,000</td>
									<td>6,854,000</td>
									<td>11,893,000</td>
									<td>13,329,000</td>
									<td>14,393,000</td>
								</tr>
								<tr>
									<td>28Mbps</td>
									<td>1,369,000</td>
									<td>3,354,000</td>
									<td>4,885,000</td>
									<td>7,350,000</td>
									<td>12,643,000</td>
									<td>14,169,000</td>
									<td>15,301,000</td>
								</tr>
								<tr>
									<td>30Mbps</td>
									<td>1,429,000</td>
									<td>3,522,000</td>
									<td>5,138,000</td>
									<td>7,842,000</td>
									<td>13,393,000</td>
									<td>15,010,000</td>
									<td>16,209,000</td>
								</tr>
								<tr>
									<td>35Mbps</td>
									<td>1,483,000</td>
									<td>3,700,000</td>
									<td>5,417,000</td>
									<td>8,290,000</td>
									<td>14,106,000</td>
									<td>15,655,000</td>
									<td>16,904,000</td>
								</tr>
								<tr>
									<td>40Mbps</td>
									<td>1,537,000</td>
									<td>3,878,000</td>
									<td>5,696,000</td>
									<td>8,738,000</td>
									<td>14,819,000</td>
									<td>16,299,000</td>
									<td>17,599,000</td>
								</tr>
								<tr>
									<td>45Mbps</td>
									<td>1,644,000</td>
									<td>4,234,000</td>
									<td>6,254,000</td>
									<td>9,634,000</td>
									<td>15,067,000</td>
									<td>16,436,000</td>
									<td>17,745,000</td>
								</tr>
								<tr>
									<td>50Mbps</td>
									<td>1,772,000</td>
									<td>4,410,000</td>
									<td>6,483,000</td>
									<td>9,962,000</td>
									<td>16,286,000</td>
									<td>17,831,000</td>
									<td>19,252,000</td>
								</tr>
								<tr>
									<td>55Mbps</td>
									<td>1,849,000</td>
									<td>4,484,000</td>
									<td>6,550,000</td>
									<td>10,014,000</td>
									<td>16,543,000</td>
									<td>18,719,000</td>
									<td>20,211,000</td>
								</tr>
								<tr>
									<td>60Mbps</td>
									<td>1,926,000</td>
									<td>4,557,000</td>
									<td>6,616,000</td>
									<td>10,065,000</td>
									<td>16,799,000</td>
									<td>19,606,000</td>
									<td>21,169,000</td>
								</tr>
								<tr>
									<td>65Mbps</td>
									<td>2,003,000</td>
									<td>4,631,000</td>
									<td>6,683,000</td>
									<td>10,117,000</td>
									<td>16,839,000</td>
									<td>20,261,000</td>
									<td>21,778,000</td>
								</tr>
								<tr>
									<td>70Mbps</td>
									<td>2,080,000</td>
									<td>4,704,000</td>
									<td>6,749,000</td>
									<td>10,169,000</td>
									<td>16,879,000</td>
									<td>20,915,000</td>
									<td>22,386,000</td>
								</tr>
								<tr>
									<td>75Mbps</td>
									<td>2,157,000</td>
									<td>4,793,000</td>
									<td>7,143,000</td>
									<td>10,701,000</td>
									<td>17,203,000</td>
									<td>21,273,000</td>
									<td>22,789,000</td>
								</tr>
								<tr>
									<td>80Mbps</td>
									<td>2,234,000</td>
									<td>4,883,000</td>
									<td>7,536,000</td>
									<td>11,233,000</td>
									<td>17,526,000</td>
									<td>21,631,000</td>
									<td>23,191,000</td>
								</tr>
								<tr>
									<td>85Mbps</td>
									<td>2,238,000</td>
									<td>4,972,000</td>
									<td>7,632,000</td>
									<td>11,361,000</td>
									<td>17,850,000</td>
									<td>21,989,000</td>
									<td>23,594,000</td>
								</tr>
								<tr>
									<td>90Mbps</td>
									<td>2,243,000</td>
									<td>5,061,000</td>
									<td>7,729,000</td>
									<td>11,488,000</td>
									<td>18,173,000</td>
									<td>22,347,000</td>
									<td>23,996,000</td>
								</tr>
								<tr>
									<td>100Mbps</td>
									<td>2,251,000</td>
									<td>5,240,000</td>
									<td>7,921,000</td>
									<td>11,743,000</td>
									<td>18,820,000</td>
									<td>23,063,000</td>
									<td>24,801,000</td>
								</tr>
								<tr>
									<td>155Mbps</td>
									<td>2,836,000</td>
									<td>6,239,000</td>
									<td>9,645,000</td>
									<td>15,666,000</td>
									<td>22,195,000</td>
									<td>26,939,000</td>
									<td>28,825,000</td>
								</tr>
								<tr>
									<td>200Mbps</td>
									<td>3,171,000</td>
									<td>6,975,000</td>
									<td>10,783,000</td>
									<td>17,514,000</td>
									<td>24,812,000</td>
									<td>30,116,000</td>
									<td>30,842,000</td>
								</tr>
								<tr>
									<td>300Mbps</td>
									<td>3,915,000</td>
									<td>8,609,000</td>
									<td>13,311,000</td>
									<td>21,620,000</td>
									<td>30,630,000</td>
									<td>35,252,000</td>
									<td>35,324,000</td>
								</tr>
								<tr>
									<td>400Mbps</td>
									<td>4,231,000</td>
									<td>9,487,000</td>
									<td>14,744,000</td>
									<td>24,033,000</td>
									<td>34,106,000</td>
									<td>39,735,000</td>
									<td>39,807,000</td>
								</tr>
								<tr>
									<td>500Mbps</td>
									<td>4,548,000</td>
									<td>10,365,000</td>
									<td>16,176,000</td>
									<td>26,445,000</td>
									<td>37,582,000</td>
									<td>44,218,000</td>
									<td>44,291,000</td>
								</tr>
								<tr>
									<td>600Mbps(622Mbps)</td>
									<td>4,933,000</td>
									<td>11,436,000</td>
									<td>17,924,000</td>
									<td>29,389,000</td>
									<td>41,823,000</td>
									<td>49,687,000</td>
									<td>49,760,000</td>
								</tr>
								<tr>
									<td>700Mbps</td>
									<td>5,269,000</td>
									<td>12,215,000</td>
									<td>19,145,000</td>
									<td>31,390,000</td>
									<td>44,672,000</td>
									<td>51,672,000</td>
									<td>52,350,000</td>
								</tr>
								<tr>
									<td>800Mbps</td>
									<td>5,699,000</td>
									<td>13,213,000</td>
									<td>20,709,000</td>
									<td>33,956,000</td>
									<td>48,323,000</td>
									<td>54,216,000</td>
									<td>55,669,000</td>
								</tr>
								<tr>
									<td>900Mbps</td>
									<td>6,130,000</td>
									<td>14,211,000</td>
									<td>22,274,000</td>
									<td>36,522,000</td>
									<td>51,204,000</td>
									<td>55,057,000</td>
									<td>57,219,000</td>
								</tr>
								<tr>
									<td>1Gbps</td>
									<td>6,561,000</td>
									<td>15,209,000</td>
									<td>23,839,000</td>
									<td>39,088,000</td>
									<td>52,304,000</td>
									<td>56,339,000</td>
									<td>59,193,000</td>
								</tr>
								<tr>
									<td>1.5Gbps</td>
									<td>8,090,000</td>
									<td>20,287,000</td>
									<td>28,328,000</td>
									<td>46,548,000</td>
									<td>55,647,000</td>
									<td>60,130,000</td>
									<td>62,945,000</td>
								</tr>
								<tr>
									<td>2Gbps</td>
									<td>8,486,000</td>
									<td>21,235,000</td>
									<td>29,652,000</td>
									<td>48,723,000</td>
									<td>58,990,000</td>
									<td>63,923,000</td>
									<td>66,698,000</td>
								</tr>
								<tr>
									<td>2.5Gbps</td>
									<td>8,883,000</td>
									<td>22,182,000</td>
									<td>30,975,000</td>
									<td>50,898,000</td>
									<td>62,334,000</td>
									<td>67,714,000</td>
									<td>70,451,000</td>
								</tr>
								<tr>
									<td>5Gbps</td>
									<td>10,920,000</td>
									<td>27,272,000</td>
									<td>38,081,000</td>
									<td>63,355,000</td>
									<td>79,141,000</td>
									<td>84,696,000</td>
									<td>86,612,000</td>
								</tr>
								<tr>
									<td>10Gbps</td>
									<td>14,996,000</td>
									<td>37,449,000</td>
									<td>52,291,000</td>
									<td>88,267,000</td>
									<td>112,756,000</td>
									<td>118,659,000</td>
									<td>118,932,000</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<h3>CCTV전송서비스</h3>
						<div class="right-align">
							<label for="r_gbn_l" class="kt-label right-m">(단위 : 원/월,
								부가세별도)</label>
						</div>
						<table class="centered">
							<thead>
								<tr>
									<th>회선규격</th>
									<th>계약구분</th>
									<th>무약정</th>
									<th>3년 약정</th>
									<th>5년 약정</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td rowspan="2">수용구역내(10Mbps)</td>
									<td>신규계약</td>
									<td rowspan="2">180,000</td>
									<td>126,000</td>
									<td>80,000<br>(72,000)
									</td>
								</tr>
								<tr>
									<td>재계약</td>
									<td>87,000</td>
									<td>55,000<br>(50,000)
									</td>
								</tr>
								<tr>
									<td rowspan="2" class="border-end-bottom">수용구역외(10Mbps)</td>
									<td>신규계약</td>
									<td rowspan="2" class="border-end-bottom">320,000</td>
									<td>224,000</td>
									<td>142,000<br>(128,000)
									</td>
								</tr>
								<tr>
									<td>재계약</td>
									<td>157,000</td>
									<td>100,000<br>(90,000)
									</td>
								</tr>
							</tbody>

						</table>
						<ul class="list-style1">
							<li>※ CCTV전송서비스 장기(3년/5년) 약정 조건
								<ul>
									<li>CCTV서비스는 인입선을 공중(가공)으로 설치하는 것을 원칙으로 하되, 다음과 같은 경우에는
										해당기관과 별도 협의를 통해 설치비용 중 일부를 요금에 반영<br> 불가피한 사정으로 인입선을 지중화
										하는 경우<br> CCTV설치구역이 산간오지, 도서 해안지역 등 설치가 어려운 지역
									</li>
									<li>신규로 공급되는 회선은 '신규계약' 요금을 적용(신설공사 수반)하되, 5년이 경과된 기 공급회선은
										'재계약'요금을 적용</li>
									<li>고화질 CCTV설치 등으로 회선용량이 부족하여 회선속도를 높일 경우 10Mbps당 계약요금의
										20%에 해당하는 비용을 추가부담</li>
									<li>계약기간 만료 전 이용계약 해지 시 이용약정 잔여기간 총 요금의 50%를 위약금으로 부담(단,
										공익사업으로 부득이 CCTV를 철거하는 경우 제외)</li>
								</ul>
							</li>
						</ul>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<h3>인터넷서비스</h3>
						<div class="right-align">
							<label for="r_gbn_l" class="kt-label right-m">(단위 : 원/월,
								부가세별도)</label>
						</div>
						<table class="centered">
							<thead>
								<tr>
									<th>단계</th>
									<th>64Kbps</th>
									<th>256Kbps</th>
									<th>512Kbps</th>
									<th>1Mbps</th>
									<th>1.5Mbps</th>
									<th>2Mbps</th>
									<th>3Mbps</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>요금</td>
									<td>70,000</td>
									<td>87,000</td>
									<td>153,000</td>
									<td>210,000</td>
									<td>271,000</td>
									<td>306,000</td>
									<td>372,000</td>
								</tr>
								<tr>
									<th>단계</th>
									<th>4Mbps</th>
									<th>5Mbps</th>
									<th>6Mbps</th>
									<th>7Mbps</th>
									<th>8Mbps</th>
									<th>9Mbps</th>
									<th>10Mbps</th>
								</tr>
								<tr>
									<td>요금</td>
									<td>439,000</td>
									<td>447,000</td>
									<td>506,000</td>
									<td>565,000</td>
									<td>597,000</td>
									<td>619,000</td>
									<td>629,000</td>
								</tr>
								<tr>
									<th>단계</th>
									<th>12Mbps</th>
									<th>14Mbps</th>
									<th>16Mbps</th>
									<th>18Mbps</th>
									<th>20Mbps</th>
									<th>22Mbps</th>
									<th>24Mbps</th>
								</tr>
								<tr>
									<td>요금</td>
									<td>651,000</td>
									<td>684,000</td>
									<td>771,000</td>
									<td>861,000</td>
									<td>941,000</td>
									<td>1,012,000</td>
									<td>1,083,000</td>
								</tr>
								<tr>
									<th>단계</th>
									<th>26Mbps</th>
									<th>28Mbps</th>
									<th>30Mbps</th>
									<th>35Mbps</th>
									<th>40Mbps</th>
									<th>45Mbps</th>
									<th>50Mbps</th>
								</tr>
								<tr>
									<td>요금</td>
									<td>1,153,000</td>
									<td>1,224,000</td>
									<td>1,295,000</td>
									<td>1,441,000</td>
									<td>1,586,000</td>
									<td>1,694,000</td>
									<td>1,802,000</td>
								</tr>
								<tr>
									<th>단계</th>
									<th>55Mbps</th>
									<th>60Mbps</th>
									<th>65Mbps</th>
									<th>70Mbps</th>
									<th>75Mbps</th>
									<th>80Mbps</th>
									<th>85Mbps</th>
								</tr>
								<tr>
									<td>요금</td>
									<td>1,936,000</td>
									<td>2,070,000</td>
									<td>2,189,000</td>
									<td>2,307,000</td>
									<td>2,358,000</td>
									<td>2,409,000</td>
									<td>2,460,000</td>
								</tr>
								<tr>
									<th>단계</th>
									<th>90Mbps</th>
									<th>95Mbps</th>
									<th>100Mbps</th>
									<th>155Mbps</th>
									<th>200Mbps</th>
									<th>300Mbps</th>
									<th>400Mbps</th>
								</tr>
								<tr>
									<td>요금</td>
									<td>2,511,000</td>
									<td>2,562,000</td>
									<td>2,613,000</td>
									<td>3,514,000</td>
									<td>4,014,000</td>
									<td>5,127,000</td>
									<td>6,239,000</td>
								</tr>
								<tr>
									<th>단계</th>
									<th>500Mbps</th>
									<th>622Mbps</th>
									<th>700Mbps</th>
									<th>800Mbps</th>
									<th>900Mbps</th>
									<th>1Gbps</th>
									<th>1.5Gbps</th>
								</tr>
								<tr>
									<td>요금</td>
									<td>7,353,000</td>
									<td>8,710,000</td>
									<td>9,716,000</td>
									<td>11,007,000</td>
									<td>12,298,000</td>
									<td>13,588,000</td>
									<td>15,159,000</td>
								</tr>
								<tr>
									<th>단계</th>
									<th>2Gbps</th>
									<th>2.5Gbps</th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
									<th></th>
								</tr>
								<tr>
									<td>요금</td>
									<td>16,729,000</td>
									<td>18,300,000</td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
									<td></td>
								</tr>
							</tbody>

						</table>
					</div>
				</div>

				<div class="col s12 l6">
					<h3>IP-VPN 서비스 요금 안내</h3>
					<div class="right-align">
						<label for="r_gbn_l" class="kt-label right-m">(단위 : 원/월,
							부가세별도)</label>
					</div>
					<table class="centered">
						<thead>
							<tr>
								<th rowspan="2">속도체계(Mbps)</th>
								<th colspan="2">거리체계</th>
								<th rowspan="2">속도체계(Mbps)</th>
								<th colspan="2">거리체계</th>
							</tr>
							<tr>
								<th>시내</th>
								<th>시외</th>
								<th>시내</th>
								<th>시외</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>2Mbps</td>
								<td>105,000</td>
								<td>436,000</td>
								<td>28Mbps</td>
								<td>347,000</td>
								<td>1,113,000</td>
							</tr>
							<tr>
								<td>3Mbps</td>
								<td>136,000</td>
								<td>439,000</td>
								<td>30Mbps</td>
								<td>354,000</td>
								<td>1,140,000</td>
							</tr>
							<tr>
								<td>4Mbps</td>
								<td>167,000</td>
								<td>445,000</td>
								<td>35Mbps</td>
								<td>364,000</td>
								<td>1,208,000</td>
							</tr>
							<tr>
								<td>5Mbps</td>
								<td>170,000</td>
								<td>454,000</td>
								<td>40Mbps</td>
								<td>373,000</td>
								<td>1,276,000</td>
							</tr>
							<tr>
								<td>6Mbps</td>
								<td>183,000</td>
								<td>496,000</td>
								<td>45Mbps</td>
								<td>381,000</td>
								<td>1,404,000</td>
							</tr>
							<tr>
								<td>7Mbps</td>
								<td>195,000</td>
								<td>577,000</td>
								<td>50Mbps</td>
								<td>399,000</td>
								<td>1,428,000</td>
							</tr>
							<tr>
								<td>8Mbps</td>
								<td>209,000</td>
								<td>581,000</td>
								<td>55Mbps</td>
								<td>416,000</td>
								<td>1,450,000</td>
							</tr>
							<tr>
								<td>9Mbps</td>
								<td>221,000</td>
								<td>617,000</td>
								<td>60Mbps</td>
								<td>433,000</td>
								<td>1,472,000</td>
							</tr>
							<tr>
								<td>10Mbps</td>
								<td>235,000</td>
								<td>658,000</td>
								<td>65Mbps</td>
								<td>451,000</td>
								<td>1,488,000</td>
							</tr>
							<tr>
								<td>12Mbps</td>
								<td>252,000</td>
								<td>743,000</td>
								<td>70Mbps</td>
								<td>468,000</td>
								<td>1,503,000</td>
							</tr>
							<tr>
								<td>14Mbps</td>
								<td>270,000</td>
								<td>863,000</td>
								<td>75Mbps</td>
								<td>485,000</td>
								<td>1,602,000</td>
							</tr>
							<tr>
								<td>16Mbps</td>
								<td>288,000</td>
								<td>981,000</td>
								<td>80Mbps</td>
								<td>502,000</td>
								<td>1,700,000</td>
							</tr>
							<tr>
								<td>18Mbps</td>
								<td>306,000</td>
								<td>1,030,000</td>
								<td>85Mbps</td>
								<td>515,000</td>
								<td>1,743,000</td>
							</tr>
							<tr>
								<td>20Mbps</td>
								<td>321,000</td>
								<td>1,087,000</td>
								<td>90Mbps</td>
								<td>527,000</td>
								<td>1,785,000</td>
							</tr>
							<tr>
								<td>22Mbps</td>
								<td>328,000</td>
								<td>1,094,000</td>
								<td>95Mbps</td>
								<td>539,000</td>
								<td>1,808,000</td>
							</tr>
							<tr>
								<td>24Mbps</td>
								<td>334,000</td>
								<td>1,100,000</td>
								<td>100Mbps</td>
								<td>550,000</td>
								<td>1,830,000</td>
							</tr>
							<tr>
								<td>26Mbps</td>
								<td>341,000</td>
								<td>1,107,000</td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>

				<div class="row">
					<div class="col s12 l6">
						<ul class="list-style1">
							<li>할인정보
								<ul>
									<li>예비회선 할인</li>
								</ul>
								<table class="centered">
									<thead>
										<tr>
											<th colspan="2">구분</th>
											<th>할인율(%)</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td colspan="2">재해복구</td>
											<td>40%</td>
										</tr>
										<tr>
											<td rowspan="2" class="border-end-bottom">이중화</td>
											<td>부하분산</td>
											<td>각 회선당 30% 할인</td>
										</tr>
										<tr>
											<td>예비작업</td>
											<td>40%</td>
										</tr>
									</tbody>

								</table>
							</li>
						</ul>

					</div>
					<div class="col s12 l6">
						<ul class="list-style1">
							<li>
								<ul>
									<li>장기계약 할인</li>
								</ul>
								<table class="centered" style="margin-top: 25px;">
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
											<td>할인율</td>
											<td>5%</td>
											<td>10%</td>
											<td>12%</td>
										</tr>
									</tbody>
								</table>
							</li>
							<li>장기계약과 다량이용 또는 다회선이용에 대하여 중복할인 적용되며, 5년 장기계약은 기본회선서비스에 한하여
								적용</li>
						</ul>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<ul class="list-style1">
							<li>다량이용 할인</li>
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
									<td>할인율</td>
									<td>1%</td>
									<td>2%</td>
									<td>3%</td>
									<td>5%</td>
									<td>7%</td>
									<td>8%</td>
									<td>10</td>
									<td>15%</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>

				<div class="row">
					<div class="col s12">
						<ul class="list-style1">
							<li>다회선이용 할인</li>
						</ul>
						<table class="centered">
							<thead>
								<tr>
									<th>구분</th>
									<th>3회선 이상 10회선 미만</th>
									<th>50회선 미만</th>
									<th>50회선 이상</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>할인율</td>
									<td>3%</td>
									<td>5%</td>
									<td>6%</td>
								</tr>
							</tbody>

						</table>
					</div>
				</div>

				<div class="col s12">
					<h3>백본회선</h3>
					<div class="right-align">
						<label for="r_gbn_l" class="kt-label right-m">(단위 : 원/월,
							부가세별도)</label>
					</div>
					<table class="centered">
						<thead>
							<tr>
								<th rowspan="2">속도체계(Mbps)</th>
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
								<td>2M</td>
								<td>198,000</td>
								<td>627,000</td>
								<td>875,000</td>
								<td>1,396,000</td>
								<td>1,740,000</td>
								<td>1,947,000</td>
								<td>2,106,000</td>
							</tr>
							<tr>
								<td>45M</td>
								<td>1,405,000</td>
								<td>3,829,000</td>
								<td>5,105,000</td>
								<td>7,751,000</td>
								<td>9,275,000</td>
								<td>10,118,000</td>
								<td>10,924,000</td>
							</tr>
							<tr>
								<td>100M</td>
								<td>2,003,000</td>
								<td>5,219,000</td>
								<td>7,288,000</td>
								<td>11,617,000</td>
								<td>14,227,000</td>
								<td>15,946,000</td>
								<td>17,219,000</td>
							</tr>
							<tr>
								<td>155M</td>
								<td>2,704,000</td>
								<td>7,365,000</td>
								<td>9,819,000</td>
								<td>14,908,000</td>
								<td>17,589,000</td>
								<td>18,661,000</td>
								<td>18,709,000</td>
							</tr>
							<tr>
								<td>200M</td>
								<td>2,848,000</td>
								<td>7,699,000</td>
								<td>10,309,000</td>
								<td>15,729,000</td>
								<td>18,556,000</td>
								<td>19,717,000</td>
								<td>19,866,000</td>
							</tr>
							<tr>
								<td>300M</td>
								<td>3,170,000</td>
								<td>8,439,000</td>
								<td>11,398,000</td>
								<td>17,552,000</td>
								<td>20,703,000</td>
								<td>22,064,000</td>
								<td>22,438,000</td>
							</tr>
							<tr>
								<td>400M</td>
								<td>3,491,000</td>
								<td>9,179,000</td>
								<td>12,487,000</td>
								<td>19,376,000</td>
								<td>22,851,000</td>
								<td>24,411,000</td>
								<td>25,010,000</td>
							</tr>
							<tr>
								<td>500M</td>
								<td>3,812,000</td>
								<td>9,920,000</td>
								<td>13,576,000</td>
								<td>21,199,000</td>
								<td>24,998,000</td>
								<td>26,758,000</td>
								<td>27,582,000</td>
							</tr>
							<tr>
								<td>600M</td>
								<td>4,134,000</td>
								<td>10,660,000</td>
								<td>14,664,000</td>
								<td>23,023,000</td>
								<td>27,146,000</td>
								<td>29,105,000</td>
								<td>30,154,000</td>
							</tr>
							<tr>
								<td>700M</td>
								<td>4,455,000</td>
								<td>11,400,000</td>
								<td>15,753,000</td>
								<td>24,846,000</td>
								<td>29,293,000</td>
								<td>31,452,000</td>
								<td>32,726,000</td>
							</tr>
							<tr>
								<td>800M</td>
								<td>4,776,000</td>
								<td>12,141,000</td>
								<td>16,842,000</td>
								<td>26,670,000</td>
								<td>31,441,000</td>
								<td>33,799,000</td>
								<td>35,298,000</td>
							</tr>
							<tr>
								<td>900M</td>
								<td>5,098,000</td>
								<td>12,881,000</td>
								<td>17,931,000</td>
								<td>28,493,000</td>
								<td>33,588,000</td>
								<td>36,145,000</td>
								<td>37,870,000</td>
							</tr>
							<tr>
								<td>1G</td>
								<td>5,148,000</td>
								<td>12,940,000</td>
								<td>18,069,000</td>
								<td>28,801,000</td>
								<td>33,949,000</td>
								<td>36,568,000</td>
								<td>38,420,000</td>
							</tr>
							<tr>
								<td>2.5G</td>
								<td>5,944,000</td>
								<td>14,843,000</td>
								<td>20,727,000</td>
								<td>33,036,000</td>
								<td>40,458,000</td>
								<td>43,951,000</td>
								<td>45,727,000</td>
							</tr>
							<tr>
								<td>10G</td>
								<td>10,034,000</td>
								<td>25,058,000</td>
								<td>34,990,000</td>
								<td>57,291,000</td>
								<td>73,186,000</td>
								<td>77,017,000</td>
								<td>77,195,000</td>
							</tr>
						</tbody>

					</table>
				</div>

				<div class="col s12">
					<ul class="list-style1">
						<li>할인정보
							<ul>
								<li>장기계약 할인</li>
							</ul>
							<table class="centered">
								<thead>
									<tr>
										<th>계약기간</th>
										<th>2년이상 3년미만</th>
										<th>3년이상</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>할인율</td>
										<td>20%</td>
										<td>30%</td>
									</tr>
								</tbody>
							</table>

							<ul>
								<li>다량이용 할인</li>
							</ul>
							<table class="centered">
								<thead>
									<tr>
										<th>이용료</th>
										<th>1억/월 이상</th>
										<th>2억/월 이상</th>
										<th>3억/월 이상</th>
										<th>4억/월 이상</th>
										<th>5억/월 이상</th>
										<th>6억/월 이상</th>
										<th>7억/월 이상</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>할인율</td>
										<td>10%</td>
										<td>20%</td>
										<td>30%</td>
										<td>40%</td>
										<td>50%</td>
										<td>60%</td>
										<td>70%</td>
									</tr>
								</tbody>
							</table>

							<ul>
								<li>다회선이용 할인</li>
							</ul>
							<table class="centered">
								<thead>
									<tr>
										<th>백본회선수</th>
										<th>10회선 이상</th>
										<th>20회선 이상</th>
										<th>30회선 이상</th>
										<th>40회선 이상</th>
										<th>50회선 이상</th>
										<th>60회선 이상</th>
										<th>70회선 이상</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>할인율</td>
										<td>10%</td>
										<td>20%</td>
										<td>30%</td>
										<td>40%</td>
										<td>50%</td>
										<td>60%</td>
										<td>70%</td>
									</tr>
								</tbody>

							</table>
						</li>
					</ul>
				</div>
			</div>
			<div class="layer-btn">
				<button @click="emit('close')" class="btn show-on-small">확인</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
  const emit = defineEmits(["close"]);
</script>

<style lang="scss" scoped>

</style>
