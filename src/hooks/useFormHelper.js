import { useState } from "react";
import produce from "immer";

function useFormHelper() {
  const initialValues = {}
  const [state, setState] = useState(initialValues)
  const immerSetState = newState => setState(currentState => produce(currentState, newState));

  const _handleOnChangeInput = e => {
    const { name, value } = e.target
    immerSetState(draft => {
      draft[name] = value
    })
  }

  const _handleOnChangeSelect = (value, name) => {
    immerSetState(draft => {
      draft[name] = value
    })
  }

  const _handleOnFreqSocmedChange = e => {
    const { name, value } = e.target
    immerSetState(draft => {
      if(draft[name] != value) {
        draft[name] = value
      } else draft[name] = null      
    })
  }

  return {
    state,
    immerSetState,
    _handleOnChangeInput,
    _handleOnChangeSelect,
    _handleOnFreqSocmedChange
  }
}

export default useFormHelper
