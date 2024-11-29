<template>
    <main>
        <layoutPageTitle />
        <PageMaintab label="이용절차" :tabs="tabs" />
    </main>
</template>

<script setup lang="ts">

import Using from "./procedure/Using.vue";
import Subscription from "./procedure/Subscription.vue";

const tabs = [
  { name: "using", label: "이용 절차", component: Using },
  { name: "subscription", label: "청약 절차", component: Subscription },
];

</script>

<style lang="scss" scoped>
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
</style>