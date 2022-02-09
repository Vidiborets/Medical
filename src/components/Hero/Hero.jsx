import s from './Hero.module.scss';
import img from '../../images/Logo.png';
const Hero = () => {
  return (
    <section className={s.hero}>
      <div className={s.containerHero}>
        <div className={s.logo}>
          <a href="/">
            <img src={img} alt="logo" />
          </a>
        </div>
        <div className={s.boxTitle}>
          <h1>
            Набір Спеціалістів медичного персоналу до Польщі та Німетччини
          </h1>
        </div>
        <div className={s.boxLink}>
          <a className={s.linkPhone} href="tel:+38 098 344 18 48">
            +38 098 344 18 48
          </a>
          <a className={s.linkEmail} href="mailto:larssonternopol@ukr.net">
            larssonternopol@ukr.net
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
