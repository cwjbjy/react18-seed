import { useAppDispatch, useAppSelector } from "@/store/hook";
import { increment, decrement, fetchUserInfo } from "@/store/counter";

function PublicPage() {
  const {
    counter: { count, address },
  } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  return (
    <div>
      {count}
      <button onClick={() => dispatch(increment(2))}>增加</button>
      <button onClick={() => dispatch(decrement(2))}>减少</button>
      <button onClick={() => dispatch(fetchUserInfo())}>
        extraReducers请求
      </button>
      {address.map((item: any) => item.name)}
    </div>
  );
}

export default PublicPage;
