import Image from "next/image";

export default function Slide1() {
    return (
        <main id="slide-1" className="d-flex flex-wrap justify-content-center">
            <div className="col-lg-5 col-md-10 col-sm-11 col-xs-11 d-flex flex-column justify-content-center align-items-center">
                <div className="col-lg-8 col-md-10 col-sm-11 col-xs-11">
                    <p className="h1 my-4"><i className="bi bi-chat-dots-fill ms-2 me-3"></i>Meet New People</p>
                    <p className="h5 lh-lg">Meeting new people can be both exciting and challenging. Whether you're looking to make new friends,
                        network for professional reasons, or simply expand your social circle, there are many effective strategies to help you connect with others.
                        we use them all to help you building meaningful relationships.</p>
                    <div className="mt-5 d-flex justify-content-center align-items-center">
                        <p className="btn btn-primary border border-dark mx-2 py-3 px-5">Join Us</p>
                        <p className="btn btn-light border border-dark mx-2 py-3 px-5">Learn More</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-md-10 col-sm-11 col-xs-11 d-flex justify-content-center align-items-center">
                <Image src={"/assets/people-chatting.gif"} layout="responsive" alt="people chatting" height={600} width={700} style={{ width: '70%', height: 'auto' }} />
            </div>
        </main>
    );
}