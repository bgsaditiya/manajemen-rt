import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm } from "@inertiajs/react";
import axios from "axios";

export default function Rumah({ title }) {
    const { data, setData, post, errors, processing } = useForm({
        no_rumah: "",
        status_huni: "",
    });

    //Fungsi menghapus data rumah
    const { delete: destroy } = useForm();

    const handleDelete = (houseId) => {
        destroy(`/api/houses/hapus/${houseId}`);
        fetchHouses();
        setIsModalVisible(false);
    };
    //Akhir fungsi menghapus data rumah

    //Modal hapus
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
    //Akhir modal hapus

    const [rumah, setRumah] = useState([]);

    useEffect(() => {
        fetchHouses();
    }, []);

    const fetchHouses = async () => {
        try {
            const response = await axios.get("/api/houses");
            const dt = response.data;
            setRumah(dt.data);
        } catch (error) {
            console.error("Gagal memuat data mobil:", error);
        }
    };
    const [status, setStatus] = useState("");

    const handleTambah = async () => {
        try {
            // Kirim request ke backend untuk memperbarui status tersedia
            const res = await axios.post("/api/houses", data);
            setStatus(res.data.message);

            // Refresh data mobil setelah update berhasil
            fetchHouses();
        } catch (error) {
            console.error("Gagal menambah rumah:", error);
        }
    };

    return (
        <Sidebar>
            <div className="flex justify-between">
                <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                    {title}
                </h2>

                {status && (
                    <div
                        id="toast-success"
                        className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
                        role="alert"
                    >
                        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            <span className="sr-only">Check icon</span>
                        </div>
                        <div className="ms-3 text-sm font-normal">{status}</div>
                        <button
                            type="button"
                            className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                            data-dismiss-target="#toast-success"
                            aria-label="Close"
                        >
                            <span className="sr-only">Close</span>
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
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
                        </button>
                    </div>
                )}
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between p-5 dark:text-white dark:bg-gray-800 items-center">
                    <form className="max-w-md">
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
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
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                className="block w-full p-2.5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Cari.."
                                required
                            />
                        </div>
                    </form>

                    {/* <!-- Modal toggle --> */}
                    <button
                        data-modal-target="crud-modal"
                        data-modal-toggle="crud-modal"
                        className="ml-2 md:ml-0 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        type="button"
                    >
                        Tambah
                    </button>

                    {/* <!-- Main modal --> */}
                    <div
                        id="crud-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                    >
                        <div className="relative p-4 w-full max-w-md max-h-full">
                            {/* <!-- Modal content --> */}
                            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                {/* <!-- Modal header --> */}
                                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                        Tambah Data Rumah
                                    </h3>
                                    <button
                                        type="button"
                                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        data-modal-toggle="crud-modal"
                                    >
                                        <svg
                                            className="w-3 h-3"
                                            aria-hidden="true"
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
                                </div>
                                {/* <!-- Modal body --> */}
                                <form
                                    onSubmit={handleTambah}
                                    className="p-4 md:p-5"
                                >
                                    <div className="grid gap-4 mb-4 grid-cols-2">
                                        <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                No. Rumah
                                            </label>
                                            <input
                                                value={data.no_rumah}
                                                onChange={(e) =>
                                                    setData(
                                                        "no_rumah",
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                id="name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                required
                                            />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                Tipe Rumah
                                            </label>

                                            <div className="flex justify-between items-center mx-10">
                                                <div className="flex items-center border border-gray-200 rounded dark:border-gray-700">
                                                    <input
                                                        id="bordered-radio-1"
                                                        type="radio"
                                                        value="dihuni"
                                                        checked={
                                                            data.status_huni ===
                                                            "dihuni"
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "status_huni",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="bordered-radio-1"
                                                        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                    >
                                                        Dihuni
                                                    </label>
                                                </div>
                                                <div className="flex items-center border border-gray-200 rounded dark:border-gray-700">
                                                    <input
                                                        id="bordered-radio-2"
                                                        type="radio"
                                                        value="tidak dihuni"
                                                        checked={
                                                            data.status_huni ===
                                                            "tidak dihuni"
                                                        }
                                                        onChange={(e) =>
                                                            setData(
                                                                "status_huni",
                                                                e.target.value
                                                            )
                                                        }
                                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                    />
                                                    <label
                                                        htmlFor="bordered-radio-2"
                                                        className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                    >
                                                        Tidak Dihuni
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        <svg
                                            className="me-1 -ms-1 w-5 h-5"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Tambah Rumah
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No. Rumah
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status Huni
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Aksi
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {rumah && rumah.length > 0 ? (
                            rumah.map((house) => (
                                <tr
                                    key={house.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {house.no_rumah}
                                    </th>
                                    <td className="px-6 py-4">
                                        {house.status_huni}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a
                                            href="#"
                                            className="font-medium text-blue-600 dark:text-green-400 hover:underline mr-2"
                                        >
                                            Lihat
                                        </a>
                                        <button
                                            onClick={() => {
                                                setAksi("tambah");
                                                toggleModal();
                                            }}
                                            className="font-medium text-blue-600 dark:text-purple-500 hover:underline mr-2"
                                        >
                                            Tambah Penghuni
                                        </button>
                                        {isModalVisible &&
                                            aksi === "tambah" && (
                                                <div
                                                    className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
                                                    onClick={handleOutsideClick}
                                                >
                                                    <div
                                                        ref={modalRef}
                                                        className="relative w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700"
                                                    >
                                                        <div className="flex items-center justify-between border-b border-gray-600 rounded-t p-4 mb-4">
                                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                                Tambah Penghuni
                                                            </h3>
                                                            <button
                                                                onClick={
                                                                    toggleModal
                                                                }
                                                                class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                            >
                                                                <svg
                                                                    class="w-3 h-3"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    fill="none"
                                                                    viewBox="0 0 14 14"
                                                                >
                                                                    <path
                                                                        stroke="currentColor"
                                                                        stroke-linecap="round"
                                                                        stroke-linejoin="round"
                                                                        stroke-width="2"
                                                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                                    />
                                                                </svg>
                                                                <span class="sr-only">
                                                                    Close modal
                                                                </span>
                                                            </button>
                                                        </div>
                                                        <form
                                                            onSubmit={
                                                                handleTambah
                                                            }
                                                            className="p-4 md:p-5"
                                                        >
                                                            <div className="grid gap-4 mb-4 grid-cols-2">
                                                                <div className="col-span-2">
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                        No.
                                                                        Rumah
                                                                    </label>
                                                                    <input
                                                                        value={
                                                                            data.no_rumah
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setData(
                                                                                "no_rumah",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        type="text"
                                                                        id="name"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                        required
                                                                    />
                                                                </div>
                                                                <div className="col-span-2">
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                        Tipe
                                                                        Rumah
                                                                    </label>

                                                                    <div className="flex justify-between items-center mx-10">
                                                                        <div className="flex items-center border border-gray-200 rounded dark:border-gray-700">
                                                                            <input
                                                                                id="bordered-radio-1"
                                                                                type="radio"
                                                                                value="dihuni"
                                                                                checked={
                                                                                    data.status_huni ===
                                                                                    "dihuni"
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setData(
                                                                                        "status_huni",
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                            />
                                                                            <label
                                                                                htmlFor="bordered-radio-1"
                                                                                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                            >
                                                                                Dihuni
                                                                            </label>
                                                                        </div>
                                                                        <div className="flex items-center border border-gray-200 rounded dark:border-gray-700">
                                                                            <input
                                                                                id="bordered-radio-2"
                                                                                type="radio"
                                                                                value="tidak dihuni"
                                                                                checked={
                                                                                    data.status_huni ===
                                                                                    "tidak dihuni"
                                                                                }
                                                                                onChange={(
                                                                                    e
                                                                                ) =>
                                                                                    setData(
                                                                                        "status_huni",
                                                                                        e
                                                                                            .target
                                                                                            .value
                                                                                    )
                                                                                }
                                                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                                            />
                                                                            <label
                                                                                htmlFor="bordered-radio-2"
                                                                                className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                                                            >
                                                                                Tidak
                                                                                Dihuni
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="submit"
                                                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                            >
                                                                <svg
                                                                    className="me-1 -ms-1 w-5 h-5"
                                                                    fill="currentColor"
                                                                    viewBox="0 0 20 20"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                >
                                                                    <path
                                                                        fillRule="evenodd"
                                                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                                        clipRule="evenodd"
                                                                    ></path>
                                                                </svg>
                                                                Tambah Penghuni
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}
                                        <a
                                            href="#"
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
                                                        class="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                                    >
                                                        <svg
                                                            class="w-3 h-3"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 14 14"
                                                        >
                                                            <path
                                                                stroke="currentColor"
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                stroke-width="2"
                                                                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                            />
                                                        </svg>
                                                        <span class="sr-only">
                                                            Close modal
                                                        </span>
                                                    </button>
                                                    <svg
                                                        class="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            stroke="currentColor"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            stroke-width="2"
                                                            d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                                        />
                                                    </svg>
                                                    <p className="mt-2 text-gray-700 dark:text-gray-300 text-center mb-4 text-lg">
                                                        Apakah anda yakin untuk
                                                        menghapus rumah ini?
                                                    </p>

                                                    <div className="flex flex-wrap justify-center gap-4">
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    house.id
                                                                )
                                                            }
                                                            class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                                                        >
                                                            Hapus
                                                        </button>
                                                        <button
                                                            onClick={
                                                                toggleModal
                                                            }
                                                            class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
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
                                    colSpan={3}
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                >
                                    Belum ada rumah yang didata.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Sidebar>
    );
}
