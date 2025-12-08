import React from "react";
import avatarImg from "./assets/Talibrimbor.jpg";

function Avatar() {
    return (
        <div className="flex justify-center mb-6">
            <img
                src={avatarImg}
                alt="Avatar"
                className="rounded-full w-40 h-40 shadow-2xl border-4 border-white object-cover"
            />
        </div>
    );
}

function FullName() {
    return (
        <h1 className="text-3xl font-extrabold text-center mb-2 text-gray-800">
            Владислав Герц
        </h1>
    );
}

function Phone() {
    return (
        <p className="text-center text-lg text-gray-700 mb-1">
             +38 (099) 123-45-67
        </p>
    );
}

function Email() {
    return (
        <p className="text-center text-lg text-gray-700">
             gercvlad@gmail.com
        </p>
    );
}

function About() {
    return (
        <p className="text-center text-base mt-4 px-4 text-gray-600 leading-relaxed">
            Невідома людина, яка намагається щось зробити :/
        </p>
    );
}

function Card({ children }) {
    return (
        <div
            className="
        max-w-sm mx-auto
        rounded-3xl shadow-2xl
        p-8 border border-gray-300
        bg-gradient-to-br from-white to-gray-100
        transition-transform duration-300 hover:scale-105
      "
        >
            {children}
        </div>
    );
}

function Footer() {
    return (
        <p className="text-center text-sm text-gray-500 mt-6">
            © 2025 My Vcard
        </p>
    );
}

// Main App
export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 p-4">

        <Card>
                <Avatar />
                <FullName />
                <Phone />
                <Email />
                <About />
            </Card>
            <Footer />
        </div>
    );
}
