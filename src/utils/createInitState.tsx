
// eslint-disable-next-line import/prefer-default-export

import { CubeProp } from '../types'
export const createInitState = (baseLength = 4):CubeProp[] => {
    const baseState = {
        num: 0,
        x: 0,
        y: 0,
        pre: 0,
        next: 0
    }
    const result: CubeProp[] = []
    for (let i = 0; i < baseLength; i++) {
        for (let j = 0; j < baseLength; j++) {
            result.push({
                ...baseState,
                x: i,
                y: j,
            })
        }
    }
    return randomSelect(result, 8)
}


export const randomSelect = (array: CubeProp[], count: number): CubeProp[] => {
    let length = array.length
    if (count >= length) return array
    let i = count
    const empty:CubeProp[] = []
    while (i > 0) {
        i--
        const index = Math.floor(Math.random() * (array.length))
        const spliceObj = array.splice(index, 1)[0]
        empty.push({
            ...spliceObj,
            num: 2
        })
    }
    return [...array, ...empty]
}