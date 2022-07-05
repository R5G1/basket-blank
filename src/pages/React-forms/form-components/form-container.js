import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Comment from './Comment/Comment';

export default function FormContainer() {
  const arayTest = [];
  const [arrayConst, setarrayConst] = useState(arayTest);

  const { register, handleSubmit } = useForm();

  function onSubmit(data, e) {
    setarrayConst([...arrayConst, data]);
    e.target.reset();
  }

  return (
    <div>
      <form className="form-main" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-main__container">
          <div className="form-main__input-content">
            <label className="form-main__label-input">
              name:
              <input
                required
                // minLength={2}
                className="form-main__input-text"
                type="text"
                {...register('username')}
                placeholder="Username"
              />
            </label>
            <label className="form-main__label-input">
              full name:
              <input
                required
                className="form-main__input-text"
                type="text"
                {...register('fullname')}
                placeholder="Full name"
              />
            </label>
            <label className="form-main__label-input">
              date:
              <input
                className="form-main__input-text"
                required
                type="date"
                id="date"
                {...register('date')}
                min="2021-01-01"
                max="2022-12-31"
              />
            </label>
          </div>

          <div className="form-main__input-container">
            <select
              defaultValue={'DEFAULT'}
              className="form-main__input-select"
              {...register('select')}
            >
              <option value="DEFAULT" disabled>
                Choose a salutation ...
              </option>
              <option value="man">man</option>
              <option value="woman">woman</option>
              <option value="child">child</option>
            </select>
          </div>

          <button className="form-main__input-btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <div className="form-card">
        <div>
          <Comment arrayConst={arrayConst} />
        </div>
      </div>
    </div>
  );
}
