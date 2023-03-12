import React from 'react';

import { ReactComponent as Isms } from "../../../public/assets/footer/isms.svg";
import { ReactComponent as Privacy } from "../../../public/assets/footer/privacy.svg";
import { ReactComponent as Tosspayments } from "../../../public/assets/footer/tosspayments.svg";
import { ReactComponent as Wooribank } from "../../../public/assets/footer/wooribank.svg";

import styles from './Footer.module.css';

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
        {/* <section className={styles.footerCopyrightWrap}>

        </section> */}
      </footer>
    </>
  );
}