import bg from '@/public/favicon.ico'
import Image from 'next/image'

export default function Header() {
    return (
        <>
            <div className="d-flex flex-row p-2 bg--dark text-light align-items-center fw-bolder border-bottom border-secondary w-100" style={{ position: "fixed", top: "0", zIndex: "9" }}>
                <p className="cursor-pointer m-1"><Image src={bg} height={60} style={{ filter: "drop-shadow(0 0 2px white)" }} /></p>
                <p className="cursor-pointer m-3 py-2 px-3 header-buttons ms-auto">
                    Connect
                    <i className="bi bi-box-arrow-in-right px-2"></i>
                </p>
                <p className="cursor-pointer m-3 py-2 px-3 header-buttons ">
                    Join
                    <i className="bi bi-person-plus px-2"></i>
                </p>
            </div>
            <div style={{ height: "100px" }} ></div>
        </>
    )
}