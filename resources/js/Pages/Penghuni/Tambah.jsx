import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Tambah({ title, houses }) {
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
    console.log(penghuni);

    function handleTambahPenghuni(e) {
        e.preventDefault();
        router.post("/penghuni/tambah", penghuni);
    }

    return (
        <Sidebar>
            <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                {title}
            </h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-5 dark:text-white dark:bg-gray-800 items-center">
                    <a
                        href="/penghuni"
                        type="button"
                        className="focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Kembali
                    </a>
                </div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <form
                    onSubmit={handleTambahPenghuni}
                    className="p-5 dark:bg-gray-800"
                >
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            value={penghuni.nama_lengkap}
                            onChange={(e) =>
                                setPenghuni("nama_lengkap", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Upload Foto KTP
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            onChange={(e) =>
                                setPenghuni("foto_ktp", e.target.files[0])
                            }
                            type="file"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            No. Telepon
                        </label>
                        <input
                            type="text"
                            value={penghuni.no_telp}
                            onChange={(e) =>
                                setPenghuni("no_telp", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Status Penghuni
                            </label>
                            <select
                                onChange={(e) =>
                                    setPenghuni(
                                        "status_penghuni",
                                        e.target.value
                                    )
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>Pilih status penghuni</option>
                                <option value="tetap">Penghuni Tetap</option>
                                <option value="kontrak">
                                    Penghuni Kontrak
                                </option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Status Pernikahan
                            </label>
                            <select
                                onChange={(e) =>
                                    setPenghuni(
                                        "status_pernikahan",
                                        e.target.value
                                    )
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>Pilih status pernikahan</option>
                                <option value="sudah menikah">
                                    Sudah Menikah
                                </option>
                                <option value="belum menikah">
                                    Belum Menikah
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Rumah
                            </label>
                            <select
                                onChange={(e) =>
                                    setPenghuni("rumah_id", e.target.value)
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>....</option>
                                {houses.map((house) => (
                                    <option key={house.id} value={house.id}>
                                        {house.no_rumah}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Mulai Huni
                            </label>
                            <input
                                value={penghuni.mulai_huni}
                                onChange={(e) =>
                                    setPenghuni("mulai_huni", e.target.value)
                                }
                                type="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Selesai Huni
                            </label>
                            <input
                                value={penghuni.selesai_huni}
                                onChange={(e) =>
                                    setPenghuni("selesai_huni", e.target.value)
                                }
                                type="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        </Sidebar>
    );
}
