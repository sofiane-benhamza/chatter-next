import Image from "next/image";

export default function Slide3() {
    return (
        <main id="slide-3" className="d-flex flex-column container">
            <p className="h3 my-5 text-center"><i className="bi bi-activity mx-3"></i>Features<i className="bi bi-activity mx-3"></i></p>
            <div className="d-flex flex-wrap flex-row justify-content-center py-3 my-5">

                <FeatureCard source="video" desc="Experience seamless video calls with high-quality streaming, enabling you to connect with your people." />
                <FeatureCard source="call" desc="Enjoy crystal-clear voice calls with advanced audio technology. our voice call ensures you stay connected." />
                <FeatureCard source="safe" desc="We prioritize a safe and family-friendly environment. making our app suitable for users of all ages." />
                <FeatureCard source="partner" desc="Looking to meet new people or find someone special? stay tunned, you are in the right place." />
                <FeatureCard source="noadult" desc="We foster a positive and respectful community, Our app promotes healthy conversations for all users." />
                <FeatureCard source="ai" desc="Our chat app leverages the power of artificial intelligence to enhance your communication experience." />

            </div>

        </main>
    );
}

const FeatureCard = ({ source, desc }) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-11 d-flex flex-column my-2 p-3 align-items-stretch down-to-up">
            <div className="px-2 pb-4 border border-dark shadow-lg">
                <Image src={`/assets/${source}.png`} width={100} height={20} style={{ height: "auto" }} />
                <p className="p-3">{desc}</p>
            <hr />
            <p className="mx-3 text-end"><i className="hover-underline-black cursor-pointer py-1">Learn More</i></p>
            </div>
        </div>
    )
}