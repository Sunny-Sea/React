import { createStore } from "redux";

import { addUserAction, deleteUserAction } from "./action/userAction";
import reducer from "./reducer";

const store = createStore(reducer);

console.log(store);

const unListen = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(
    addUserAction({
        id: 3,
        name: "abc",
        age: 10,
    }),
);

unListen(); //取消监听

store.dispatch(deleteUserAction(3));

// unListen(); //取消监听
