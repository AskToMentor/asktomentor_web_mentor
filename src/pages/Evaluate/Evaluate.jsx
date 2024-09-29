import React from 'react'
import CardItems from '../../common-components/cards/CardItems'
import testss from "/src/assets/test1.jpg";
import feedback from "/src/gif-assets/feedback.png";
import certificate from "/src/gif-assets/test3.png";
import certificate2 from "/src/gif-assets/test_as.png";
import quiz from "/src/gif-assets/quiz.png";

const Evaluate = () => {
    return (<>
        <div className=' h-full w-full'>
            <div className="flex h-full overflow-y-auto justify-center items-center max-w-[1100px] w-full flex-wrap lg:gap-6 gap-4 mx-auto lg:p-10 p-6" >
                <CardItems image={quiz} title={`Skill-Specific Quiz`} link={`/skill-specific-quiz`} />
                <CardItems image={testss} title={`Diagnostic Assessment`} link={`/diagnosticform`} />
                <CardItems image={feedback} title={`Scenario-Based Exam`} link={`/scenario-based`} />
                <CardItems image={certificate} title={`Problem-Solving Exercise`} link={`/problemsolving`} />
                <CardItems image={certificate2} title={`Adaptive Testing`} link={`/generate-quiz`} />
            </div>
        </div>
    </>
    )
}

export default Evaluate