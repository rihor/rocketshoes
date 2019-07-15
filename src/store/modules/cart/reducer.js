import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        // checa se o produto é repetido
        const productIndex = draft.findIndex(p => p.id === action.product.id);
        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({ ...action.product, amount: 1 });
        }
      });
    /**
     * vou deixar isso aqui porque eu consegui fazer sem usar a lib
     * const productIndex = state.findIndex(p => p.id === action.product.id);
     * if (productIndex >= 0) {
     *  state[productIndex].amount += 1;
     *  return state;
     * }
     * return [...state, { ...action.product, amount: 1 }];
     */

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);
        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    default:
      return state;
  }
}
