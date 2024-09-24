import React from 'react';
import CardItems from '../../common-components/cards/CardItems';
import testss from "/src/assets/test1.jpg";
import feedback from "/src/gif-assets/feedback.png";
import certificate from "/src/gif-assets/test3.png";
import certificate2 from "/src/gif-assets/test_as.png";
import quiz from "/src/gif-assets/quiz.png";

const Evaluate = () => {
    return (
        <div className='h-screen w-full overflow-y-auto'>
            <div className="flex h-full justify-center max-w-[1100px] w-full mx-auto p-6">
                <div className="flex flex-wrap justify-center gap-6">
                    <CardItems image={quiz} title={`Skill-Specific Quiz`} link={`/skill-specific-quiz`} />
                    <CardItems image={testss} title={`Diagnostic Assessment`} link={``} />
                    <CardItems image={feedback} title={`Scenario-Based Exam`} link={`/scenario-based`} />
                    <CardItems image={certificate} title={`Problem-Solving Exercise`} link={``} />
                    <CardItems image={certificate2} title={`Adaptive Testing`} link={`/generate-quiz`} />
                </div>
            </div>
        </div>
    );
};

export default Evaluate;
