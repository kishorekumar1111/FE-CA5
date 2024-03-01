import { useDispatch, useSelector } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();
  const statusResult = useSelector((state) => state.status);

  const handleClick = () => {
    dispatch(statusCheck());
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleClick}>Check Status</button>
      </div>
      <h4>{statusResult}</h4>
    </>
  );
};

export default Category;
