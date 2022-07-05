import './index.scss';
function Comment(props) {
  const { arrayConst, setarray } = props;
  const text = 'список пуст';

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
            <div>Идентификатор: {item.indifexitor}</div>
            <div>Название товара: {item.username}</div>
            <div>Цена товара: {item.fullname}</div>
          </div>
        </div>
      </div>
    </div>
  ));
  return <div className="column__content">{arrayConst.length > 0 ? listItems : text}</div>;
}
export default Comment;
