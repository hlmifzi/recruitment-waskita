import React, { createContext, useContext, useState } from 'react'
import produce from "immer";

export const FormCreateContext = createContext()

const FormContext = (props) => {
    const initialStateInput = {}
    const [state, setState] = useState(initialStateInput)
    const immerSetState = newState => setState(currentState => produce(currentState, newState));
    const contextValue = [state, immerSetState];

    return <FormCreateContext.Provider value={contextValue} {...props} />
}

export const useGeneralForm = () => {
    const [state, immerSetState] = useContext(FormCreateContext);

    const _handleOnChangeInput = (e, { setTimeOut = 0 }) => {
        const { name, value } = e.target
        immerSetState(draft => {
            draft[name] = value
            if (setTimeOut) draft['setTimeOut'] = setTimeOut
        })
    }


    const _handleOnChangeToogleSwitch = e => {
        const { id } = e.target
        immerSetState(draft => {
            draft[id] = !state[id]
        })
    }

    const _handleOnChangeSelect = (value, name) => {
        immerSetState(draft => {
            draft[name] = value
        })
    }


    return {
        state,
        immerSetState,
        _handleOnChangeToogleSwitch,
        _handleOnChangeInput,
        _handleOnChangeSelect
    }

}
export default FormContext
