import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Tambah({ title }) {
    const { data: pengeluaran, setData: setPengeluaran } = useForm({
        jumlah: "",
        deskripsi: "",
        tanggal_pengeluaran: "",
    });
    console.log(pengeluaran);

    function handleTambahPengeluaran(e) {
        e.preventDefault();
        // router.post("/pengeluaran/tambah", penghuni);

        router.post("/pengeluaran/tambah", pengeluaran, {
            onError: (errors) => {
                // Errors dari server dapat disimpan dan digunakan di form
                console.log(errors); // Menampilkan error di console untuk debugging
            },
        });
    }
    const currentYear = new Date().getFullYear();
    return (
        <Sidebar>
            <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                {title}
            </h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-5 dark:text-white dark:bg-gray-800 items-center">
                    <a
                        href="/pengeluaran"
                        type="button"
                        className="focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Kembali
                    </a>
                </div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <form
                    onSubmit={handleTambahPengeluaran}
                    className="p-5 dark:bg-gray-800"
                >
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Jumlah Pengeluaran
                        </label>
                        <input
                            type="number"
                            value={pengeluaran.jumlah}
                            onChange={(e) =>
                                setPengeluaran("jumlah", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Deskripsi
                        </label>
                        <textarea
                            type="text"
                            value={pengeluaran.deskripsi}
                            onChange={(e) =>
                                setPengeluaran("deskripsi", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Bulan Pengeluaran
                        </label>
                        <select
                            onChange={(e) =>
                                setPengeluaran(
                                    "tanggal_pengeluaran",
                                    e.target.value
                                )
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">Pilih bulan</option>
                            <option value={currentYear + "-01-01"}>
                                Januari
                            </option>
                            <option value={currentYear + "-02-01"}>
                                Februari
                            </option>
                            <option value={currentYear + "-03-01"}>
                                Maret
                            </option>
                            <option value={currentYear + "-04-01"}>
                                April
                            </option>
                            <option value={currentYear + "-05-01"}>Mei</option>
                            <option value={currentYear + "-06-01"}>Juni</option>
                            <option value={currentYear + "-07-01"}>Juli</option>
                            <option value={currentYear + "-08-01"}>
                                Agustus
                            </option>
                            <option value={currentYear + "-09-01"}>
                                September
                            </option>
                            <option value={currentYear + "-10-01"}>
                                Oktober
                            </option>
                            <option value={currentYear + "-11-01"}>
                                November
                            </option>
                            <option value={currentYear + "-12-01"}>
                                Desember
                            </option>
                        </select>
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
