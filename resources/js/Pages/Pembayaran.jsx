import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Pembayaran({ title, pembayaran }) {
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
                <div className="flex justify-end p-5 dark:text-white dark:bg-gray-800 items-center">
                    <a
                        href="/pembayaran/tambah"
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
                                Nama Pembayar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                No. Rumah
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jenis Iuran
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Jumlah
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Periode
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Dibayar
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {pembayaran && pembayaran.length > 0 ? (
                            pembayaran.map((bayar) => (
                                <tr
                                    key={bayar.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {bayar.penghuni.nama_lengkap}
                                    </th>
                                    <td className="px-6 py-4">
                                        {bayar.house.no_rumah}
                                    </td>
                                    <td className="px-6 py-4">
                                        {bayar.jenis_iuran}
                                    </td>
                                    <td className="px-6 py-4">
                                        {bayar.jumlah}
                                    </td>
                                    <td className="px-6 py-4">
                                        {convertDateToMonthName(
                                            bayar.periode_start
                                        )}{" "}
                                        -{" "}
                                        {convertDateToMonthName(
                                            bayar.periode_end
                                        )}
                                    </td>
                                    <td className="px-6 py-4">
                                        {bayar.tanggal_pembayaran}
                                    </td>
                                    <td className="px-6 py-4">
                                        {bayar.status}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td
                                    scope="row"
                                    colSpan={7}
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                >
                                    Belum ada pembayaran yang diterima.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Sidebar>
    );
}
