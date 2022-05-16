import React, {Fragment, HTMLAttributes, useEffect, useLayoutEffect, useMemo, useRef, useState,} from "react";
import _ from "lodash";

import {ColumnResizer} from "./ColumnResizer";
import {useDynamicRef} from "./useDynamicRef";
import {usePrevious} from "./usePrevious";

export interface ResizableColumnsProps {
    columnWidthPercentages: number[];
    containerStyle?: React.CSSProperties;
    minColumnWidth?: number;
    onChange?: (result: {
        containerWidth: number;
        widthPercentages: number[];
    }) => void;
    onFinish?: (result: {
        containerWidth: number;
        widthPercentages: number[];
    }) => void;
    renderColumnComponent?: (
        columnProps: HTMLAttributes<any>,
        index: number
    ) => React.ReactNode;
    roundCases?: number;
    shouldAffectOtherColumns?: false | "sibling" | "all";
    throttle?: number;
}

export const ResizableColumns = React.memo(function ResizableColumns(
    props: ResizableColumnsProps
) {
    const {
        columnWidthPercentages,
        containerStyle,
        minColumnWidth = 50,
        onChange,
        onFinish,
        renderColumnComponent = (columnProps) => <div {...columnProps} />,
        roundCases = 2,
        shouldAffectOtherColumns = "all",
        throttle = 0,
    } = props;

    const containerRef = useRef<HTMLDivElement>(null);

    const [containerWidth, setContainerWidth] = useState(0);
    const [resizingIndex, setResizingIndex] = useState(-1);
    const [xDiffPercentageByIndex, setXDiffPercentageByIndex] = useState<number[]>([]);

    const isResizing = resizingIndex >= 0;
    const paramsRef = useDynamicRef({
        ...props,
        containerWidth,
        isResizing,
        minColumnWidth,
        onChange,
        onChangeThrottled: onChange,
        onFinish,
        onFinishThrottled: onFinish,
        resizingIndex,
        roundCases,
        shouldAffectOtherColumns,
        throttle,
        xDiffPercentageByIndex,
    });

    paramsRef.current.onChangeThrottled = useMemo(
        () =>
            paramsRef.current.onChange &&
            _.throttle(paramsRef.current.onChange, throttle),
        [throttle, paramsRef]
    );
    paramsRef.current.onFinishThrottled = useMemo(
        () =>
            paramsRef.current.onFinish &&
            _.throttle(paramsRef.current.onFinish, throttle),
        [throttle, paramsRef]
    );

    useLayoutEffect(() => {
        const p = paramsRef.current;
        if (!p.isResizing) return () => {
        };

        const onMouseMove = (e: MouseEvent) => {
            setXDiffPercentageByIndex((prevValue) => {
                const newValue = prevValue.slice();

                const currentWidth =
                    p.containerWidth *
                    (((p.columnWidthPercentages[p.resizingIndex] || 0) +
                            (newValue[p.resizingIndex] || 0)) /
                        100);

                const diffX = Math.max(-(currentWidth - p.minColumnWidth), e.movementX);

                if (p.shouldAffectOtherColumns === "sibling") {
                    const siblingWidth =
                        p.containerWidth *
                        (((p.columnWidthPercentages[p.resizingIndex + 1] || 0) +
                                (newValue[p.resizingIndex + 1] || 0)) /
                            100);

                    const safeDiffX = -Math.max(
                        -(siblingWidth - p.minColumnWidth),
                        -diffX
                    );

                    newValue[p.resizingIndex] =
                        (newValue[p.resizingIndex] || 0) +
                        (safeDiffX / (p.containerWidth || 0)) * 100;

                    newValue[p.resizingIndex + 1] =
                        (newValue[p.resizingIndex + 1] || 0) -
                        (safeDiffX / (p.containerWidth || 0)) * 100;
                } else if (p.shouldAffectOtherColumns === "all") {
                    let totalPartialDiffXLeft = 0;
                    let totalPartialDiffXRight = 0;

                    let totalPartialDiffX = 0;
                    const availableDiffsX = p.columnWidthPercentages.map(
                        (columnPercentage, i) => {
                            const diffXWithCorrectSign =
                                diffX * (i > p.resizingIndex ? -1 : 1);

                            const width =
                                p.containerWidth *
                                (((columnPercentage || 0) + (newValue[i] || 0)) / 100);

                            const estimatedPartialDiffX =
                                i === p.resizingIndex
                                    ? totalPartialDiffX || diffXWithCorrectSign
                                    : (diffXWithCorrectSign /
                                        (diffXWithCorrectSign === diffX ? 2 : 1) -
                                        totalPartialDiffX) /
                                    (i > p.resizingIndex
                                        ? p.columnWidthPercentages.length - i
                                        : p.resizingIndex - i);

                            let safeDiffX = Math.max(
                                -(width - p.minColumnWidth),
                                estimatedPartialDiffX
                            );
                            safeDiffX = Math.round(safeDiffX * 1000) / 1000;

                            totalPartialDiffX += safeDiffX;

                            if (i === p.resizingIndex) {
                                totalPartialDiffXLeft = totalPartialDiffX;
                                totalPartialDiffX = 0;
                            }

                            return safeDiffX;
                        }
                    );

                    totalPartialDiffXRight = totalPartialDiffX;

                    if (!(totalPartialDiffXLeft && totalPartialDiffXRight))
                        return newValue;

                    const totalPartialDiffXMultipler =
                        Math.abs(totalPartialDiffXLeft) / Math.abs(totalPartialDiffXRight);
                    const normalizedAvailableDiffXs = availableDiffsX.map(
                        (availableDiffX, i) => {
                            const multiplier =
                                i <= p.resizingIndex
                                    ? totalPartialDiffXMultipler > 1
                                        ? 1 / totalPartialDiffXMultipler
                                        : 1
                                    : totalPartialDiffXMultipler < 1
                                        ? totalPartialDiffXMultipler
                                        : 1;

                            return availableDiffX * multiplier;
                        }
                    );

                    normalizedAvailableDiffXs.forEach((normalizedAvailableDiffX, i) => {
                        newValue[i] =
                            (newValue[i] || 0) +
                            (normalizedAvailableDiffX / (p.containerWidth || 0)) * 100;
                    });
                } else {
                    newValue[p.resizingIndex] =
                        (newValue[p.resizingIndex] || 0) +
                        (diffX / (p.containerWidth || 0)) * 100;
                }

                return newValue;
            });
        };
        document.addEventListener("mousemove", onMouseMove);

        const onMouseUp = (_e: MouseEvent) => {
            setResizingIndex(-1);
        };
        document.addEventListener("mouseup", onMouseUp);

        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };
    }, [isResizing, paramsRef]);

    useEffect(() => {
        const handler = () => {
            setContainerWidth(containerRef.current?.offsetWidth || 0);
        };

        window.addEventListener("resize", handler);

        handler();

        return () => {
            window.removeEventListener("resize", handler);
        };
    }, []);

    useEffect(() => {
        setXDiffPercentageByIndex([]);
    }, [columnWidthPercentages.join("|")]);

    const finalWidthPercentages = useMemo(
        () =>
            getSafeWidthPercentages(
                columnWidthPercentages.map(
                    (widthPercentage, index) =>
                        (widthPercentage || 0) + (xDiffPercentageByIndex[index] || 0)
                ),
                roundCases
            ),
        [columnWidthPercentages, xDiffPercentageByIndex, roundCases]
    );

    useEffect(() => {
        if (!paramsRef.current.isResizing) return;

        paramsRef.current.onChangeThrottled?.({
            containerWidth,
            widthPercentages: finalWidthPercentages,
        });
    }, [containerWidth, finalWidthPercentages, paramsRef]);

    const wasResizing = usePrevious(isResizing);
    useEffect(() => {
        if (!(wasResizing && !isResizing)) return;

        paramsRef.current.onFinishThrottled?.({
            containerWidth: paramsRef.current.containerWidth,
            widthPercentages: finalWidthPercentages,
        });
    }, [wasResizing, isResizing, finalWidthPercentages, paramsRef]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                width: "99.05%",
                borderRadius: "10px",

                overflowX: "hidden",
                backgroundColor: "rgba(0, 0, 0, 0.05)",
                ...containerStyle,
            }}
        >
            {(() => {
                let offset = 0;
                return finalWidthPercentages.map((finalWidthPercentage, index) => {
                    offset += containerWidth * (finalWidthPercentage / 100);

                    return (
                        <Fragment key={`column-${index}`}>
                            {renderColumnComponent(
                                {
                                    style: {
                                        position: "relative",
                                        flexShrink: 0,
                                        width: `${finalWidthPercentage}%`,
                                        height: props.renderColumnComponent ? "auto" : "100%",
                                    },
                                },
                                index
                            )}

                            {!(
                                shouldAffectOtherColumns &&
                                index === columnWidthPercentages.length - 1
                            ) && (
                                <ColumnResizer
                                    isActive={isResizing ? resizingIndex === index : null}
                                    offset={offset}
                                    onStart={() => {
                                        setResizingIndex(index);
                                    }}
                                />
                            )}
                        </Fragment>
                    );
                });
            })()}
        </div>
    );
});

// prevent sum being more than 100% after round mechanism
export function getSafeWidthPercentages(
    unsafeWidthPercentages: number[],
    roundCases = 2
): number[] {
    function roundWidthPercentValue(value: number) {
        return Math.round((value || 0) * 10 ** roundCases) / 10 ** roundCases;
    }

    const widthPercentages = unsafeWidthPercentages.map(roundWidthPercentValue);
    const sum = widthPercentages.reduce((a, b) => a + b, 0);

    if (sum > 100) {
        const highest = widthPercentages
            .slice()
            .sort((a, b) => a - b)
            .pop();
        const highestIndex =
            highest === undefined
                ? widthPercentages.length - 1
                : widthPercentages.length -
                1 -
                widthPercentages.slice().reverse().indexOf(highest);

        const newValue = roundWidthPercentValue(
            Math.max(0, widthPercentages[highestIndex] - (sum - 100))
        );
        widthPercentages[highestIndex] = newValue;
    } else if (sum < 100) {
        const lowest = widthPercentages
            .slice()
            .sort((a, b) => b - a)
            .pop();
        const lowestIndex =
            lowest === undefined
                ? widthPercentages.length - 1
                : widthPercentages.length -
                1 -
                widthPercentages.slice().reverse().indexOf(lowest);

        const newValue = roundWidthPercentValue(
            Math.max(0, widthPercentages[lowestIndex] + (100 - sum))
        );
        widthPercentages[lowestIndex] = newValue;
    }

    return widthPercentages;
}
