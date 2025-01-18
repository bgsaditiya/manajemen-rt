import React from "react";

export default function Sidebar({ children }) {
    // console.log(title);
    return (
        <>
            <button
                data-drawer-target="sidebar-multi-level-sidebar"
                data-drawer-toggle="sidebar-multi-level-sidebar"
                aria-controls="sidebar-multi-level-sidebar"
                type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                id="sidebar-multi-level-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center ps-2.5 mb-5 mt-3 space-x-2"
                    >
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM6.65476 13.3342C7.02248 13.1435 7.47515 13.287 7.66582 13.6548C7.93492 14.1738 8.49474 14.8336 9.27171 15.3619C10.0419 15.8856 10.9809 16.25 12 16.25C13.0191 16.25 13.9581 15.8856 14.7283 15.3619C15.5053 14.8336 16.0651 14.1738 16.3342 13.6548C16.5249 13.287 16.9775 13.1435 17.3452 13.3342C17.713 13.5249 17.8565 13.9775 17.6658 14.3452C17.2683 15.112 16.5281 15.9521 15.5717 16.6024C14.6085 17.2573 13.3809 17.75 12 17.75C10.6191 17.75 9.39148 17.2573 8.42829 16.6024C7.47192 15.9521 6.73174 15.112 6.33418 14.3452C6.14351 13.9775 6.28704 13.5249 6.65476 13.3342ZM9 9C9.55228 9 10 8.55228 10 8C10 7.44772 9.55228 7 9 7C8.44772 7 8 7.44772 8 8C8 8.55228 8.44772 9 9 9ZM15 9C15.5523 9 16 8.55228 16 8C16 7.44772 15.5523 7 15 7C14.4477 7 14 7.44772 14 8C14 8.55228 14.4477 9 15 9Z"
                                fill="#facc15"
                            />
                        </svg>

                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Manajemen RT
                        </span>
                    </a>
                    <ul className="space-y-4 font-medium">
                        <li>
                            <a
                                href="/"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 18"
                                >
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <span className="ms-3">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/penghuni"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 18"
                                >
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                {/* <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6 7.75C6 5.67893 7.67893 4 9.75 4C11.8211 4 13.5 5.67893 13.5 7.75C13.5 9.82107 11.8211 11.5 9.75 11.5C7.67893 11.5 6 9.82107 6 7.75Z" />
                                    <path d="M13.0994 4.38188C13.9645 5.24219 14.5 6.43355 14.5 7.75C14.5 9.06645 13.9645 10.2578 13.0994 11.1181C13.5974 11.3627 14.1577 11.5 14.75 11.5C16.8211 11.5 18.5 9.82107 18.5 7.75C18.5 5.67893 16.8211 4 14.75 4C14.1577 4 13.5974 4.13733 13.0994 4.38188Z" />
                                    <path d="M3 16.75C3 14.6789 4.67893 13 6.75 13H12.75C14.8211 13 16.5 14.6789 16.5 16.75C16.5 18.8211 14.8211 20.5 12.75 20.5H6.75C4.67893 20.5 3 18.8211 3 16.75Z" />
                                    <path d="M17.5 16.75C17.5 17.7749 17.1754 18.7239 16.6234 19.5H17.75C19.8211 19.5 21.5 17.8211 21.5 15.75C21.5 13.6789 19.8211 12 17.75 12H12.75C15.3734 12 17.5 14.1266 17.5 16.75Z" />
                                </svg> */}

                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Penghuni
                                </span>
                                {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                                    Pro
                                </span> */}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/rumah"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                {/* <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg> */}
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M6.29367 4.96556C8.96048 3.028 10.2939 2.05923 11.8167 2.00336C11.9389 1.99888 12.0611 1.99888 12.1833 2.00336C13.7061 2.05923 15.0395 3.028 17.7063 4.96556C20.3732 6.90311 21.7066 7.87189 22.2303 9.30291C22.2723 9.41771 22.3101 9.534 22.3436 9.65157C22.761 11.1171 22.2517 12.6846 21.2331 15.8197L19.512 21.1164C19.2386 21.958 18.4543 22.5279 17.5694 22.5279C16.4412 22.5279 15.5267 21.6133 15.5267 20.4852V17.7363C15.5267 16.6778 14.6686 15.8197 13.6101 15.8197H10.3899C9.3314 15.8197 8.47329 16.6778 8.47329 17.7363V20.4852C8.47329 21.6133 7.55877 22.5279 6.43065 22.5279C5.54572 22.5279 4.76144 21.958 4.48798 21.1164L2.76696 15.8197C1.74832 12.6846 1.23901 11.1171 1.65645 9.65157C1.68994 9.534 1.72773 9.41771 1.76974 9.30291C2.29344 7.87189 3.62685 6.90311 6.29367 4.96556Z" />
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Rumah
                                </span>
                                {/* <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span> */}
                            </a>
                        </li>
                        <li>
                            <a
                                href="/pembayaran"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M11.0473 6.99343C11.1139 6.95499 11.1816 6.92044 11.2501 6.88969L11.2501 10.92C9.62302 10.2015 9.4706 7.90376 11.0473 6.99343Z" />
                                    <path d="M12.7501 17.1103L12.7501 13.08C14.3772 13.7984 14.5296 16.0962 12.9529 17.0066C12.8863 17.045 12.8186 17.0796 12.7501 17.1103Z" />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M11.9548 2.25H12.0452C13.8818 2.24999 15.3214 2.24999 16.4635 2.37373C17.6291 2.50001 18.5734 2.76232 19.3798 3.34815C19.8679 3.70281 20.2972 4.13209 20.6518 4.62024C21.2377 5.42656 21.5 6.37094 21.6263 7.53648C21.75 8.67859 21.75 10.1182 21.75 11.9547V12.0453C21.75 13.8818 21.75 15.3214 21.6263 16.4635C21.5 17.6291 21.2377 18.5734 20.6518 19.3798C20.2972 19.8679 19.8679 20.2972 19.3798 20.6518C18.5734 21.2377 17.6291 21.5 16.4635 21.6263C15.3214 21.75 13.8818 21.75 12.0453 21.75H11.9547C10.1182 21.75 8.67859 21.75 7.53648 21.6263C6.37094 21.5 5.42656 21.2377 4.62024 20.6518C4.13209 20.2972 3.70281 19.8679 3.34815 19.3798C2.76232 18.5734 2.50001 17.6291 2.37373 16.4635C2.24999 15.3214 2.24999 13.8818 2.25 12.0452V11.9548C2.24999 10.1182 2.24999 8.67861 2.37373 7.53648C2.50001 6.37094 2.76232 5.42656 3.34815 4.62024C3.70281 4.13209 4.13209 3.70281 4.62024 3.34815C5.42656 2.76232 6.37094 2.50001 7.53648 2.37373C8.67861 2.24999 10.1182 2.24999 11.9548 2.25ZM12.7501 5C12.7501 4.58579 12.4143 4.25 12.0001 4.25C11.5858 4.25 11.2501 4.58579 11.2501 5V5.30807C10.9233 5.39005 10.6026 5.51813 10.2973 5.69439C7.57547 7.26586 7.92142 11.2989 10.8712 12.3839L11.2501 12.5233L11.2501 17.2195C10.7152 17.0686 10.2373 16.717 9.93805 16.1988L9.56248 15.5483C9.35538 15.1895 8.89668 15.0666 8.53796 15.2737C8.17924 15.4808 8.05634 15.9395 8.26344 16.2983L8.63901 16.9488C9.21748 17.9507 10.1927 18.5796 11.2501 18.7535L11.2501 19C11.2501 19.4142 11.5858 19.75 12 19.75C12.4143 19.75 12.7501 19.4142 12.7501 19L12.7501 18.692C13.0769 18.61 13.3975 18.4819 13.7029 18.3056C16.4247 16.7341 16.0788 12.7011 13.1291 11.6161L12.7501 11.4767L12.7501 6.78053C13.285 6.93138 13.7629 7.28298 14.0622 7.80125L14.4377 8.45175C14.6448 8.81047 15.1035 8.93337 15.4622 8.72626C15.821 8.51916 15.9439 8.06047 15.7368 7.70175L15.3612 7.05125C14.7827 6.04928 13.8074 5.42033 12.7501 5.2465V5Z"
                                    />
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Pembayaran
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 20"
                                >
                                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Pengeluaran
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.06107 2.95491C5.16622 2.87852 5.27495 2.80825 5.38793 2.74359C5.42423 2.82442 5.47557 2.90015 5.54195 2.96653C6.8325 4.25703 7.84549 5.26842 8.73846 5.98311C9.64248 6.70666 10.4891 7.18158 11.4645 7.33608C12.0605 7.43047 12.6676 7.43047 13.2635 7.33608C14.2117 7.1859 15.038 6.73301 15.9137 6.04333C16.7783 5.36245 17.7489 4.40277 18.9707 3.18187C19.0099 3.1427 19.0438 3.10027 19.0725 3.05545C19.442 3.34326 19.7695 3.68172 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491ZM8 9.25C7.58579 9.25 7.25 9.58579 7.25 10C7.25 10.4142 7.58579 10.75 8 10.75H16C16.4142 10.75 16.75 10.4142 16.75 10C16.75 9.58579 16.4142 9.25 16 9.25H8ZM8 13.25C7.58579 13.25 7.25 13.5858 7.25 14C7.25 14.4142 7.58579 14.75 8 14.75H16C16.4142 14.75 16.75 14.4142 16.75 14C16.75 13.5858 16.4142 13.25 16 13.25H8ZM8 17.25C7.58579 17.25 7.25 17.5858 7.25 18C7.25 18.4142 7.58579 18.75 8 18.75H16C16.4142 18.75 16.75 18.4142 16.75 18C16.75 17.5858 16.4142 17.25 16 17.25H8Z"
                                    />
                                    <path d="M12 2C14.6999 2 16.4278 2 17.6744 2.35647C16.554 3.47389 15.716 4.28975 14.9857 4.8649C14.2161 5.47095 13.6262 5.75993 13.0289 5.85454C12.5884 5.92431 12.1397 5.92431 11.6992 5.85454C11.0846 5.75721 10.4782 5.45425 9.67576 4.81202C8.92863 4.21404 8.06901 3.37043 6.9166 2.21968C8.10873 2 9.70241 2 12 2Z" />
                                </svg>

                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Laporan
                                </span>
                            </a>
                        </li>
                        {/* <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 18 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                                    />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Sign In
                                </span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                    <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                </svg>
                                <span className="flex-1 ms-3 whitespace-nowrap">
                                    Sign Up
                                </span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </aside>

            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    {children}
                </div>
            </div>
        </>
    );
}
