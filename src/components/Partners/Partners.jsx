import s from './Partners.module.scss';
import kliniki from '../../images/Kliniki.png';
import spch from '../../images/logo_spch_60.png';
import medic from '../../images/medicover.png';
import pilk from '../../images/plik.png';
import skd from '../../images/skd.png';
import su from '../../images/SU.png';
import szpital from '../../images/szpital.png';
import szpitalus from '../../images/Szpital1.png';
import usk from '../../images/USK.png';

const Partners = () => {
  return (
    <div className={s.containerPartners}>
      <h2 className={s.titlePartners}>З нами співпрацюют:</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <a className={s.link} href="https://www.szpitalnaklinach.pl">
            <img src={szpital} alt="Szpital" />
          </a>
        </li>
        <li className={s.item}>
          <a
            className={s.link}
            href="https://www.usk.opole.pl/19/strona-glowna.html"
          >
            <img src={usk} alt="usk" />
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="https://szpital.zgora.pl">
            <img src={su} alt="szpitalus" />
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="https://medicover.ua/ru/">
            <img src={medic} alt="medicover" />
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="https://www.szpitalzawiercie.pl">
            <img src={pilk} alt="szpitalzawiercie" />
          </a>
        </li>
        <li className={s.item}>
          <a
            className={s.link}
            href="https://www.emc-sa.pl/nasze-placowki/wroclaw-euromedicare-szpital-specjalistyczny-z-przychodnia"
          >
            <img src={szpitalus} alt="szpitalus" />
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="https://www.kliniki.pl">
            <img src={kliniki} alt="kliniki" />
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="https://www.szpitalrydygier.pl">
            <img src={skd} alt="skd" />
          </a>
        </li>
        <li className={s.item}>
          <a className={s.link} href="https://www.szpital-chrzanow.pl">
            <img src={spch} alt="spch" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Partners;
