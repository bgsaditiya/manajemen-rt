import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Pengeluaran({ title, pengeluaran }) {
    // console.log(pembayaran);

    const convertDateToMonthName = (dateString) => {
        const months = [
            "Januari",
            "Februari",
            "Maret",
            "April",
            "Mei",
            "Juni",
            "Juli",
            "Agustus",
            "September",
            "Oktober",
            "November",
            "Desember",
        ];

        // Mengonversi string tanggal menjadi objek Date
        const date = new Date(dateString);

        // Mengambil bulan dari objek Date (0-11)
        const monthIndex = date.getMonth();

        // Mengembalikan nama bulan berdasarkan index
        return months[monthIndex];
    };

    return (
        <Sidebar>
            <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                {title}
            </h2>
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
                    <a
                        href="/pengeluaran/tambah"
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
                                Deskripsi
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jumlah
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Pengeluaran
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pengeluaran && pengeluaran.length > 0 ? (
                            pengeluaran.map((biaya) => (
                                <tr
                                    key={biaya.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {biaya.deskripsi}
                                    </th>
                                    <td className="px-6 py-4">
                                        {biaya.jumlah}
                                    </td>
                                    <td className="px-6 py-4">
                                        {biaya.tanggal_pengeluaran}
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
                                    Belum ada data pengluaran.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Sidebar>
    );
}
