import { JSX, ReactNode } from 'react';

interface ifProps {
    element: ReactNode;
    condition: boolean;
}

export function If({condition, element}: ifProps): JSX.Element {
    if (!condition) {
        return null as unknown as JSX.Element;
    }
    
    return element as any as JSX.Element;
}