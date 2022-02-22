import * as React from 'react'
import {useTest} from './hooks'

export const withHooksHOC : Function = (C: any ) => {
    return () => {
        const { state, setState } = useTest()

        return <C setState={setState} state={state} />
    }
}