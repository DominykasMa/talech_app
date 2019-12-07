export const getData = () => {
  return {
    type: 'GET_PRODUCTS'
  };
}

export const deleteProduct = id => {
  return {
    type: 'DELETE_PRODUCT',
    id
  };
}

export const editProduct = product => {
  return {
    type: 'EDIT_PRODUCT',
    product
  };
}

export const addProduct = product => {
  return {
    type: 'ADD_PRODUCT',
    product
  };
}

export const enableDisableProduct = id => {
  return {
    type: 'ENABLE_DISABLE_PRODUCT',
    id
  };
}

