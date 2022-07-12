import './index.scss';
function Comment({ arrayConst, setarray, btnClick }) {
  const text = 'Cписок пуст';

  const remove = (index) => {
    const newAray = [...arrayConst];
    newAray.splice(index, 1);
    setarray(newAray);
  };

  const listItems = arrayConst.map((item, index) => (
    <div className="column__content-stylys" key={index.toString()}>
      <div className="comment">
        <div className="comment-conteiner">
          <button
            className="comment-btn btn"
            onClick={() => {
              remove(index);
            }}
          >
            Удалить товар
          </button>
          <img className="comment-avatar" src={`http://placekitten.com/g/${90}/${90}`} />
          <div className="comment__info">
            <div className="comment__info-text">
              <p>Идентификатор: </p>
              <p>{item.indifexitor}</p>
            </div>
            <div className="comment__info-text">
              <p>Название товара: </p>
              <p>{item.name}</p>
            </div>
            <div className="comment__info-text">
              <p> Цена товара: </p>
              <p style={btnClick ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>
                {item.price}
              </p>
              <p>{item.newPrice}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="column__content">
      {arrayConst.length > 0 ? listItems : <h4 className="comment-avatar__text-h4">{text}</h4>}
    </div>
  );
}
export default Comment;
