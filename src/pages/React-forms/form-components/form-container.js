import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Comment from './Comment/Comment';
import './form-style.scss';

function FormContainer() {
  const arrayKeep = [];
  const [arrayConst, setarrayConst] = useState(arrayKeep);

  const [inputDis, setInputDis] = useState('0');

  const { register, handleSubmit } = useForm();

  function calcSum() {
    let sum = 0;
    arrayConst.forEach((item) => {
      sum += +item.price;
    });
    return sum;
  }

  function calcSumDiscount() {
    let sum = 0;
    arrayConst.forEach((item) => {
      sum += +item.newPrice;
    });
    return sum.toFixed(1);
  }

  function calcDiscount() {
    const newAray = [...arrayConst];
    newAray.forEach((item) => {
      if (inputDis == 0) {
        return (item.newPrice = '');
      }
      item.newPrice = (item.price - item.price * (inputDis / 100)).toFixed(2);
    });
    setarrayConst(newAray);
  }

  function disableDiscount() {
    const newAray = [...arrayConst];
    newAray.forEach((item) => {
      item.newPrice = '';
    });
    setarrayConst(newAray);
  }

  function onSubmit(data, e) {
    setarrayConst([...arrayConst, data]);
    e.target.reset();
  }

  return (
    <div>
      <div className="conteiner">
        <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-main__container">
            <div className="form-main__input-content">
              <label className="form-main__label-input">
                Числовой идентификатор товара:
                <input
                  required
                  min="0"
                  className="form-main__input-text"
                  type="number"
                  {...register('indifexitor')}
                  placeholder="идентификатор"
                />
              </label>
              <label className="form-main__label-input">
                Название товара:
                <input
                  required
                  // minLength={2}
                  className="form-main__input-text"
                  type="text"
                  {...register('name')}
                  placeholder="Название"
                />
              </label>
              <label className="form-main__label-input">
                Цена товара:
                <input
                  required
                  min="0"
                  className="form-main__input-text"
                  type="number"
                  {...register('price')}
                  placeholder="Цена"
                />
              </label>
              <label className="form-main__label-input-none ">
                Цена товара:
                <input
                  min="0"
                  className="form-main__input-text"
                  type="number"
                  {...register('newPrice')}
                  placeholder="Цена"
                />
              </label>
            </div>

            <button className="form-main__input-btn btn" type="submit">
              Submit
            </button>
          </div>
        </form>
        <div className="statistics">
          <div className="statistics__quantity">Количество товаров: {arrayConst.length}</div>
          <div className="statistics__price">
            Цена списка товаров:
            {calcSumDiscount() > 0 ? (
              <>
                <span style={{ textDecoration: 'line-through', padding: '0px 10px' }}>
                  {calcSum()}
                </span>
                <span style={{ textDecoration: 'none' }}>{calcSumDiscount()}</span>
              </>
            ) : (
              calcSum()
            )}
            <span
              style={
                calcSumDiscount() > 0
                  ? { textDecoration: 'line-through' }
                  : { textDecoration: 'none' }
              }
            ></span>
          </div>
        </div>
        <div className="discount">
          <div className="discount__number">
            <input
              className="discount__number-input"
              type="range"
              id="discount"
              name="volume"
              min="0"
              max="99"
              step="5"
              onChange={(event) => setInputDis(event.target.value)}
            />
            <label htmlFor="discount">Скидка: {inputDis}</label>
          </div>
          <div className="discount__conteiner">
            <button
              className="discount__btn-apply btn"
              onClick={() => {
                calcDiscount();
              }}
            >
              Установить скидку
            </button>
            <button
              className="discount__btn-delete btn"
              onClick={() => {
                disableDiscount();
              }}
            >
              Убрать скидки
            </button>
          </div>
        </div>
      </div>
      <div className="form-card">
        <div>
          <Comment arrayConst={arrayConst} setarray={setarrayConst} />
        </div>
      </div>
    </div>
  );
}

export default FormContainer;
