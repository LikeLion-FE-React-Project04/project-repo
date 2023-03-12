import React from 'react';

import styles from './Footer.module.css';

import { ReactComponent as Isms } from '@/assets/footer/logo-isms.svg';
import { ReactComponent as Privacy } from '@/assets/footer/logo-privacy.svg';
import { ReactComponent as Tosspayments } from '@/assets/footer/logo-tosspayments.svg';
import { ReactComponent as Wooribank } from '@/assets/footer/logo-woori-bank.svg';

export function Footer() {
  return (
    <>
      <footer className={styles.footerWrap}>
        {/* <section className={styles.footerInformationWrap}>

        </section> */}
        <section className={styles.footerAllianceWrap}>
          <button className={styles.allianceBtn}>
            <Isms style={{width:'34px', height:'34px'}} alt="" />
            <p>
              [인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영<br/>
              (심사받지 않은 물리적 인프라 제외)<br/>
              [유효기간] 2022.01.19 ~ 2025.01.18<br/>
            </p>
          </button>
          <button className={styles.allianceBtn}>
            <Privacy style={{width:'34px', height:'34px'}} alt="" />
            <p>
              개인정보보호 우수 웹사이트<br/>
              개인정보처리시스템 인증 (ePRIVACY PLUS)
            </p>
          </button>
          <button className={styles.allianceBtn}>
            <Tosspayments style={{width:'102px', height:'32px'}} alt="" />
            <p>
              토이페이먼츠 구매안전(에스크로)<br/>서비스를 이용하실 수 있습니다.
            </p>
          </button>
          <button className={styles.allianceBtn}>
            <Wooribank style={{width:'34px', height:'34px'}} alt="" />
            <p>
              고객님이 현금으로 결제한 금액에 대해 우리은행과<br/>재무지급보증 계약을 체결하여 안전거래를 보장하고<br/>있습니다.
            </p>
          </button>
        </section>
        <section className={styles.footerCopyrightWrap}>
          <p>
            마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.<br/>
            마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 
            컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.
          </p>
          <p className={styles.copyrightEnglishText}>© KURLY CORP. ALL RIGHTS RESERVED</p>
        </section>
      </footer>
    </>
  );
}