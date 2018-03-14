import * as types from './actionTypes';

function changeMenu(menu: string) {
    return {
        type: types.CHANGE_MENU,
        menu
    };
    // return (dispatch: Function) => {
    //     dispatch()
    // }
}

export {
    changeMenu
};
// export default {
//     changeMenu
// };