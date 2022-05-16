import React from "react";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export interface AppProvidersProps {
    children: React.ReactNode;
}

export function AppProviders(props: AppProvidersProps) {
    const {children} = props;

    return <DndProvider backend={HTML5Backend}>{children}</DndProvider>;
}
