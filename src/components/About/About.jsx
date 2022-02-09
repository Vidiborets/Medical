import s from './About.module.scss';
import img from '../../images/Medical.jpg';
import imgPoint from '../../images/point.png';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <div className={s.about}>
      <div className={s.text}>
        <h2 className={s.titleAbout}>O нас</h2>
        <p className={s.titleText}>
          Ви шукаєте лікаря чи медсестру для вашого медичного закладу? Ви щойно
          зайшли на сайт компанії, спеціалізується на підборі персоналу для
          медичних та фармацевтичних компаній по всій Польщі. Ми набираємо
          персонал для закладів охорони здоров'я, підприємств і закупівельних
          організацій, у яких медичний персонал грає ключову роль. Ми проводимо
          набір, навчання та мовні проекти. Нашими клієнтами є державні та
          приватні установи: лікарні, поліклініки, поліклініки, медичні та
          стоматологічні центри, хоспіси та будинки для людей похилого віку.
        </p>
        <h3 className={s.titleAbout}>Ми запрошуємо до роботи:</h3>
        <ul className={s.list}>
          <li className={s.item}>
            <img className={s.point} src={imgPoint} alt="point" />
            <p className={s.textItem}>Лікарі</p>
          </li>
          <li className={s.item}>
            <img className={s.point} src={imgPoint} alt="point" />
            <p className={s.textItem}>Медсестри</p>
          </li>
          <li className={s.item}>
            <img className={s.point} src={imgPoint} alt="point" />
            <p className={s.textItem}>Акушерки</p>
          </li>
          <li className={s.item}>
            <img className={s.point} src={imgPoint} alt="point" />
            <p className={s.textItem}>Інший медичний персонал</p>
          </li>
        </ul>
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
      </div>
      <div className={s.pictures}>
        <img className={s.picturesMedical} src={img} alt="Medical" />
      </div>
    </div>
  );
};
export default About;
