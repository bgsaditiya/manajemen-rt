import React from "react";
// import Navbar from "../Components/Navbar";
import Sidebar from "../../Components/Sidebar";
import { useState, useEffect, useRef } from "react";
import { usePage, useForm, router } from "@inertiajs/react";

export default function Edit({ title, houses, rumahDefault }) {
    const { data, setData, errors } = useForm({
        no_rumah: rumahDefault.no_rumah,
        status_huni: rumahDefault.status_huni,
    });
    // console.log(data);

    function handleEditRumah(e, rumahId) {
        e.preventDefault();
        router.put(`/rumah/edit/${rumahId}`, data, {
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
                        href="/rumah"
                        type="button"
                        className="focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                        Kembali
                    </a>
                </div>
                <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
                <form
                    onSubmit={(e) => handleEditRumah(e, rumahDefault.id)}
                    className="p-5 dark:bg-gray-800"
                >
                    <div className="grid gap-4 mb-4 grid-cols-2">
                        <div className="col-span-2">
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                No. Rumah
                            </label>
                            <input
                                value={data.no_rumah}
                                onChange={(e) =>
                                    setData("no_rumah", e.target.value)
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

                            <div className="flex justify-between items-center max-w-md">
                                <div className="flex items-center dark:border-gray-700">
                                    <input
                                        id="bordered-radio-1"
                                        type="radio"
                                        value="dihuni"
                                        checked={data.status_huni === "dihuni"}
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
                                <div className="flex items-center dark:border-gray-700">
                                    <input
                                        id="bordered-radio-2"
                                        type="radio"
                                        value="tidak dihuni"
                                        checked={
                                            data.status_huni === "tidak dihuni"
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
                        Edit Rumah
                    </button>
                </form>
            </div>
        </Sidebar>
    );
}
