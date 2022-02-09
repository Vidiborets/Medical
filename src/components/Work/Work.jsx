import s from './Work.module.scss';
import assistant from '../../images/Assistant.jpg';
import { Link } from 'react-scroll';

const Work = () => {
  return (
    <div className={s.containerWork}>
      <h2 className={s.titleWork}>
        Еффективний та простий шлях до працевлаштування. Наша допомога на будь
        якому єтапі.
      </h2>
      <div className={s.containerWalk}>
        <ul className={s.list}>
          <li className={s.item}>
            <h3 className={s.itemNumber}>01</h3>
            <p className={s.textWork}>Заявка на сайті або дзвінок</p>
          </li>
          <li className={s.item}>
            <h3 className={s.itemNumber}>02</h3>
            <p className={s.textWork}>Консультація з менеджером</p>
          </li>
          <li className={s.item}>
            <h3 className={s.itemNumber}>03</h3>
            <p className={s.textWork}>
              Організація документації для в'їзду та заселення
            </p>
          </li>
          <li className={s.item}>
            <h3 className={s.itemNumber}>04</h3>
            <p className={s.textWork}>Мовна підготовка</p>
          </li>
          <li className={s.item}>
            <h3 className={s.itemNumber}>05</h3>
            <p className={s.textWork}>Нострифікація медічного діплому</p>
          </li>
          <li className={s.item}>
            <h3 className={s.itemNumber}>06</h3>
            <p className={s.textWork}>Післядипломне стажування</p>
          </li>
          <li className={s.item}>
            <h3 className={s.itemNumber}>07</h3>
            <p className={s.textWork}>Медічний іспит - LEK</p>
          </li>
          <li className={s.item}>
            <h3 className={s.itemNumber}>08</h3>
            <p className={s.textWork}>Медична практика</p>
          </li>
        </ul>
        <div className={s.imageAssistant}>
          <img width="387px" height="530px" src={assistant} alt="assistant" />
        </div>
      </div>
      <span className={s.buttonBox}>
        <a className={s.linkPhone} href="tel:+38 098 344 18 48">
          +38 098 344 18 48
        </a>
        <Link
          className={s.linkContact}
          to="adress"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Контакти
        </Link>
      </span>
    </div>
  );
};

export default Work;
