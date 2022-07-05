import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Comment from './Comment/Comment';
import './form-style.scss';

function FormContainer() {
  const arayTest = [];
  const [arrayConst, setarrayConst] = useState([]);

  const { register, handleSubmit } = useForm();

  // function Comment() {
  //   const remove = (index) => {
  //     const newAray = [...arrayConst];
  //     newAray.splice(index, 1);
  //     setarrayConst(newAray);
  //   };
  //   const text = 'список пуст';
  //   const listItems = arrayConst.map((item, index) => (
  //     <div className="column__content-stylys" key={index.toString()}>
  //       <div className="comment">
  //         <div className="comment-conteiner">
  //           <button
  //             className="comment-btn btn"
  //             onClick={() => {
  //               remove(index);
  //             }}
  //           >
  //             Удалить товар
  //           </button>
  //           <img className="comment-avatar" src={`http://placekitten.com/g/${90}/${90}`} />
  //           <div className="comment__info">
  //             <div>Идентификатор: {item.indifexitor}</div>
  //             <div>Название товара: {item.username}</div>
  //             <div>Цена товара: {item.fullname}</div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   ));
  //   // return <div className="column__content">{array.length > 0 ? listItems : text}</div>;
  //   return <div className="column__content">{listItems}</div>;
  // }

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
                  {...register('username')}
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
                  {...register('fullname')}
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
          <p>Lorem ipsum dolor</p>
          <div className="statistics__quantity">10</div>
          <div className="statistics__price">10</div>
        </div>
        <div className="discount">
          <div className="discount__number"></div>
          <div className="discount__conteiner">
            <button className="discount__btn-apply btn">Установить скидку</button>
            <button className="discount__btn-delete btn">Убрать скидки</button>
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
