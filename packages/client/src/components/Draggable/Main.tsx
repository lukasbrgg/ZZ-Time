import React, {useState} from "react";

import {ResizableColumns, ResizableColumnsProps} from "./ResizableColumns";

let elements: any[] = [{}];

// @ts-ignore
export function Main({columns}) {
    const columnWidthPercentages = columns.map(
        (c: { widthPercentage: any }) => c.widthPercentage || 0
    );

    console.log(columns);

    const [result, setResult] = useState({
        containerWidth: 0,
        widthPercentages: columnWidthPercentages,
    });

    const [shouldAffectOtherColumns, setShouldAffectOtherColumns] =
        useState<ResizableColumnsProps["shouldAffectOtherColumns"]>("all");

    return (
        <>
            <ResizableColumns
                columnWidthPercentages={columnWidthPercentages}
                minColumnWidth={10}
                onChange={setResult}
                renderColumnComponent={(columnProps, index) => (
                    <div
                        {...columnProps}
                        style={{
                            ...columnProps.style,
                            height: 100,
                            borderRadius: "10px",
                            backgroundColor: columns[index]?.color,
                        }}
                    />
                )}
                shouldAffectOtherColumns={shouldAffectOtherColumns}
                // throttle={100}
            />
        </>
    );
}
