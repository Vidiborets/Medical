import s from './List.module.scss';
import doc from '../../images/doc.svg';
import doctype from '../../images/doctype.svg';
import speak from '../../images/speak.svg';
import house from '../../images/house.svg';
import book from '../../images/book.svg';

const List = () => {
  return (
    <div className={s.listContainer}>
      <h2 className={s.title}>
        Комплексна підготовка працівника до працевлаштування
      </h2>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="/">
            <img src={doc} alt="doc" width={105} height={105} />
          </a>
          <p className={s.textItem}>
            Легалезація <br /> перебування
          </p>
        </li>
        <li className={s.item}>
          <a href="/">
            <img src={doctype} alt="doctype" width={105} height={105} />
          </a>
          <p className={s.textItem}>Повна професійна документація</p>
        </li>
        <li className={s.item}>
          <a href="/">
            <img src={speak} alt="speak" width={105} height={105} />
          </a>
          <p className={s.textItem}>
            Мовні <br />
            курси
          </p>
        </li>
        <li className={s.item}>
          <a href="/">
            <img src={book} alt="speak" width={105} height={105} />
          </a>
          <p className={s.textItem}>
            Нострифікація <br />
            дипломів
          </p>
        </li>
        <li className={s.item}>
          <a href="/">
            <img src={house} alt="house" width={105} height={105} />
          </a>
          <p className={s.textItem}>
            Ведення соціальних <br />
            справ
          </p>
        </li>
      </ul>
    </div>
  );
};

export default List;
