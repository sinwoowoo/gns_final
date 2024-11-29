<template>
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l5">
                    <div class="contact2">
                        <div class="row">
                            <div class="col s12 m6 l6">
                                <ul class="footer-list">
                                    <h4><i class="material-icons"></i>서비스신청 및 상담문의</h4>
                                    <li>A · E그룹</li>
                                    <li><a href="tel:1899-3773">1899-3773</a><span> (ARS1번)</span></li>
                                    <!-- <li><span>(청약/상담 1번, 장애접수 2번)</span></li> -->
                                    <li class="sbtxt">FAX : <a href="tel:1899-3773">0502-918-7798</a> <span></span></li>
                                    <li class="sbtxt">고장접수 : <a href="tel:1899-3773">1899-3773</a> <span>(ARS2번)</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col s12 m6 l6">
                                <ul class="footer-list">
                                    <h4><i class="material-icons"></i>서비스신청 및 상담문의</h4>
                                    <li>B · C · D그룹</li>
                                    <li><a href="tel:1588-0114">1588-0114</a> <span>(ARS2 &gt; 2)</span></li>
                                    <li class="sbtxt">FAX : <a href="tel:1588-0114">080-789-0001</a>
                                        <span>(ARS1번)</span>
                                    </li>
                                    <li class="sbtxt">고장접수 : <a href="tel:1588-0114">1588-0114</a> <span>(ARS3 &gt;
                                            0)</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col s12 m12 l7">
                    <div class="row legal2">
                        <div class="col s12">
                            <ul class="footer-list">
                                <li>회사소개<a href="https://corp.kt.com" target="_blank">(KT</a>·<a
                                        href="https://ktsat.net" target="_blank">KT sat)</a></li>
                                <li><a href="javascript:menuMove('/member/agreement.do')">홈페이지 이용약관</a></li>
                                <li><a href="javascript:menuMove('/member/personal.do')">개인정보처리방침</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row family-site2">
                        <div class="col s12">
                            <ul class="footer-list">
                                <li v-for="link in links" :key="link.alt">
                                    <a :href="link.href" target="_blank">
                                        <img :src="link.src" :alt="link.alt" class="responsive-img">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="row copyright2">
                        <div class="col s12">
                            Copyright ?2017 KT corp.. 모든 권리 보유.<br>
                            <span>463-711 경기도 성남시 분당구 불정로 90 정자동 206번지 (주)케이티 대표이사 김영섭 사업자등록번호 102-81-42945</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
type Link = {
    href: string;
    src: string;
    alt: string;
};

const links: Link[] = [
    {
        href: "http://www.mois.go.kr",
        src: "/images/family_01_new.png",
        alt: "행정안전부",
    },
    {
        href: "http://www.ncia.go.kr/index.jsp",
        src: "/images/family_02_new.png",
        alt: "국가정보관리원",
    },
    {
        href: "http://www.nia.or.kr",
        src: "/images/family_03_new.png",
        alt: "한국정보진흥원(NIA)",
    },
    {
        href: "http://www.gns.or.kr",
        src: "/images/family_04_new.png",
        alt: "GNS서비스홈페이지",
    },
];
</script>

<style lang="scss" scoped>
/* 190920 */

.footer {
  padding-top:20px;
  .legal2 {
    padding-top: 10px;
  }
  .legal2 ul.footer-list {
    text-align: center;
    
    li {
      display: inline-block;
      width: auto;

      &:not(:first-child):before {
        content: "ㅣ";
        color: #bdbdbd;
      }

      a {
        color: #424242;
        padding: 0 .6rem;
      }
    }
  }

  .family-site2 ul.footer-list {
    overflow: hidden;

    li {
      float: left;
      width: calc(99.8%/4);
      padding: 0 .3rem;

      &:first-child {
        padding: 0 .3rem 0 0;
      }

      a {
        border: 1px solid #bdbdbd;
        display: block;
        width: 100%;
        text-align: center;

        img {
          display: block;
          margin: 0 auto;
          width: 100%;
        }
      }

      &:not(:last-child) a {
        border-right: 1px solid #bdbdbd;
      }
    }
  }

  .copyright2 {
    line-height: 2;
    font-size: .9rem;
    color: #757575;
    padding-top: 1rem;
    text-decoration: none;
    word-break: keep-all;
    text-align: center;

    span {
      line-height: 1;
    }
  }

  .contact2 {
    width: 100%;
    text-align: center;

    ul.footer-list {
      display: inline-block;
      margin: 0;
      border: 1px solid #f1f1f1;
      padding: 20px .75rem;
      height: 100%;
      min-height: 160px;

      i {
        vertical-align: middle;
        font-size: 20px;
        color: #8898a8;
        padding: 0 0.3rem 0 0;
      }

      h4 {
        font-size: 1rem;
        margin: 0 0 .5rem;
        border-bottom: 1px dotted #c6c8cc;
        padding: 0 0 .875rem;
        color: #516377;
      }

      li {
        font-size: 1.25rem;
        font-weight: bold;
        padding: 0 .375rem;
        display: block;

        a {
          color: #e51c23;
          font-size: 1.625rem;

          /* letter-spacing:-1px;*/
          font-family: Myriad Pro;
        }

        span {
          font-weight: normal;
          color: #6f7173;
          font-size: 1rem;
        }
      }

      .sbtxt {
        color: #6f7173;
        font-weight: bold;
        font-size: 0.9375rem;
        letter-spacing: -0.6px;

        a {
          color: #4a77bb;
          font-size: 1rem;
        }
      }
    }
  }
}

@include tablet {
  .row .col.l7,
  .row .col.l5,
  .row .col.l6 {
    width: 100%;
  }

  .footer .contact2 ul.footer-list{
    width: 100%;
  }
}
</style>