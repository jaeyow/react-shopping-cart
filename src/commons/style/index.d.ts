import * as React from 'react'
import { ThemedStyledComponentsModule } from 'styled-components'

declare module 'styled-components' {
    export type ThemedStyledComponentsModule<T> = {
        createGlobalStyle(
            strings: TemplateStringsArray,
            ...interpolations: SimpleInterpolation[]
        ): React.ComponentClass;
    }

    export function createGlobalStyle(
        strings: TemplateStringsArray,
        ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass
}
