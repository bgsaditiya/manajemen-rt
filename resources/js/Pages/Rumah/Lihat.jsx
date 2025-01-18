import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";
import axios from "axios";

export default function Lihat({
    title,
    penghuniSekarang,
    penghuniSebelum,
    pembayaran,
}) {
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
            <div className="flex justify-between">
                <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                    {title}
                </h2>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-6">
                <div className="flex justify-between p-5 dark:text-white dark:bg-gray-800 items-center">
                    <a
                        href="/rumah"
                        type="button"
                        className="focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Kembali
                    </a>
                    <h1 className="font-semibold rounded-lg bg-gray-900 px-5 py-2.5">
                        Daftar Penghuni Sekarang
                    </h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {penghuniSekarang && penghuniSekarang.length > 0 ? (
                            penghuniSekarang.map((penghuniNow) => (
                                <tr
                                    key={penghuniNow.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {penghuniNow.nama_lengkap}
                                    </th>
                                    <td className="px-6 py-4">
                                        {penghuniNow.status_penghuni}
                                    </td>
                                    <td className="px-6 py-4">
                                        {penghuniNow.no_telp}
                                    </td>
                                    <td className="px-6 py-4">
                                        {penghuniNow.status_pernikahan}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td
                                    scope="row"
                                    colSpan={4}
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                >
                                    Belum ada penghuni dirumah ini.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex justify-between p-5 dark:text-white dark:bg-gray-800 items-center">
                    <h1 className="font-semibold rounded-lg bg-gray-900 px-5 py-2.5">
                        Riwayat Penghuni Sebelumnya
                    </h1>
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
                        </tr>
                    </thead>
                    <tbody>
                        {penghuniSebelum && penghuniSebelum.length > 0 ? (
                            penghuniSebelum.map((penghuniPast) => (
                                <tr
                                    key={penghuniPast.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                >
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {penghuniPast.nama_lengkap}
                                    </th>
                                    <td className="px-6 py-4">
                                        {penghuniPast.status_penghuni}
                                    </td>
                                    <td className="px-6 py-4">
                                        {penghuniPast.no_telp}
                                    </td>
                                    <td className="px-6 py-4">
                                        {penghuniPast.status_pernikahan}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td
                                    scope="row"
                                    colSpan={4}
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                                >
                                    Belum ada riwayat penghuni dirumah ini.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-6">
                <div className="flex justify-between p-5 dark:text-white dark:bg-gray-800 items-center">
                    <h1 className="font-semibold rounded-lg bg-gray-900 px-5 py-2.5">
                        Daftar Riwayat Pembayaran
                    </h1>
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
                                    Belum ada history pembayaran.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </Sidebar>
    );
}
