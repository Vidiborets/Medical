import s from './Send.module.scss';

const Send = () => {
  return (
    <div className={s.containerSend}>
      <div className={s.image}>
        <h2 className={s.titleSend}>
          Пишіть нам!
          <br /> Шукаєте роботу в Польщі в медичній <br />
          галузі? Будь ласка, зв'яжіться з нами.
        </h2>
        <a className={s.buttonInfo} href="mailto:a.r.kompromis@gmail.com">
          a.r.kompromis@gmail.com
        </a>
      </div>
    </div>
  );
};
export default Send;
