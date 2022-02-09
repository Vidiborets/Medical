import s from './Info.module.scss';
import point from '../../images/point.png';
import ukraine from '../../images/Ukraine.svg';
import russian from '../../images/Russia.svg';
import poland from '../../images/Polan.svg';
import kingdom from '../../images/Kingdom.svg';

const Info = () => {
  return (
    <div className={s.containerInfo}>
      <h2 className={s.titleInfo}>Інформація для шукачів роботи</h2>
      <ul className={s.list}>
        <li className={s.item}>
          <img className={s.flag} src={ukraine} alt="ukraine" />
          <p className={s.text}>
            Шукаєте роботу лікаря чи медсестри? У нас є пропозиції роботи для
            лікарів та медсесте р по всій території Польщі. Ми допомагаємо нашим
            кандидатам знайти роботу: додаткову, постійну чи тимчасову, водночас
            надаючи їм підтримку на кожному етапі із потенційним роботодавцем.
          </p>
          <h4 className={s.title}>Ми надаємо вам можливість:</h4>
          <ul className={s.listInfo}>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Розвиватись</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Вчитись</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Будувати кар'єру в ЄС</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Вивчати мову</p>
            </li>
          </ul>
          <a className={s.buttonInfo} href="mailto:a.r.kompromis@gmail.com">
            a.r.kompromis@gmail.com
          </a>
        </li>
        <li className={s.item}>
          <img className={s.flag} src={russian} alt="Russian" />
          <p className={s.text}>
            Вы ищете работу врачом или медсестрой? У нас есть предложения о
            работе для врачей и медсестер по всей Польше. Мы помогаем нашим
            кандидатам найти работу: дополнительную, постоянную или временную,
            одновременно оказывая им поддержку на всех этапах контактов с
            потенциальным работодателем.
          </p>
          <h4 className={s.title}>Мы даем вам возможность:</h4>
          <ul className={s.listInfo}>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Развития</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Образование (новые специальности)</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Карьеру в ЕС</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Изучение языка</p>
            </li>
          </ul>
          <a className={s.buttonInfo} href="mailto:a.r.kompromis@gmail.com">
            a.r.kompromis@gmail.com
          </a>
        </li>
        <li className={s.item}>
          <img className={s.flag} src={poland} alt="Poland" />
          <p className={s.text}>
            Poszukujesz pracy jako lekarz lub pielęgniarka? Mamy oferty pracy
            dla lekarzy i pielęgniarek na Terenia całej Polski. Naszym
            kandydatom pomagamy znaleźć pracę: dodatkową, stałą lub czasową,
            służąc im jednocześnie wsparciem na każdym etapie kontaktów z
            potencjalnym pracodawcą.
          </p>
          <h4 className={s.title}>Dajemy ci możliwość:</h4>
          <ul className={s.listInfo}>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Rozwoju</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Kształcenia (nowe specjalizacje)</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Budowy drogi kariery w UE</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Nauki języka</p>
            </li>
          </ul>
          <a className={s.buttonInfo} href="mailto:a.r.kompromis@gmail.com">
            a.r.kompromis@gmail.com
          </a>
        </li>
        <li className={s.item}>
          <img className={s.flag} src={kingdom} alt="Kingdom" />
          <p className={s.text}>
            Do you look for a job as a doctor or a nurse? We have perfect job
            offers for medical staff all around Poland. We help our candidates
            with finding full time, part time or additional jobs meanwhile,
            helping with every step of getting in contact with potential
            <br />
            employers.
          </p>
          <h4 className={s.title}>We give you an opportunity to:</h4>
          <ul className={s.listInfo}>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Develop</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Educate (new specializations)</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Build your career path in UE</p>
            </li>
            <li className={s.itemInfo}>
              <img className={s.point} src={point} alt="point" />
              <p className={s.textInfo}>Learn the language</p>
            </li>
          </ul>
          <a className={s.buttonInfo} href="mailto:a.r.kompromis@gmail.com">
            a.r.kompromis@gmail.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
