import React from "react";
import Navbar from "./Navbar/Navbar";

const companyInfo = {
    companyName: "Company Name",
    companyDesc: "Company Description",
    supportNumber: "1234567890",
};

export default function Home() {
    return (
        <>
            <Navbar {...companyInfo} />
        </>
    );
}
