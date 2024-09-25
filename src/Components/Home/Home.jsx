import React from "react";
import Navbar from "./Navbar/Navbar";

const companyInfo = {
    companyName: "Company Name",
    companyDesc: "Company Description",
    supportNumber: "12-34567890",
};

export default function Home() {
    return (
        <>
            <Navbar {...companyInfo} />
        </>
    );
}
