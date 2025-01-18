import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Edit({ title, houses, penghuniDefault }) {
    const { data, setData, errors } = useForm({
        nama_lengkap: penghuniDefault.nama_lengkap,
        foto_ktp: null,
        status_penghuni: penghuniDefault.status_penghuni,
        no_telp: penghuniDefault.no_telp,
        status_pernikahan: penghuniDefault.status_pernikahan,
        rumah_id: penghuniDefault.rumah_id,
        mulai_huni: penghuniDefault.mulai_huni,
        selesai_huni: penghuniDefault.selesai_huni,
    });
    // console.log(data);

    function handleEditPenghuni(e, penghuniId) {
        e.preventDefault();
        router.put(`/penghuni/edit/${penghuniId}`, data, {
            onError: (errors) => {
                // Errors dari server dapat disimpan dan digunakan di form
                console.log(errors); // Menampilkan error di console untuk debugging
            },
        });
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
                    onSubmit={(e) => handleEditPenghuni(e, penghuniDefault.id)}
                    className="p-5 dark:bg-gray-800"
                >
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Nama Lengkap
                        </label>
                        <input
                            type="text"
                            value={data.nama_lengkap}
                            onChange={(e) =>
                                setData("nama_lengkap", e.target.value)
                            }
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                        {errors.nama_lengkap && (
                            <p className="text-red-500 my-2">
                                {errors.nama_lengkap}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Upload Foto KTP
                        </label>
                        <input
                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                            onChange={(e) =>
                                setData("foto_ktp", e.target.files[0])
                            }
                            type="file"
                        />
                        {errors.foto_ktp && (
                            <p className="text-red-500 my-2">
                                {errors.foto_ktp}
                            </p>
                        )}
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            No. Telepon
                        </label>
                        <input
                            type="text"
                            value={data.no_telp}
                            onChange={(e) => setData("no_telp", e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                        />
                        {errors.no_telp && (
                            <p className="text-red-500 my-2">
                                {errors.no_telp}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Status Penghuni
                            </label>
                            <select
                                onChange={(e) =>
                                    setData("status_penghuni", e.target.value)
                                }
                                value={data.status_penghuni}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>Pilih status penghuni</option>
                                <option value="tetap">Penghuni Tetap</option>
                                <option value="kontrak">
                                    Penghuni Kontrak
                                </option>
                            </select>
                            {errors.status_penghuni && (
                                <p className="text-red-500 my-2">
                                    {errors.status_penghuni}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Status Pernikahan
                            </label>
                            <select
                                onChange={(e) =>
                                    setData("status_pernikahan", e.target.value)
                                }
                                value={data.status_pernikahan}
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
                            {errors.status_pernikahan && (
                                <p className="text-red-500 my-2">
                                    {errors.status_pernikahan}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Rumah
                            </label>
                            <select
                                onChange={(e) =>
                                    setData("rumah_id", e.target.value)
                                }
                                value={data.rumah_id}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            >
                                <option>....</option>
                                {houses.map((house) => (
                                    <option key={house.id} value={house.id}>
                                        {house.no_rumah}
                                    </option>
                                ))}
                            </select>
                            {errors.rumah_id && (
                                <p className="text-red-500 my-2">
                                    {errors.rumah_id}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Mulai Huni
                            </label>
                            <input
                                // value={penghuniLama.mulai_huni}
                                onChange={(e) =>
                                    setData("mulai_huni", e.target.value)
                                }
                                value={data.mulai_huni}
                                type="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.mulai_huni && (
                                <p className="text-red-500 my-2">
                                    {errors.mulai_huni}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Selesai Huni
                            </label>
                            <input
                                // value={penghuniLama.selesai_huni}
                                onChange={(e) =>
                                    setData("selesai_huni", e.target.value)
                                }
                                value={data.selesai_huni || ""}
                                type="date"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            />
                            {errors.selesai_huni && (
                                <p className="text-red-500 my-2">
                                    {errors.selesai_huni}
                                </p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Edit
                    </button>
                </form>
            </div>
        </Sidebar>
    );
}
