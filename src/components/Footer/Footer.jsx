import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.boxCopyright}>
        <p className={s.textCopyright}>
          Copyright © 2022 by WORKMED. All Rights Reserved
        </p>
      </div>
      <div className={s.boxAwards}>
        <p className={s.textAwards}>Created with love by</p>
        <a className={s.linkAwards} href="/">
          Ad Awards
        </a>
      </div>
    </footer>
  );
};

export default Footer;
