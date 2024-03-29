import { Link as ReactRouterLink } from 'react-router-dom';

import styles from './Footer.module.scss';

import { ReactComponent as Isms } from '@/assets/footer/logo-isms.svg';
import { ReactComponent as Privacy } from '@/assets/footer/logo-privacy.svg';
import { ReactComponent as Tosspayments } from '@/assets/footer/logo-tosspayments.svg';
import { ReactComponent as Wooribank } from '@/assets/footer/logo-woori-bank.svg';
import { ReactComponent as Blog } from '@/assets/footer/ic-blog-30.svg';
import { ReactComponent as Facebook } from '@/assets/footer/ic-face-book-30.svg';
import { ReactComponent as Instagram } from '@/assets/footer/ic-instagram-30.svg';
import { ReactComponent as Naver } from '@/assets/footer/ic-naver-post-30.svg';
import { ReactComponent as Youtube } from '@/assets/footer/ic-youtube-30.svg';

function Link({ to, label, children, ...restProps }) {
  if (/^https?:\/\//.test(to)) {
    return (
      <a
        aria-label={label}
        href={to}
        rel="noreferrer noopener"
        target="_blank"
        title={label}
      >
        {children}
      </a>
    );
  } else {
    return (
      <ReactRouterLink to={to} {...restProps}>
        {children}
      </ReactRouterLink>
    );
  }
}

export function Footer() {
  const instagramUrl = 'https://www.instagram.com/marketkurly/';
  const facebookUrl = 'https://www.facebook.com/Marketkurly/';
  const naverBlogUrl = 'https://blog.naver.com/marketkurly';
  const naverPostUrl = 'https://m.post.naver.com/marketkurly';
  const youtubeUrl = 'https://www.youtube.com/channel/UCfpdjL5pl-1qKT7Xp4UQzQg';

  return (
    <>
      <footer className={styles.footerWrap}>
        <section className={styles.footerInformationWrap}>
          <article className={styles.footerCustomerInfo}>
            <div className={styles.customerService}>
              고객행복센터
              <div className={styles.numberInfoWrapper}>
                <span className={styles.customerServiceNumber}>1644-1107</span>
                <span className={styles.availableTime}>
                  월~토요일 오전 7시 ~ 오후 6시
                </span>
              </div>
            </div>
            <div className={styles.customerInquiryInfo}>
              <div className={styles.inquiryKakao}>
                <button className={styles.inquiryBtn}>카카오톡 문의</button>
                <span className={styles.inquiryText}>
                  <p>월~토요일 | 오전 7시 ~ 오후 6시</p>
                  <p>일/공휴일 | 오전 7시 ~ 오후 1시</p>
                </span>
              </div>
              <div className={styles.inquiryOneOnOne}>
                <button className={styles.inquiryBtn}>1:1 문의</button>
                <span className={styles.inquiryText}>
                  <p>365일</p>
                  <p>고객센터 운영시간에 순차적으로 답변드리겠습니다.</p>
                </span>
              </div>
              <div className={styles.inquiryLargeOrder}>
                <button className={styles.inquiryBtn}>대량주문 문의</button>
                <span className={styles.inquiryText}>
                  <p>월~금요일 | 오전 9시 ~ 오후 6시</p>
                  <p>점심시간 | 낮 12시 ~ 오후 1시</p>
                </span>
              </div>
            </div>
            <div className={styles.customerInquiryEmail}>
              <p className={styles.nonMemberInquiry}>
                비회원 문의 :
                <Link
                  aria-label="비회원 문의를 하기 위한 Email"
                  className={styles.nonMemberEmail}
                  to="/"
                >
                  {' '}
                  help@karlycorp.com
                </Link>
              </p>
              <p className={styles.nonMemberLargeOrder}>
                비회원 대량주문 문의 :
                <Link
                  aria-label="비회원 대량주문을 하기 위한 Email"
                  className={styles.nonMemberEmail}
                  to="/"
                >
                  {' '}
                  help@karlycorp.com
                </Link>
              </p>
            </div>
          </article>
          <article className={styles.footerCompanyInfo}>
            <nav className={styles.footerNavigation}>
              <Link aria-label="칼리소개" to="/">
                칼리소개
              </Link>
              <Link aria-label="칼리소개 영상" to="/">
                칼리소개영상
              </Link>
              <Link aria-label="인재채용 정보" to="/">
                인재채용
              </Link>
              <Link aria-label="이용약관" to="/">
                이용약관
              </Link>
              <Link aria-label="개인정보처리방침" to="/">
                개인정보처리방침
              </Link>
              <Link aria-label="이용안내" to="/">
                이용안내
              </Link>
            </nav>
            <div className={styles.footerCompanyIntroduce}>
              <p>
                법인명 (상호) : 주식회사 칼리
                <span className={styles.footerBar}>|</span>
                사업자등록번호 : 261-81-23567
                <span className={styles.footerBar}>|</span>
                <Link
                  aria-label="사업자 정보 확인"
                  style={{ color: '#5F0080' }}
                  to="/"
                >
                  사업자정보 확인
                </Link>
              </p>
              <p>
                통신판매업 : 제 2018-서울강남-01646 호
                <span className={styles.footerBar}>|</span>개인정보보호책임자 :
                이원준
              </p>
              <p>
                주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)
                <span className={styles.footerBar}>|</span>대표이사 : 김슬아
              </p>
              <p>
                입점문의 :{' '}
                <Link
                  aria-label="입점 문의"
                  style={{ color: '#5F0080' }}
                  to="/"
                >
                  입점문의하기
                </Link>
                <span className={styles.footerBar}>|</span>
                제휴문의 :{' '}
                <Link
                  aria-label="제휴문의 Email"
                  style={{ color: '#5F0080' }}
                  to="/"
                >
                  business@karlycorp.com
                </Link>
              </p>
              <p>채용문의 : recruit@karlycorp.com</p>
              <p>팩스 : 070 - 7500 - 6098</p>
            </div>
            <div className={styles.footerCompanySns}>
              <Link to={naverBlogUrl}>
                <Blog />
              </Link>
              <Link to={facebookUrl}>
                <Facebook />
              </Link>
              <Link to={instagramUrl}>
                <Instagram />
              </Link>
              <Link to={naverPostUrl}>
                <Naver />
              </Link>
              <Link to={youtubeUrl}>
                <Youtube />
              </Link>
            </div>
          </article>
        </section>
        <section className={styles.footerAllianceWrap}>
          <button className={styles.allianceBtn}>
            <Isms alt="ISMS 로고" style={{ width: '34px', height: '34px' }} />
            <p>
              [인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영
              <br />
              (심사받지 않은 물리적 인프라 제외)
              <br />
              [유효기간] 2022.01.19 ~ 2025.01.18
              <br />
            </p>
          </button>
          <button className={styles.allianceBtn}>
            <Privacy
              alt="E.privacy plus 로고"
              style={{ width: '34px', height: '34px' }}
            />
            <p>
              개인정보보호 우수 웹사이트
              <br />
              개인정보처리시스템 인증 (ePRIVACY PLUS)
            </p>
          </button>
          <button className={styles.allianceBtn}>
            <Tosspayments
              alt="Toss payments 로고"
              style={{ width: '102px', height: '32px' }}
            />
            <p>
              토이페이먼츠 구매안전(에스크로)
              <br />
              서비스를 이용하실 수 있습니다.
            </p>
          </button>
          <button className={styles.allianceBtn}>
            <Wooribank
              alt="우리은행 로고"
              style={{ width: '34px', height: '34px' }}
            />
            <p>
              고객님이 현금으로 결제한 금액에 대해 우리은행과
              <br />
              재무지급보증 계약을 체결하여 안전거래를 보장하고
              <br />
              있습니다.
            </p>
          </button>
        </section>
        <section className={styles.footerCopyrightWrap}>
          <p>
            마켓칼리에서 판매되는 상품 중에는 마켓칼리에 입점한 개별 판매자가
            판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
            <br />
            마켓플레이스(오픈마켓) 상품의 경우 칼리는 통신판매중개자로서
            통신판매의 당사자가 아닙니다. 칼리는 해당 상품의 주문, 품질,
            교환/환불 등 의무와 책임을 부담하지 않습니다.
          </p>
          <p className={styles.copyrightEnglishText}>
            © KARLY CORP. ALL RIGHTS RESERVED
          </p>
        </section>
      </footer>
    </>
  );
}

export default Footer;