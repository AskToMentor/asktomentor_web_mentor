import React from 'react'
import CardItems from '../../common-components/cards/CardItems'
import testss from "/src/assets/test1.jpg";
import feedback from "/src/assets/feedback.png";
import certificate from "/src/assets/test3.png";
import certificate2 from "/src/assets/test_as.png";
import quiz from "/src/assets/quiz.png";

const Evaluate = () => {
    return (
        <div className="flex h-full  justify-center items-center max-w-[1100px] w-full flex-wrap lg:gap-6 gap-4 mx-auto lg:p-10 p-6" >
            <CardItems image={quiz} title={`Skill-Specific Quiz`} backContent={`Back content`} />
            <CardItems image={testss} title={`Diagnostic Assessment`} backContent={`Back content`} />
            <CardItems image={feedback} title={`Scenario-Based Exam`} backContent={`Back content`} />
            <CardItems image={certificate} title={`Problem-Solving Exercise`} backContent={`Back content`} />
            <CardItems image={certificate2} title={`Adaptive Testing`} backContent={`Back content`} />
        </div>
    )
}

export default Evaluate