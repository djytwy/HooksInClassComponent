import { useEffect, useState } from 'react';

export const useTest = () => {
    const [state, setState] = useState<number>(0);

    useEffect(() => {
        console.log('this is useEffect !');
    }, [])

    return {
        state: state,
        setState: setState
    }
}