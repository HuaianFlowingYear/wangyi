// import { reject, resolve } from "core-js/fn/promise"

// 将promise进行二次封装
export const co = (p) => {
    return new Promise((resolve) => {
        p.then((res) => {
            resolve([null, res]);
        }).catch((err) => {
            resolve([err, null]);
        });
    });
};