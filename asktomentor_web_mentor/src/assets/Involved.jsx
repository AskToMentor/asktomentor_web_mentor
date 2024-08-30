import InvolvedCard from './InvolvedCard';

const Involved = () => {
    return (
        <div className='mt-5'>
            <h3 className="text-white font-semibold pl-5 text-2xl">Steps Involved</h3>
            <div className="flex w-full flex-grow gap-2">
                <InvolvedCard
                    name="Connect with Mentors"
                    description="Choose from a variety of mentors specializing in different fields of expertise"
                    videoPlaceholder="/img1.jpeg"
                />

                <InvolvedCard
                    name="Ask Questions From Mentor"
                    description="Ask detailed questions and get personalized answers from our mentors."
                    videoPlaceholder="/img3.jpeg"
                />

                <InvolvedCard
                    name="Personalized Guidance"
                    description="Receive tailored advice and strategies to overcome your learning challenges."
                    videoPlaceholder="/img2.jpeg"
                />

                <InvolvedCard
                    name="Access Learning Resources"
                    description="Explore blogs, articles, and educational content curated by our mentors."
                    videoPlaceholder="/img4.jpeg"
                />
            </div>
        </div>
    )
}

export default Involved;