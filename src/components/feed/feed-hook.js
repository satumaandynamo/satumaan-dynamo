import { useReducer } from 'react'

const initialModelState = {
  data: [],
  loading: false,
}

const A = {
  loading: 'loading',
  get: 'get',
}

export function useFeed(_initialData = []) {
  const reducer = (state, action) => {
    switch (action.type) {
      case A.loading:
        return { ...state, loading: true }
      case A.get:
        return { ...state, data: [...action.value], loading: false }
      default:
    }
  }

  const [model, dispatch] = useReducer(reducer, {
    ...initialModelState,
    data: _initialData,
  })

  function get(type) {
    dispatch({ type: A.loading })

    fetch(`http://localhost:3003/api/feed?type=${type}`)
      .then(response => response.json())
      .then(value => dispatch({ type: A.get, value }))
      .catch(err => console.error('Loading feed failed, ', err));
  }

  return [model, { get }]
}
