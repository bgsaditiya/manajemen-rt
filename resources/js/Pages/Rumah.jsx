import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";
import axios from "axios";

export default function Rumah({ title }) {
    const { data, setData } = useForm({
        no_rumah: "",
        status_huni: "",
    });

    const [currentHouse, setCurrentHouse] = useState("");

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
        // console.log(aksi);
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
            console.error("Gagal memuat data rumah:", error);
        }
    };

    // const [status, setStatus] = useState("");

    const handleTambah = async () => {
        try {
            await axios.post("/api/houses", data);
            // setStatus(res.data.message);

            fetchHouses();
        } catch (error) {
            console.error("Gagal menambah rumah:", error);
        }
    };

    // function handleTambahPenghuni(e) {
    //     e.preventDefault();
    //     router.post("/houses/penghuni", penghuni);
    // }

    const { data: penghuni, setData: setPenghuni } = useForm({
        nama_lengkap: "",
        foto_ktp: null,
        status_penghuni: "",
        no_telp: "",
        status_pernikahan: "",
        rumah_id: "",
        mulai_huni: "",
        selesai_huni: null,
    });

    // console.log(penghuni);

    const handleTambahPenghuni = async () => {
        try {
            // console.log(penghuni.rumah_id);
            await axios.post("/api/houses/penghuni", penghuni);
        } catch (error) {
            console.error("Gagal menambah penghuni rumah:", error);
        }
    };

    return (
        <Sidebar>
            <div className="flex justify-between">
                <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                    {title}
                </h2>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-end p-5 dark:text-white dark:bg-gray-800 items-center">
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
                                            href={"/rumah/lihat/" + house.id}
                                            className="font-medium text-blue-600 dark:text-green-400 hover:underline mr-2"
                                        >
                                            Lihat
                                        </a>
                                        <button
                                            onClick={() => {
                                                setAksi("tambah");
                                                toggleModal();
                                                setPenghuni(
                                                    "rumah_id",
                                                    house.id
                                                );
                                                setCurrentHouse(house.no_rumah);
                                            }}
                                            className="font-medium text-blue-600 dark:text-purple-500 hover:underline mr-2"
                                        >
                                            Tambah Penghuni
                                        </button>
                                        {isModalVisible &&
                                            aksi === "tambah" && (
                                                <div
                                                    className="fixed top-0 left-0 w-full h-full bg-gray-900/50 flex items-center justify-center z-50"
                                                    onClick={handleOutsideClick}
                                                >
                                                    <div
                                                        ref={modalRef}
                                                        className="relative w-full max-w-md max-h-full bg-white rounded-lg shadow dark:bg-gray-700"
                                                    >
                                                        <div className="flex items-center justify-between border-b border-gray-600 rounded-t p-4">
                                                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                                Tambah Penghuni
                                                                Rumah{" "}
                                                                <span className="px-2 py-1 rounded-md bg-gray-800">
                                                                    {
                                                                        currentHouse
                                                                    }
                                                                </span>
                                                            </h3>
                                                            <button
                                                                onClick={
                                                                    toggleModal
                                                                }
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
                                                        </div>
                                                        <form
                                                            onSubmit={
                                                                handleTambahPenghuni
                                                            }
                                                            className="p-4 md:p-5"
                                                        >
                                                            <div className="mb-6">
                                                                <label
                                                                    htmlFor="first_name"
                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                >
                                                                    Nama Lengkap
                                                                </label>
                                                                <input
                                                                    value={
                                                                        penghuni.nama_lengkap
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPenghuni(
                                                                            "nama_lengkap",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    type="text"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="mb-6">
                                                                <label
                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                    htmlFor="file_input"
                                                                >
                                                                    Upload Foto
                                                                    KTP
                                                                </label>
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPenghuni(
                                                                            "foto_ktp",
                                                                            e
                                                                                .target
                                                                                .files[0]
                                                                        )
                                                                    }
                                                                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                                    type="file"
                                                                />
                                                            </div>
                                                            <div className="mb-6">
                                                                <label
                                                                    htmlFor="first_name"
                                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                                >
                                                                    No. Telepon
                                                                </label>
                                                                <input
                                                                    value={
                                                                        penghuni.no_telp
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        setPenghuni(
                                                                            "no_telp",
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    type="text"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-primary-500"
                                                                    required
                                                                />
                                                            </div>
                                                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                        Status
                                                                        Penghuni
                                                                    </label>
                                                                    <select
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setPenghuni(
                                                                                "status_penghuni",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    >
                                                                        <option>
                                                                            Pilih
                                                                            status
                                                                            penghuni
                                                                        </option>
                                                                        <option value="tetap">
                                                                            Penghuni
                                                                            Tetap
                                                                        </option>
                                                                        <option value="kontrak">
                                                                            Penghuni
                                                                            Kontrak
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                        Status
                                                                        Pernikahan
                                                                    </label>
                                                                    <select
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setPenghuni(
                                                                                "status_pernikahan",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    >
                                                                        <option>
                                                                            Pilih
                                                                            status
                                                                            pernikahan
                                                                        </option>
                                                                        <option value="sudah menikah">
                                                                            Sudah
                                                                            Menikah
                                                                        </option>
                                                                        <option value="belum menikah">
                                                                            Belum
                                                                            Menikah
                                                                        </option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                        Mulai
                                                                        Penghuni
                                                                    </label>
                                                                    <input
                                                                        value={
                                                                            penghuni.mulai_huni
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setPenghuni(
                                                                                "mulai_huni",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        type="date"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                                                        Selesai
                                                                        Huni
                                                                    </label>
                                                                    <input
                                                                        value={
                                                                            penghuni.selesai_huni
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) =>
                                                                            setPenghuni(
                                                                                "selesai_huni",
                                                                                e
                                                                                    .target
                                                                                    .value
                                                                            )
                                                                        }
                                                                        type="date"
                                                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    />
                                                                </div>
                                                            </div>
                                                            <button
                                                                type="submit"
                                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                                            >
                                                                Tambah
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>
                                            )}
                                        <a
                                            href={"/rumah/edit/" + house.id}
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
                                                className="fixed top-0 left-0 w-full h-full bg-gray-900/50 flex items-center justify-center z-50"
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
                                                        menghapus rumah ini?
                                                    </p>

                                                    <div className="flex flex-wrap justify-center gap-4">
                                                        <button
                                                            onClick={() =>
                                                                handleDelete(
                                                                    house.id
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
