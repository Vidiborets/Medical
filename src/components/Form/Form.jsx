import s from './Form.module.scss';
import logo from '../../images/Logofull.png';
import img from '../../images/icon-attach.svg';
import classNames from 'classnames';
import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form = props => {
  const initialState = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    text: '',
    document: {},
  };

  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState('');
  const [selected, setSelected] = useState(null);

  console.log(selected);

  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .send(
        'service_tirtu5c',
        'template_e98bhoa',
        values,
        'user_Sl7x6lghSUI2o0PGjCFj3',
      )
      .then(
        response => {
          console.log('SUCCES', response);
          setValues({
            name: '',
            phone: '',
            email: '',
            subject: '',
            text: '',
            selected: {},
          });
          setSelected();
          setStatus('SUCCESS');
        },
        error => {
          console.log('Failed....', error);
        },
      );
  };

  useEffect(() => {
    if (status === 'SUCCESS') {
      setTimeout(() => {
        setStatus('');
        resetForm();
      }, 1000);
    }
  });

  const handleChange = e => {
    setValues(values => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const resetForm = () => {
    setValues({
      name: '',
    });
  };

  const renderAlert = () => (
    <div>
      <p>Ваши данные отправленны успешно</p>
    </div>
  );
  const { name, phone, email, subject, text, document } = props;
  return (
    <div className={s.containerForm}>
      <div className={s.sectionForm}>
        <div className={s.containerLogo}>
          <img src={logo} alt="Logo" />
        </div>
        <address className={s.adressInfo} id="adress">
          <h3 className={s.adressTitle}>WORK-MED</h3>
          <p className={s.addressText}>
            46006 Тернопіль , вул. Білогірська 18 в /оф 157
          </p>
          <ul className={s.list}>
            <li className={s.item}>
              <span className={s.itemTitle}>
                <p className={s.itemTitleInfo}>TEL.</p>
              </span>
              <span className={s.itemText}>
                <p className={s.itemTextInfo}>+380965297750</p>
              </span>
            </li>
            <li className={s.item}>
              <span className={s.itemTitle}>
                <p className={s.itemTitleInfo}>TEL.</p>
              </span>
              <span className={s.itemText}>
                <p className={s.itemTextInfo}>+380957092126</p>
              </span>
            </li>
            <li className={s.item}>
              <span className={s.itemTitle}>
                <p className={s.itemTitleInfo}>MAIL</p>
              </span>
              <span className={s.itemText}>
                <p className={s.itemTextInfo}>larssonternopol@ukr.net</p>
              </span>
            </li>
            <li className={s.item}>
              <span className={s.itemTitle}>
                <p className={s.itemTitleInfo}>MAIL</p>
              </span>
              <span className={s.itemText}>
                <p className={s.itemTextInfo}>a.r.kompromis@gmail.com</p>
              </span>
            </li>
          </ul>
        </address>
      </div>
      <div className={s.boxForm}>
        {status && renderAlert()}
        <form onSubmit={handleSubmit} id="form">
          <div className={s.formSection}>
            <label className={s.formlabel} htmlFor="name">
              Ім'я та прізвище
            </label>
            <input
              className={classNames('req', s.forminput)}
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
              id="name"
              required
            />
          </div>
          <div className={s.formSection}>
            <label className={s.formlabel} htmlFor="phone">
              Номер телефону
            </label>
            <input
              className={classNames('email', s.forminput)}
              type="tel"
              onChange={handleChange}
              name="phone"
              value={phone}
              id="phone"
              required
            />
          </div>
          <div className={s.formSection}>
            <label className={s.formlabel} htmlFor="email">
              Адреса email
            </label>
            <input
              className={classNames('req', s.forminput)}
              type="email"
              onChange={handleChange}
              name="email"
              value={email}
              id="email"
              required
            />
          </div>
          <div className={s.formSection}>
            <label className={s.formlabel} htmlFor="subject">
              Тема
            </label>
            <input
              className={s.forminput}
              type="text"
              name="subject"
              onChange={handleChange}
              value={subject}
              id="subject"
              required
            />
          </div>
          <div className={s.formSection}>
            <label className={s.formlabel} htmlFor="text">
              ВМІСТ ПОВІДОМЛЕННЯ
            </label>
            <textarea
              className={s.formArea}
              type="text"
              onChange={handleChange}
              name="text"
              value={text}
              required
            ></textarea>
          </div>
          {/* <div className={s.formSection}>
                        <input className={s.forminputChekbox} type="checkbox" id='check'/>
                        <label className={s.formChekbox} for="check">
                            <a className={s.formLink} href="/"></a>
                        </label>
                    </div> */}

          <div className={s.sectionFormButton}>
            <button type="submit" className={s.buttonForm}>
              Відправіті
            </button>
            <div className={s.containerFormFile}>
              <input
                className={s.formInputFile}
                type="file"
                id="formImage"
                value={document}
                onChange={e => setSelected(e.target.files[0])}
                name="document"
                accept=".jpg, .pdf, .png, .gif"
              />
              <label className={s.labelFormFile} htmlFor="formImage">
                <span className={s.FormSectionFile}>
                  <img src={img} alt="Закрепите файл" />
                </span>
                <span className={s.formTextButton}>Закрепити файл</span>
              </label>
            </div>
            {/* <div id='formPreview' className={classNames('file_preview')}></div> */}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
