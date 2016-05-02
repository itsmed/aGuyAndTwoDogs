const add = (state = { total: 10 }, action) => {
  switch (action.type) {
  case 'ADD':
    return {
      total: total + 1
    };
  default:
    return state;
  }
};

export default add;