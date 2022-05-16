import React, {useState} from "react";
import {RadialProgress} from "react-radial-progress-indicator";

import "react-count-animation/dist/count.min.css";

import {
  AssigneeWrapper,
  AssigneeWrapper1,
  ImageBox,
  InnerCardTop,
  InnerWrapper,
  LeftCards,
  LeftCardss,
  LeftCardWrapper,
  Machine,
  Number,
  OuterWrapper,
  Progress,
  RighInnerWrapper,
  RightCardWrapper,
  RightInnerCards,
  RightInnerCards1,
  RightInners,
  Title,
  Title1,
  Title2,
  Title3,
} from "./home";

import CountUp from "react-countup";

import M2 from "../../../assets/m2.svg";

const Menu = () => {
    const [selectRecent, setSelectRecent] = useState(true);
    const [selectRecent1, setSelectRecent1] = useState(false);

    return (
        <OuterWrapper>
            <Title>most recent</Title>
            <InnerWrapper>
                <LeftCardWrapper>
                    <LeftCards selectRecent={selectRecent} onClick={() => {
                        setSelectRecent(true)
                        setSelectRecent1(false)

                    }}>
                        <Machine src={M2}/>
                        <Title1>M2 Touch</Title1>
                    </LeftCards>
                    <LeftCardss selectRecent={selectRecent1} onClick={() => {
                        setSelectRecent(false)
                        setSelectRecent1(true)

                    }}>
                        <Machine src={M2}/>
                        <Title1>M2 Touch</Title1>
                    </LeftCardss>
                </LeftCardWrapper>
                <RightCardWrapper>
                    <RighInnerWrapper>
                        <RightInners>
                            <InnerCardTop>
                                <Title3>Assignees</Title3>
                                <AssigneeWrapper>
                                    <ImageBox>

                                    </ImageBox>

                                    <ImageBox>

                                    </ImageBox>
                                    <ImageBox>

                                    </ImageBox>
                                </AssigneeWrapper>
                                <AssigneeWrapper1>

                                </AssigneeWrapper1>
                            </InnerCardTop>
                        </RightInners>
                        <RightInners>
                            <RightInnerCards>
                                <Title2>hours invested</Title2>

                                <CountUp start={0} end={450} duration={1} redraw={true}>
                                    {({countUpRef}) => (
                                        <div>
                                            <Number ref={countUpRef}></Number>
                                        </div>
                                    )}
                                </CountUp>
                            </RightInnerCards>
                            <RightInnerCards1>
                                <Title2>state</Title2>
                                <Progress>
                                    <RadialProgress
                                        backgroundColour="#dff0d8"
                                        backgroundTransparent
                                        duration={5000}
                                        fontRatio={5}
                                        height={200}
                                        ringBgColour="#272727"
                                        ringFgColour="#36AA68"
                                        ringIntermediateColour="#36AA68"
                                        ringThickness={0.11}
                                        segmented={false}
                                        showIntermediateProgress
                                        startStep={0}
                                        step={80}
                                        steps={100}
                                        text={function text(steps, percentage) {
                                            return (
                                                (Math.floor(steps * percentage * 10) / 10).toFixed(0) +
                                                "%"
                                            );
                                        }}
                                        width={200}
                                    />
                                </Progress>
                            </RightInnerCards1>
                        </RightInners>
                    </RighInnerWrapper>
                </RightCardWrapper>
            </InnerWrapper>
        </OuterWrapper>
    );
};

export default Menu;
