<template>
  <main>    

    <div class="row">
        <div class="col s12">
        <h3>무선데이터 서비스 요금안내</h3>
        <ul class="list-style1">
            <li>모바일 현장, 내부행정 등 용도로 지정된 특정서버로만 접속할 경우에 이용가능<br>
                무제한 요금은 4Gbyte 데이터 소진시, 데이터는 무제한이나 속도제한
            <ul>
                <li>단 2GByte 이상부터는 쿠폰(구매 가능한 무선데이터 쿠폰)으로 제공 가능</li>
            </ul>
            </li>
        </ul>
        <table class="centered">
            <thead>
            <tr>
                <th>구분</th>
                <th>1GByte</th>
                <th>2GByte</th>
                <th>4GByte</th>
                <th>무제한</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>기본요금</td>
                <td>1,000원</td>
                <td>2,000</td>
                <td>3,000원</td>
                <td>5,000원</td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>

    <br><br>

  </main>
</template>

<script setup lang="ts">

const route = useRoute();
</script>