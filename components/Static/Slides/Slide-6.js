import Image from "next/image";

export default function Slide6() {
    return (
        <main id="slide-6" className="d-flex flex-wrap justify-content-center">
            <div className="col-lg-5 col-md-10 col-sm-11 col-xs-11 d-flex coumn-reverse justify-content-center align-items-center">
                <Image src={"/assets/bird-flying.gif"} layout="responsive" alt="bird flying" height={400} width={500} style={{ width: '50%', height: 'auto' }} />
            </div>
            <div className="col-lg-5 col-md-10 col-sm-11 col-xs-11 d-flex flex-column justify-content-center align-items-center">
                <div className="col-lg-8 col-md-10 col-sm-11 col-xs-11">
                    <p className="h1 my-4"><i className="bi bi-fast-forward-circle-fill ms-2 me-3"></i>Fast Connect</p>
                    <p className="h5 lh-lg">Our advanced technology guarantees lightning-fast connectivity through our optimized APIs, ensuring seamless communication.</p>
                    <div className="mt-5 d-flex justify-content-center align-items-center">
                        <p className="btn btn-primary border border-dark mx-2 py-3 px-5">Join Us</p>
                        <p className="btn btn-light border border-dark mx-2 py-3 px-5">Learn More</p>
                    </div>
                </div>
            </div>

        </main>
    );
}