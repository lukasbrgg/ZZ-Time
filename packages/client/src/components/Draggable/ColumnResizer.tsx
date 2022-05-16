import React from "react";

export interface ColumnResizerProps {
    isActive: boolean | null;
    offset: number;
    onStart: () => void;
    size?: number;
}

export function ColumnResizer(props: ColumnResizerProps) {
    const {offset, size = 6, isActive, onStart} = props;

    return (
        <div
            style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: offset,
                width: "5px",
                backgroundColor: "#272727",
                cursor: "col-resize",
                height: "100px",
                display: "flex",
                justifyContent: "center",

                userSelect: "none",
                zIndex: 1,
            }}
            onMouseDownCapture={() => {
                onStart();
            }}
        />
    );
}
