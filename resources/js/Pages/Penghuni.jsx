import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Penghuni({ title, penghuni }) {
    // console.log(penghuni.length);

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [aksi, setAksi] = useState("");
    const modalRef = useRef(null);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
        console.log(aksi);
    };

    const handleOutsideClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            setIsModalVisible(false);
        }
    };

    const { delete: destroy } = useForm();

    const handleDelete = (penghuniId) => {
        destroy(`/penghuni/hapus/${penghuniId}`);
        // fetchHouses();
        setIsModalVisible(false);
    };

    return (
        <Sidebar>
            <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                {title}
            </h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-end p-5 dark:text-white dark:bg-gray-800 items-center">
                    <a
                        href="/penghuni/tambah"
                        type="button"
                        className="ml-2 md:ml-0 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Tambah
                    </a>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Nama Lengkap
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status Penghuni
                            </th>
                            <th scope="col" className="px-6 py-3">
                                No. Telepon
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status Pernikahan
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {penghuni && penghuni.length > 0 ? (
                            penghuni.map((orang) => (
                                <tr
                                    key={orang.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {orang.nama_lengkap}
                                    </th>
                                    <td className="px-6 py-4">
                                        {orang.status_penghuni}
                                    </td>
                                    <td className="px-6 py-4">
                                        {orang.no_telp}
                                    </td>
                                    <td className="px-6 py-4">
                                        {orang.status_pernikahan}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            href={"/penghuni/lihat/" + orang.id}
                                            className="font-medium text-blue-600 dark:text-green-400 hover:underline mr-2"
                                        >
                                            Lihat
                                        </a>
                                        <a
                                            href={"/penghuni/edit/" + orang.id}
                                            className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                                        >
                                            Edit
                                        </a>
                                        <button
                                            onClick={() => {
                                                setAksi("hapus");
                                                toggleModal();
                                            }}
                                            className="font-medium text-blue-600 dark:text-red-500 hover:underline"
                                            type="button"
                                        >
                                            Hapus
                                        </button>
                                        {isModalVisible && aksi === "hapus" && (
                                            <div
                                                className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
                                                onClick={handleOutsideClick}
                                            >
                                                <div
                                                    ref={modalRef}
                                                    className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700"
                                                >
                                                    <button
                                                        onClick={toggleModal}
                                                        className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        <svg
                                                            className="w-3 h-3"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth="2"
                                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                            />
                                                        </svg>
                                                        <span className="sr-only">
                                                            Close modal
                                                        </span>
                                                    </button>
                                                    <svg
                                                        className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth="2"
                                                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        />
                                                    </svg>
                                                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-center mb-4 text-lg">
                                                        Apakah anda yakin untuk
                                                        menghapus penghuni ini?
                                                    </p>

                                                    <div className="flex flex-wrap justify-center gap-4">
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    orang.id
                                                                )
                                                            }
                                                            className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                                        >
                                                            Hapus
                                                        </button>
                                                        <button
                                                            onClick={
                                                                toggleModal
                                                            }
                                                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                                        >
                                                            Batal
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td
                                    scope="row"
                                    colSpan={5}
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                >
                                    Belum ada penghuni yang didata.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Sidebar>
    );
}
