import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Tambah({ title, penghuni }) {
    const { data: pembayaran, setData: setPembayaran } = useForm({
        penghuni_id: "",
        jumlah: "",
        jenis_iuran: "",
        periode_start: "",
        periode_end: "",
        status: "lunas",
    });
    console.log(pembayaran);

    function handleTambahPembayaran(e) {
        e.preventDefault();
        // router.post("/pembayaran/tambah", penghuni);

        router.post("/pembayaran/tambah", pembayaran, {
            onError: (errors) => {
                // Errors dari server dapat disimpan dan digunakan di form
                console.log(errors); // Menampilkan error di console untuk debugging
            },
        });
    }
    // Dapatkan tahun sekarang
    const currentYear = new Date().getFullYear();

    // Fungsi untuk mengubah angka bulan menjadi format YYYY-MM-DD
    const convertMonthToDate = (monthNumber) => {
        const date = new Date(currentYear, monthNumber, 1);
        // console.log(date);
        return date.toISOString().split("T")[0]; // Format YYYY-MM-DD
    };

    const handleMonthChange = (e) => {
        const month = e.target.value;
        if (month) {
            // Mengonversi bulan yang dipilih menjadi tanggal
            const formattedDate = convertMonthToDate(Number(month));
            setPembayaran("periode_end", formattedDate); // Menyimpan tanggal terformat ke periode_end
        } else {
            setPembayaran("periode_end", ""); // Jika tidak ada bulan yang dipilih
        }

        // if (pembayaran.periode_start > pembayaran.periode_end) {
        //     setPembayaran("periode_end", ""); // Reset end date if start date is after it
        // }
    };
    return (
        <Sidebar>
            <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                {title}
            </h2>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="p-5 dark:text-white dark:bg-gray-800 items-center">
                    <a
                        href="/pembayaran"
                        type="button"
                        className="focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Kembali
                    </a>
                </div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <form
                    onSubmit={handleTambahPembayaran}
                    className="p-5 dark:bg-gray-800"
                >
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nama Pembayar
                        </label>
                        <select
                            onChange={(e) =>
                                setPembayaran("penghuni_id", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">....</option>
                            {penghuni.map((orang) => (
                                <option key={orang.id} value={orang.id}>
                                    {orang.nama_lengkap}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Jumlah Pembayaran
                        </label>
                        <input
                            type="number"
                            value={pembayaran.jumlah}
                            onChange={(e) =>
                                setPembayaran("jumlah", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                    </div>
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Jenis Iuran
                            </label>
                            <select
                                onChange={(e) =>
                                    setPembayaran("jenis_iuran", e.target.value)
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option value="">Pilih jenis iuran</option>
                                <option value="kebersihan">Kebersihan</option>
                                <option value="satpam">Satpam</option>
                            </select>
                        </div>
                        <div>
                            <h1 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Periode Pembayaran
                            </h1>
                            <div className="grid gap-2 mb-6 md:grid-cols-2">
                                <div>
                                    <select
                                        onChange={(e) =>
                                            setPembayaran(
                                                "periode_start",
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
                                        <option value={currentYear + "-05-01"}>
                                            Mei
                                        </option>
                                        <option value={currentYear + "-06-01"}>
                                            Juni
                                        </option>
                                        <option value={currentYear + "-07-01"}>
                                            Juli
                                        </option>
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
                                <div>
                                    <select
                                        onChange={handleMonthChange}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Pilih bulan</option>
                                        <option value="1">Januari</option>
                                        <option value="2">Februari</option>
                                        <option value="3">Maret</option>
                                        <option value="4">April</option>
                                        <option value="5">Mei</option>
                                        <option value="6">Juni</option>
                                        <option value="7">Juli</option>
                                        <option value="8">Agustus</option>
                                        <option value="9">September</option>
                                        <option value="10">Oktober</option>
                                        <option value="11">November</option>
                                        <option value="12">Desember</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Status Pembayaran
                        </label>
                        <select
                            onChange={(e) =>
                                setPembayaran("status", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="lunas">Lunas</option>
                            <option value="belum lunas">Belum Lunas</option>
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
