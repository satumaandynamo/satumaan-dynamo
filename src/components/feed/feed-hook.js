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

  function get(amount) {
    dispatch({ type: A.loading })

    const image = () => {
      const aspect = Math.random() > 0.5 ? 1 : 1
      const height = Math.round(Math.random() * 300 + 200)
      const width = Math.round(height * aspect)

      return {
        src: `https://random.imagecdn.app/${height}/${width}`,
        height: height,
        width: width,
      }
    }

    const value = new Array(amount).fill(null).map((d) => image())

    dispatch({ type: A.get, value })
  }

  return [model, { get }]
}
