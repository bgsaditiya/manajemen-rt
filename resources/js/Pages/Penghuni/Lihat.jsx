import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Lihat({ title, data }) {
    console.log(data);
    return (
        <Sidebar>
            <h2 className="pb-4 text-4xl font-extrabold dark:text-white">
                {title + " " + data.nama_lengkap}
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

                <div className="p-5 dark:bg-gray-800">
                    <img
                        class="h-auto max-w-lg rounded-lg bg-gray-700 mx-auto"
                        src={"/images/" + data.foto_ktp}
                        alt={"Foto KTP " + data.nama_lengkap}
                    />
                </div>
                <div className="p-5 dark:bg-gray-800">
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            value={data.nama_lengkap}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            No. Telepon
                        </label>
                        <input
                            type="text"
                            value={data.no_telp}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            disabled
                            readOnly
                        />
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Status Penghuni
                            </label>
                            <select
                                value={data.status_penghuni || "default"}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled
                                readOnly
                            >
                                <option value="default">-</option>
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
                                value={data.status_pernikahan}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled
                                readOnly
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
                            <input
                                value={data.house.no_rumah}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                readOnly
                                disabled
                            />
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Mulai Huni
                            </label>
                            <input
                                value={data.mulai_huni}
                                type="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled
                                readOnly
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Selesai Huni
                            </label>
                            <input
                                value={data.selesai_huni || ""}
                                type="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled
                                readOnly
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Sidebar>
    );
}
