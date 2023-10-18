<template>
    <!-- item 1 -->
    <body class="overflow-y-hidden">
        <div class="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
            <div class="flex flex-col justify-start items-start w-full space-y-8">
                <div class="flex justify-start items-start">
                    <p class="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                </div>
                <div class="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                    <div class="flex flex-col md:flex-row justify-between w-full">
                        <div class="flex flex-row justify-between items-start">
                            <p class="text-xl md:text-2xl font-medium leading-normal text-gray-800">Beautiful addition to the theme</p>
                            <button onclick="showMenu(true)" class="ml-4 md:hidden">
                                <svg id="closeIcon" class="hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 12.5L10 7.5L5 12.5" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <svg id="openIcon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 7.5L10 12.5L15 7.5" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                        <div class="cursor-pointer mt-2 md:mt-0">
                            <svg width="152" height="24" viewBox="0 0 152 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0)">
                                    <path
                                        d="M17.5598 24.4285C17.3999 24.4291 17.2422 24.3914 17.0998 24.3185L11.9998 21.6485L6.89982 24.3185C6.73422 24.4056 6.5475 24.4444 6.3609 24.4307C6.1743 24.4169 5.9953 24.3511 5.84425 24.2407C5.6932 24.1303 5.57616 23.9797 5.50644 23.8061C5.43671 23.6324 5.4171 23.4427 5.44982 23.2585L6.44982 17.6285L2.32982 13.6285C2.20128 13.5002 2.1101 13.3394 2.06605 13.1632C2.02201 12.987 2.02677 12.8022 2.07982 12.6285C2.13778 12.4508 2.2444 12.2928 2.38757 12.1726C2.53075 12.0525 2.70475 11.9748 2.88982 11.9485L8.58982 11.1185L11.0998 5.98849C11.1817 5.81942 11.3096 5.67683 11.4687 5.57706C11.6279 5.47729 11.812 5.42438 11.9998 5.42438C12.1877 5.42438 12.3717 5.47729 12.5309 5.57706C12.6901 5.67683 12.8179 5.81942 12.8998 5.98849L15.4398 11.1085L21.1398 11.9385C21.3249 11.9648 21.4989 12.0425 21.6421 12.1626C21.7852 12.2828 21.8919 12.4408 21.9498 12.6185C22.0029 12.7922 22.0076 12.977 21.9636 13.1532C21.9196 13.3294 21.8284 13.4902 21.6998 13.6185L17.5798 17.6185L18.5798 23.2485C18.6155 23.436 18.5968 23.6297 18.526 23.8069C18.4551 23.9841 18.335 24.1374 18.1798 24.2485C17.9987 24.3754 17.7807 24.4387 17.5598 24.4285V24.4285Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clip-path="url(#clip1)">
                                    <path
                                        d="M49.5598 24.4285C49.3999 24.4291 49.2422 24.3914 49.0998 24.3185L43.9998 21.6485L38.8998 24.3185C38.7342 24.4056 38.5475 24.4444 38.3609 24.4307C38.1743 24.4169 37.9953 24.3511 37.8443 24.2407C37.6932 24.1303 37.5762 23.9797 37.5064 23.8061C37.4367 23.6324 37.4171 23.4427 37.4498 23.2585L38.4498 17.6285L34.3298 13.6285C34.2013 13.5002 34.1101 13.3394 34.0661 13.1632C34.022 12.987 34.0268 12.8022 34.0798 12.6285C34.1378 12.4508 34.2444 12.2928 34.3876 12.1726C34.5307 12.0525 34.7047 11.9748 34.8898 11.9485L40.5898 11.1185L43.0998 5.98849C43.1817 5.81942 43.3096 5.67683 43.4687 5.57706C43.6279 5.47729 43.812 5.42438 43.9998 5.42438C44.1877 5.42438 44.3717 5.47729 44.5309 5.57706C44.6901 5.67683 44.8179 5.81942 44.8998 5.98849L47.4398 11.1085L53.1398 11.9385C53.3249 11.9648 53.4989 12.0425 53.6421 12.1626C53.7852 12.2828 53.8919 12.4408 53.9498 12.6185C54.0029 12.7922 54.0076 12.977 53.9636 13.1532C53.9196 13.3294 53.8284 13.4902 53.6998 13.6185L49.5798 17.6185L50.5798 23.2485C50.6155 23.436 50.5968 23.6297 50.526 23.8069C50.4551 23.9841 50.335 24.1374 50.1798 24.2485C49.9987 24.3754 49.7807 24.4387 49.5598 24.4285V24.4285Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clip-path="url(#clip2)">
                                    <path
                                        d="M81.5598 24.4285C81.3999 24.4291 81.2422 24.3914 81.0998 24.3185L75.9998 21.6485L70.8998 24.3185C70.7342 24.4056 70.5475 24.4444 70.3609 24.4307C70.1743 24.4169 69.9953 24.3511 69.8443 24.2407C69.6932 24.1303 69.5762 23.9797 69.5064 23.8061C69.4367 23.6324 69.4171 23.4427 69.4498 23.2585L70.4498 17.6285L66.3298 13.6285C66.2013 13.5002 66.1101 13.3394 66.0661 13.1632C66.022 12.987 66.0268 12.8022 66.0798 12.6285C66.1378 12.4508 66.2444 12.2928 66.3876 12.1726C66.5307 12.0525 66.7047 11.9748 66.8898 11.9485L72.5898 11.1185L75.0998 5.98849C75.1817 5.81942 75.3096 5.67683 75.4687 5.57706C75.6279 5.47729 75.812 5.42438 75.9998 5.42438C76.1877 5.42438 76.3717 5.47729 76.5309 5.57706C76.6901 5.67683 76.8179 5.81942 76.8998 5.98849L79.4398 11.1085L85.1398 11.9385C85.3249 11.9648 85.4989 12.0425 85.6421 12.1626C85.7852 12.2828 85.8919 12.4408 85.9498 12.6185C86.0029 12.7922 86.0076 12.977 85.9636 13.1532C85.9196 13.3294 85.8284 13.4902 85.6998 13.6185L81.5798 17.6185L82.5798 23.2485C82.6155 23.436 82.5968 23.6297 82.526 23.8069C82.4551 23.9841 82.335 24.1374 82.1798 24.2485C81.9987 24.3754 81.7807 24.4387 81.5598 24.4285V24.4285Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clip-path="url(#clip3)">
                                    <path
                                        d="M113.56 24.4285C113.4 24.4291 113.242 24.3914 113.1 24.3185L108 21.6485L102.9 24.3185C102.734 24.4056 102.548 24.4444 102.361 24.4307C102.174 24.4169 101.995 24.3511 101.844 24.2407C101.693 24.1303 101.576 23.9797 101.506 23.8061C101.437 23.6324 101.417 23.4427 101.45 23.2585L102.45 17.6285L98.3298 13.6285C98.2013 13.5002 98.1101 13.3394 98.0661 13.1632C98.022 12.987 98.0268 12.8022 98.0798 12.6285C98.1378 12.4508 98.2444 12.2928 98.3876 12.1726C98.5307 12.0525 98.7047 11.9748 98.8898 11.9485L104.59 11.1185L107.1 5.98849C107.182 5.81942 107.31 5.67683 107.469 5.57706C107.628 5.47729 107.812 5.42438 108 5.42438C108.188 5.42438 108.372 5.47729 108.531 5.57706C108.69 5.67683 108.818 5.81942 108.9 5.98849L111.44 11.1085L117.14 11.9385C117.325 11.9648 117.499 12.0425 117.642 12.1626C117.785 12.2828 117.892 12.4408 117.95 12.6185C118.003 12.7922 118.008 12.977 117.964 13.1532C117.92 13.3294 117.828 13.4902 117.7 13.6185L113.58 17.6185L114.58 23.2485C114.616 23.436 114.597 23.6297 114.526 23.8069C114.455 23.9841 114.335 24.1374 114.18 24.2485C113.999 24.3754 113.781 24.4387 113.56 24.4285V24.4285Z"
                                        fill="#1F2937"
                                    />
                                </g>
                                <g clip-path="url(#clip4)">
                                    <path d="M135.146 16.911L131.052 12.9355L136.734 12.1081L137.256 12.032L137.488 11.558L139.998 6.42798L139.998 6.42798L140 6.42443L140.004 6.4329L142.544 11.5529L142.777 12.0225L143.296 12.0981L148.978 12.9255L144.883 16.901L144.502 17.2708L144.595 17.7934L145.595 23.4234L145.595 23.4234L145.597 23.4356L145.605 23.4463L145.56 24.4285L145.556 23.4474L145.564 23.4326L140.464 20.7626L140 20.5197L139.536 20.7626L134.436 23.4326L134.434 23.4334L135.434 17.8034L135.527 17.2808L135.146 16.911Z" stroke="#1F2937" stroke-width="2" />
                                </g>
                                <defs>
                                    <clipPath id="clip0">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                    <clipPath id="clip1">
                                        <rect width="24" height="24" fill="white" transform="translate(32)" />
                                    </clipPath>
                                    <clipPath id="clip2">
                                        <rect width="24" height="24" fill="white" transform="translate(64)" />
                                    </clipPath>
                                    <clipPath id="clip3">
                                        <rect width="24" height="24" fill="white" transform="translate(96)" />
                                    </clipPath>
                                    <clipPath id="clip4">
                                        <rect width="24" height="24" fill="white" transform="translate(128)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                    <div id="menu" class="md:block">
                        <p class="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">When you want to decorate your home, the idea of choosing a decorative theme can seem daunting. Some themes seem to have an endless amount of pieces, while others can feel hard to accomplish</p>
                        <div class="hidden md:flex mt-6 flex-row justify-start items-start space-x-4">
                            <div>
                                <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="chair-1" />
                            </div>
                            <div>
                                <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="chair-2" />
                            </div>
                            <div class="hidden md:block">
                                <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="chair-3" />
                            </div>
                            <div class="hidden md:block">
                                <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="chair-4" />
                            </div>
                        </div>
                        <div class="md:hidden carousel pt-8 cursor-none" data-flickity='{ "wrapAround": true,"pageDots": false }'>
                            <div class="carousel-cell">
                                <div class="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="bag" class="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div class="carousel-cell">
                                <div class="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="shoes" class="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div class="carousel-cell">
                                <div class="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="wallet" class="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div class="carousel-cell">
                                <div class="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="wallet" class="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div class="carousel-cell">
                                <div class="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/QXzVpHp/vincent-wachowiak-8g-Cm-EBVl6a-I-unsplash-1.png" alt="wallet" class="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div class="carousel-cell">
                                <div class="md:w-full h-full relative">
                                    <img src="https://i.ibb.co/znYKsbc/vincent-wachowiak-z-P316-KSOX0-E-unsplash-1.png" alt="wallet" class="w-full h-full object-fit object-cover" />
                                </div>
                            </div>
                            <div class="carousel-cell"></div>
                        </div>
                        <div class="mt-6 flex justify-start items-center flex-row space-x-2.5">
                            <div>
                                <img src="https://i.ibb.co/QcqyrVG/Mask-Group.png" alt="girl-avatar" />
                            </div>
                            <div class="flex flex-col justify-start items-start space-y-2">
                                <p class="text-base font-medium leading-none text-gray-800">Anna Kendrick</p>
                                <p class="text-sm leading-none text-gray-600">14 July 2021</p>
                            </div>
                        </div>
                    </div>

                    <div class="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                        <div class="flex flex-col md:flex-row flex justify-between w-full">
                            <div class="flex flex-row justify-between items-start">
                                <p class="text-xl md:text-2xl font-medium leading-normal text-gray-800">Comfortable and minimal, just how I like it!</p>
                                <button onclick="showMenu2(true)" class="ml-4 md:hidden">
                                    <svg id="closeIcon2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 12.5L10 7.5L5 12.5" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <svg id="openIcon2" class="hidden" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 7.5L10 12.5L15 7.5" stroke="#1F2937" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div class="cursor-pointer mt-2 md:mt-0">
                                <svg width="152" height="24" viewBox="0 0 152 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path
                                            d="M17.5598 24.4285C17.3999 24.4291 17.2422 24.3914 17.0998 24.3185L11.9998 21.6485L6.89982 24.3185C6.73422 24.4056 6.5475 24.4444 6.3609 24.4307C6.1743 24.4169 5.9953 24.3511 5.84425 24.2407C5.6932 24.1303 5.57616 23.9797 5.50644 23.8061C5.43671 23.6324 5.4171 23.4427 5.44982 23.2585L6.44982 17.6285L2.32982 13.6285C2.20128 13.5002 2.1101 13.3394 2.06605 13.1632C2.02201 12.987 2.02677 12.8022 2.07982 12.6285C2.13778 12.4508 2.2444 12.2928 2.38757 12.1726C2.53075 12.0525 2.70475 11.9748 2.88982 11.9485L8.58982 11.1185L11.0998 5.98849C11.1817 5.81942 11.3096 5.67683 11.4687 5.57706C11.6279 5.47729 11.812 5.42438 11.9998 5.42438C12.1877 5.42438 12.3717 5.47729 12.5309 5.57706C12.6901 5.67683 12.8179 5.81942 12.8998 5.98849L15.4398 11.1085L21.1398 11.9385C21.3249 11.9648 21.4989 12.0425 21.6421 12.1626C21.7852 12.2828 21.8919 12.4408 21.9498 12.6185C22.0029 12.7922 22.0076 12.977 21.9636 13.1532C21.9196 13.3294 21.8284 13.4902 21.6998 13.6185L17.5798 17.6185L18.5798 23.2485C18.6155 23.436 18.5968 23.6297 18.526 23.8069C18.4551 23.9841 18.335 24.1374 18.1798 24.2485C17.9987 24.3754 17.7807 24.4387 17.5598 24.4285V24.4285Z"
                                            fill="#1F2937"
                                        />
                                    </g>
                                    <g clip-path="url(#clip1)">
                                        <path
                                            d="M49.5598 24.4285C49.3999 24.4291 49.2422 24.3914 49.0998 24.3185L43.9998 21.6485L38.8998 24.3185C38.7342 24.4056 38.5475 24.4444 38.3609 24.4307C38.1743 24.4169 37.9953 24.3511 37.8443 24.2407C37.6932 24.1303 37.5762 23.9797 37.5064 23.8061C37.4367 23.6324 37.4171 23.4427 37.4498 23.2585L38.4498 17.6285L34.3298 13.6285C34.2013 13.5002 34.1101 13.3394 34.0661 13.1632C34.022 12.987 34.0268 12.8022 34.0798 12.6285C34.1378 12.4508 34.2444 12.2928 34.3876 12.1726C34.5307 12.0525 34.7047 11.9748 34.8898 11.9485L40.5898 11.1185L43.0998 5.98849C43.1817 5.81942 43.3096 5.67683 43.4687 5.57706C43.6279 5.47729 43.812 5.42438 43.9998 5.42438C44.1877 5.42438 44.3717 5.47729 44.5309 5.57706C44.6901 5.67683 44.8179 5.81942 44.8998 5.98849L47.4398 11.1085L53.1398 11.9385C53.3249 11.9648 53.4989 12.0425 53.6421 12.1626C53.7852 12.2828 53.8919 12.4408 53.9498 12.6185C54.0029 12.7922 54.0076 12.977 53.9636 13.1532C53.9196 13.3294 53.8284 13.4902 53.6998 13.6185L49.5798 17.6185L50.5798 23.2485C50.6155 23.436 50.5968 23.6297 50.526 23.8069C50.4551 23.9841 50.335 24.1374 50.1798 24.2485C49.9987 24.3754 49.7807 24.4387 49.5598 24.4285V24.4285Z"
                                            fill="#1F2937"
                                        />
                                    </g>
                                    <g clip-path="url(#clip2)">
                                        <path
                                            d="M81.5598 24.4285C81.3999 24.4291 81.2422 24.3914 81.0998 24.3185L75.9998 21.6485L70.8998 24.3185C70.7342 24.4056 70.5475 24.4444 70.3609 24.4307C70.1743 24.4169 69.9953 24.3511 69.8443 24.2407C69.6932 24.1303 69.5762 23.9797 69.5064 23.8061C69.4367 23.6324 69.4171 23.4427 69.4498 23.2585L70.4498 17.6285L66.3298 13.6285C66.2013 13.5002 66.1101 13.3394 66.0661 13.1632C66.022 12.987 66.0268 12.8022 66.0798 12.6285C66.1378 12.4508 66.2444 12.2928 66.3876 12.1726C66.5307 12.0525 66.7047 11.9748 66.8898 11.9485L72.5898 11.1185L75.0998 5.98849C75.1817 5.81942 75.3096 5.67683 75.4687 5.57706C75.6279 5.47729 75.812 5.42438 75.9998 5.42438C76.1877 5.42438 76.3717 5.47729 76.5309 5.57706C76.6901 5.67683 76.8179 5.81942 76.8998 5.98849L79.4398 11.1085L85.1398 11.9385C85.3249 11.9648 85.4989 12.0425 85.6421 12.1626C85.7852 12.2828 85.8919 12.4408 85.9498 12.6185C86.0029 12.7922 86.0076 12.977 85.9636 13.1532C85.9196 13.3294 85.8284 13.4902 85.6998 13.6185L81.5798 17.6185L82.5798 23.2485C82.6155 23.436 82.5968 23.6297 82.526 23.8069C82.4551 23.9841 82.335 24.1374 82.1798 24.2485C81.9987 24.3754 81.7807 24.4387 81.5598 24.4285V24.4285Z"
                                            fill="#1F2937"
                                        />
                                    </g>
                                    <g clip-path="url(#clip3)">
                                        <path
                                            d="M113.56 24.4285C113.4 24.4291 113.242 24.3914 113.1 24.3185L108 21.6485L102.9 24.3185C102.734 24.4056 102.548 24.4444 102.361 24.4307C102.174 24.4169 101.995 24.3511 101.844 24.2407C101.693 24.1303 101.576 23.9797 101.506 23.8061C101.437 23.6324 101.417 23.4427 101.45 23.2585L102.45 17.6285L98.3298 13.6285C98.2013 13.5002 98.1101 13.3394 98.0661 13.1632C98.022 12.987 98.0268 12.8022 98.0798 12.6285C98.1378 12.4508 98.2444 12.2928 98.3876 12.1726C98.5307 12.0525 98.7047 11.9748 98.8898 11.9485L104.59 11.1185L107.1 5.98849C107.182 5.81942 107.31 5.67683 107.469 5.57706C107.628 5.47729 107.812 5.42438 108 5.42438C108.188 5.42438 108.372 5.47729 108.531 5.57706C108.69 5.67683 108.818 5.81942 108.9 5.98849L111.44 11.1085L117.14 11.9385C117.325 11.9648 117.499 12.0425 117.642 12.1626C117.785 12.2828 117.892 12.4408 117.95 12.6185C118.003 12.7922 118.008 12.977 117.964 13.1532C117.92 13.3294 117.828 13.4902 117.7 13.6185L113.58 17.6185L114.58 23.2485C114.616 23.436 114.597 23.6297 114.526 23.8069C114.455 23.9841 114.335 24.1374 114.18 24.2485C113.999 24.3754 113.781 24.4387 113.56 24.4285V24.4285Z"
                                            fill="#1F2937"
                                        />
                                    </g>
                                    <g clip-path="url(#clip4)">
                                        <path d="M135.146 16.911L131.052 12.9355L136.734 12.1081L137.256 12.032L137.488 11.558L139.998 6.42798L139.998 6.42798L140 6.42443L140.004 6.4329L142.544 11.5529L142.777 12.0225L143.296 12.0981L148.978 12.9255L144.883 16.901L144.502 17.2708L144.595 17.7934L145.595 23.4234L145.595 23.4234L145.597 23.4356L145.605 23.4463L145.56 24.4285L145.556 23.4474L145.564 23.4326L140.464 20.7626L140 20.5197L139.536 20.7626L134.436 23.4326L134.434 23.4334L135.434 17.8034L135.527 17.2808L135.146 16.911Z" stroke="#1F2937" stroke-width="2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                        <clipPath id="clip1">
                                            <rect width="24" height="24" fill="white" transform="translate(32)" />
                                        </clipPath>
                                        <clipPath id="clip2">
                                            <rect width="24" height="24" fill="white" transform="translate(64)" />
                                        </clipPath>
                                        <clipPath id="clip3">
                                            <rect width="24" height="24" fill="white" transform="translate(96)" />
                                        </clipPath>
                                        <clipPath id="clip4">
                                            <rect width="24" height="24" fill="white" transform="translate(128)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div id="menu2" class="hidden md:block">
                            <p class="mt-3 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">This style relies more on neutral colors with little to no embellishment on furniture. Lighter fabrics, such as silk and cotton, are popular, as are lighter colors in wood and metal.</p>
                            <div class="mt-6 flex flex-row justify-start items-start space-x-4">
                                <div class="py-4 px-8 bg-gray-100">
                                    <img src="https://i.ibb.co/xfg5T5T/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png" alt="chair-5" />
                                </div>
                                <div class="py-4 px-8 bg-gray-100">
                                    <img src="https://i.ibb.co/54F7vvV/Group-1855.png" alt="chair-6" />
                                </div>
                            </div>
                            <div class="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                <div>
                                    <img src="https://i.ibb.co/RCTGZTc/Mask-Group-1.png" alt="girl-avatar" />
                                </div>
                                <div class="flex flex-col justify-start items-start space-y-2">
                                    <p class="text-base font-medium leading-none text-gray-800">James Schofield</p>
                                    <p class="text-sm leading-none text-gray-600">23 June 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </body>
    <!-- item 2 -->
    <body class="overflow-y-hidden">
        <div class=" py-12">
            <!-- Desktop Responsive Start -->
            <div class="hidden sm:flex flex-col justify-start items-start">
                <div class="pl-4 lg:px-10 2xl:px-20 flex flex-row justify-center items-end space-x-4">
                    <h1 class="text-4xl font-semibold leading-9 text-gray-800">
                        Favourites
                    </h1>
                    <p class="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                </div>
                <table class="w-full mt-16 whitespace-nowrap">
                    <thead aria-label="table heading" class="w-full h-16 text-left py-6 bg-gray-50 border-gray-200 border-b ">
                        <tr>
                            <th class="text-base font-medium leading-4 text-gray-600 2xl:pl-20 pl-4 lg:pl-10">
                                YOUR PRODUCT
                            </th>
                            <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                DESCRIPTION
                            </th>
                            <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                PRICE
                            </th>
                            <th class="text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                MORE OPTIONS
                            </th>
                            <th class="text-base font-medium leading-4 text-gray-600 2xl:pl-28 2xl:pr-20 pr-4 lg:pr-10"></th>
                        </tr>
                    </thead>
                    <tbody class="w-full text-left">
                        <tr class="border-gray-200 border-b  ">
                            <th><img class="my-10 pl-4 lg:pl-10 2xl:pl-20" src="https://i.ibb.co/44vJTd4/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-3.png" alt="shoe" /></th>
                            <th class="mt-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <p class=" text-base leading-4 text-gray-800">Jet black sportsmen shoes</p>
                            </th>
                            <th class="my-10  pl-6 lg:pl-20 2xl:pl-52">
                                <p class="">$90</p>
                            </th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">View details</a>
                            </th>
                            <th class="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </th>
                        </tr>
    
                        <tr class="border-gray-200 border-b">
                            <th><img class="my-10 pl-4 lg:pl-10 2xl:pl-20" src="https://i.ibb.co/D40htNc/daniel-storek-JM-q-KEd1-GMI-unsplash-1.png" alt="shoes" /></th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <p class="text-base leading-4 text-gray-800">Jet black sportsmen shoes</p>
                            </th>
                            <th class="mt-10  pl-6 lg:pl-20 2xl:pl-52">
                                <p class="">$90</p>
                            </th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">View details</a>
                            </th>
                            <th class="mt-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </th>
                        </tr>
    
                        <tr class="border-gray-200 border-b">
                            <th><img class="my-10 pl-4 lg:pl-10 2xl:pl-20" src="https://i.ibb.co/WsPGLM9/charles-deluvio-1-nx1-QR5d-TE-unsplash-1.png" alt="glasses" /></th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <p class="text-base leading-4 text-gray-800">Jet black sportsmen shoes</p>
                            </th>
                            <th class="my-10  pl-6 lg:pl-20 2xl:pl-52">
                                <p class="">$90</p>
                            </th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">View details</a>
                            </th>
                            <th class="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </th>
                        </tr>
    
                        <tr class="border-gray-200 border-b">
                            <th><img class="my-10 pl-4 lg:pl-10 2xl:pl-20" src="https://i.ibb.co/k9YJ0q2/rocknwool-8-Lsy75-Lq-GVc-unsplash-1.png" alt="girl" /></th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <p class="text-base leading-4 text-gray-800">Jet black sportsmen shoes</p>
                            </th>
                            <th class="my-10  pl-6 lg:pl-20 2xl:pl-52">
                                <p class="">$90</p>
                            </th>
                            <th class="my-10 text-base font-medium leading-4 text-gray-600 pl-6 lg:pl-20 2xl:pl-52">
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none  text-gray-800 focus:outline-none focus:underline">View detail</a>
                            </th>
                            <th class="my-10 pl-4 lg:pl-12  2xl:pl-28 pr-4 2xl:pr-20">
                                <button class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-800 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Desktop Responsive End -->
    
            <!-- Mobile Responsive Start -->
            <div class=" flex justify-center items-center">
                <div class="sm:hidden flex flex-col justify-start items-start ">
                    <div class="px-4 lg:px-10 2xl:px-20 flex flex-row justify-start items-end space-x-4">
                        <p class="text-4xl font-semibold leading-9 text-gray-800">
                            Favourites
                        </p>
                        <p class="text-base leading-4 text-gray-600 pb-1">(12 Items)</p>
                    </div>
                    <div class="border-gray-200 border-b pb-10">
                        <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/bHgJDpd/imani-bahati-Lx-Vx-PA1-LOVM-unsplash-2.png" alt="shoe" />
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p class="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p class="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"> View details</a>
                            </div>
                            <div>
                                <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </div>
                        </div>
                    </div>
                    <div class="border-gray-200 border-b pb-10">
                        <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/6y62DnT/daniel-storek-JM-q-KEd1-GMI-unsplash-1-1.png" alt="shoes" />
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p class="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p class="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"> View details</a>
                            </div>
                            <div>
                                <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </div>
                        </div>
                    </div>
    
                    <div class="border-gray-200 border-b pb-10">
                        <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/LR5LyDw/charles-deluvio-1-nx1-QR5d-TE-unsplash-1-1.png" alt="glasses" />
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p class="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p class="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"> View details</a>
                            </div>
                            <div>
                                <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </div>
                        </div>
                    </div>
    
                    <div class="border-gray-200 border-b pb-10">
                        <div class="px-4 flex flex-col jusitfy-center items-start mt-10">
                            <div>
                                <img src="https://i.ibb.co/XzvpLZz/rocknwool-8-Lsy75-Lq-GVc-unsplash-1-4.png" alt="girl" />
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <p class="w-36 text-base leading-6 text-gray-800">Jet black sportsmen shoes</p>
                            </div>
                            <div>
                                <p class="text-base font-semibold leading-4 text-gray-800">$90</p>
                            </div>
                        </div>
                        <div class="px-4 mt-6 flex justify-between w-full flex jusitfy-center items-center">
                            <div>
                                <a href="javascript:void(0)" class="hover:underline text-base font-medium leading-none focus:outline-none focus:underline  text-gray-800"> View details</a>
                            </div>
                            <div>
                                <button class="focus:outline-none focus:ring-red-800 focus:ring-offset-2 focus:ring-2 text-base leading-none text-red-600 hover:text-red-800"><p>Remove Item</p></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Mobile Responsive End -->
        </div>
    </body>
    <!-- item 3 -->
    <body class="overflow-hidden dark:bg-gray-900">
        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex justify-center items-center lg:flex-row flex-col gap-8">
                <!-- Description Div -->
       
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600  dark:text-white">Home / Furniture / Wooden Stool</p>
                    <h2 class="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 dark:text-white mt-4">Wooden Stool</h2>
      
                    <div class="flex flex-row justify-between mt-5">
                       <img class="dark:hidden" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1.svg" alt="stars">
                       <img class="hidden dark:block" src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg1dark.svg" alt="stars">
                        <p class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 dark:text-white duration-100 cursor-pointer">22 reviews</p>
                    </div>
      
                    <p class="font-normal text-base leading-6 text-gray-600  mt-7">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using. Lorem Ipsum is that it has a more-or-less normal distribution of letters.</p>
                    <p class="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-white">$ 790.89</p>
      
                    <div class="lg:mt-11 mt-10">
                        <div class="flex flex-row justify-between">
                            <p class="font-medium text-base leading-4 text-gray-600 ">Select quantity</p>
                            <div class="flex">
                                <span @click="minus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">-</span>
                                <input id="counter" v-model="counter" aria-label="input" class="border dark:text-white border-gray-300 dark:bg-transparent h-full text-center w-14 pb-1" type="text"  />
                                <span @click="plus()" class="focus:outline-none dark:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1">+</span>
                            </div>
                        </div>
                        <hr class="bg-gray-200 w-full my-2" />
                        <div class="flex flex-row justify-between items-center mt-4" @click="rotate()">
                            <p class="font-medium text-base leading-4 text-gray-600 ">Dimensions</p>
                            <img  id="rotateSVG" v-if="rotateimg==false" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform duration-100  dark:hidden" src="../svgs/svg4.svg" alt="dropdown">
                            <img  id="rotateSVG" v-if="rotateimg==true"  class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer transform duration-100  dark:hidden rotate-180" src="../svgs/svg4.svg" alt="dropdown">
                        </div>
                        <hr class="bg-gray-200 w-full mt-4" />
                    </div>
      
                    <button class="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">Add to shopping bag</button>
                </div>
      
                <!-- Preview Images Div For larger Screen-->
      
                <div class="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div class="w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
                        <img src="https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png" alt="Wooden Chair Previw" />
                    </div>
                    <div class="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div class="bg-gray-100 flex justify-center items-center py-4">
                            <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair - preview 1" />
                        </div>
                        <div class="bg-gray-100 flex justify-center items-center py-4">
                            <img src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png" alt="Wooden chair - preview 2" />
                        </div>
                        <div class="bg-gray-100 flex justify-center items-center py-4">
                            <img src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png" alt="Wooden chair- preview 3" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center w-full">
                <div class="w-full sm:w-96 md:w-8/12 lg:w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:gap-28 sm:gap-x-6 sm:gap-y-12 gap-y-12 sm:mt-14 mt-10">
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg2.svg" alt="drink">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg2dark.svg" alt="drink">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Great for drinks</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">Here are all the great cocktail recipes you should know how to make, from the margarita to the whiskey sour. Cheers!</p>
                    </div>
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg3.svg" alt="hardware">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg3dark.svg" alt="hardware">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Durable hardware</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">Product durability is a key aspect of achieving a circular economy. ... Moreover, enhancing the durability of individual hardware components</p>
                    </div>
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg5.svg" alt="Eco-friendly">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg5dark.svg" alt="Eco-friendly">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Eco-friendly</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">They re-use, recycle and reduce waste disposal in their lives. They conserve energy and natural resources</p>
                    </div>
                    <div>
                        <img class="dark:hidden"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg6.svg" alt="drink">
                        <img class="hidden dark:block"  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/productDetail4-svg6dark.svg

" alt="drink">
                        <p class="font-semibold text-xl leading-5 text-gray-800 dark:text-white lg:mt-10 mt-9">Minimal Design</p>
                        <p class="text-normal text-base leading-6 text-gray-600  mt-4">Minimalist interior design is very similar to modern interior design and involves using the bare essentials</p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    <!-- item 4 -->
    <body class="2xl:px-20 md:px-10 2xl:mx-auto  overflow-y-hidden">
    <div class="md:py-12 py-8 px-4"> 
      <div class="flex flex-col items-center justify-center">
        <h1 class="lg:text-5xl md:text-4xl text-2xl font-bold leading-10 text-gray-800">Our Trusted Partners</h1>
        <p class="text-base leading-normal text-center text-gray-600 mt-4 xl:w-1/2 w-10/12">We just got featured in the following magazines and it has been the most incredible journey. We work with the best fashion magazines across the world</p>
      </div>
      <div class="flex items-center justify-center mt-10">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 w-full">
          <div class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg1.svg" alt="google">
          </div>
          <div class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg2.svg" alt="dribble">
          </div>
          <div class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg3.svg" alt="amazon">
          </div>
          <div class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg4.svg" alt="linkedIn">                
          </div>
          <div class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
           <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg5.svg" alt="blackberry">
          </div>
          <div class="md:w-48 w-full h-32 bg-gray-50 flex items-center justify-center">
            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/cloud-logo-5-svg6.svg" alt="microsoft">
          </div>
        </div>
      </div>
    </div>
   </body>

    <!-- item 5 -->
    <body>
    <div class="dark:bg-gray-900">
      <section class="mx-auto container py-20">
        <div class="flex justify-center items-center flex-col">
          <div class="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-gray-800 dark:text-white">
            <h1>Tailor-made features</h1>
          </div>
          <div class="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-20 xl:gap-x-0 lg:px-10 xl:px-0">
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <svg class="" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 13.3333H32L28 8L24 13.3333ZM24 18.6667H32L28 24L24 18.6667Z" fill="#C7D2FE" />
                  <path d="M1.33333 0H9.33333V32H1.33333C0.979711 32 0.640572 31.8595 0.390523 31.6095C0.140475 31.3594 0 31.0203 0 30.6667V1.33333C0 0.979711 0.140475 0.640572 0.390523 0.390523C0.640572 0.140475 0.979711 0 1.33333 0Z" fill="#818CF8" />
                  <path d="M12 0H20C20.3536 0 20.6928 0.140475 20.9428 0.390523C21.1929 0.640572 21.3333 0.979711 21.3333 1.33333V30.6667C21.3333 31.0203 21.1929 31.3594 20.9428 31.6095C20.6928 31.8595 20.3536 32 20 32H12V0Z" fill="#6366F1" />
                </svg>
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Robust workflow</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Workflows can help streamline and automate repeatable business tasks.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.33325 1.33337H30.6666L26.6666 9.33337H1.33325L5.33325 1.33337Z" fill="#818CF8" />
                  <path d="M5.33325 12H30.6666L26.6666 20H1.33325L5.33325 12Z" fill="#6366F1" />
                  <path d="M5.33325 22.6667H30.6666L26.6666 30.6667H1.33325L5.33325 22.6667Z" fill="#C7D2FE" />
                </svg>
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Flexibility</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>A flexible software architecture is able to changes in usability requirements</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30.6667 8.00004V2.66671C30.6667 2.31309 30.5262 1.97395 30.2762 1.7239C30.0261 1.47385 29.687 1.33337 29.3334 1.33337H2.66671C2.31309 1.33337 1.97395 1.47385 1.7239 1.7239C1.47385 1.97395 1.33337 2.31309 1.33337 2.66671V8.00004H30.6667Z" fill="#6366F1" />
                  <path d="M1.33337 10.6667V29.3334C1.33337 29.687 1.47385 30.0262 1.7239 30.2762C1.97395 30.5263 2.31309 30.6667 2.66671 30.6667H9.33337V10.6667H1.33337Z" fill="#C7D2FE" />
                  <path d="M12 30.6667H29.3333C29.687 30.6667 30.0261 30.5263 30.2761 30.2762C30.5262 30.0262 30.6667 29.687 30.6667 29.3334V10.6667H12V30.6667Z" fill="#818CF8" />
                </svg>
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>User friendly</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Good usability can improve a new software chances of successful adoption.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M28.0001 32H16.0001C15.6465 32 15.3073 31.8595 15.0573 31.6095C14.8072 31.3594 14.6667 31.0203 14.6667 30.6667V28C14.6667 27.6464 14.8072 27.3073 15.0573 27.0572C15.3073 26.8072 15.6465 26.6667 16.0001 26.6667H28.0001C28.3537 26.6667 28.6928 26.8072 28.9429 27.0572C29.1929 27.3073 29.3334 27.6464 29.3334 28V30.6667C29.3334 31.0203 29.1929 31.3594 28.9429 31.6095C28.6928 31.8595 28.3537 32 28.0001 32Z" fill="#C7D2FE" />
                  <path d="M28.0001 0H4.00008C3.64646 0 3.30732 0.140475 3.05727 0.390523C2.80722 0.640572 2.66675 0.979711 2.66675 1.33333V4C2.66675 4.35362 2.80722 4.69276 3.05727 4.94281C3.30732 5.19286 3.64646 5.33333 4.00008 5.33333H28.0001C28.3537 5.33333 28.6928 5.19286 28.9429 4.94281C29.1929 4.69276 29.3334 4.35362 29.3334 4V1.33333C29.3334 0.979711 29.1929 0.640572 28.9429 0.390523C28.6928 0.140475 28.3537 0 28.0001 0Z" fill="#6366F1" />
                  <path d="M28.0001 8H4.00008C3.64646 8 3.30732 8.14047 3.05727 8.39052C2.80722 8.64057 2.66675 8.97971 2.66675 9.33333V22.6667C2.66675 23.0203 2.80722 23.3594 3.05727 23.6095C3.30732 23.8595 3.64646 24 4.00008 24H28.0001C28.3537 24 28.6928 23.8595 28.9429 23.6095C29.1929 23.3594 29.3334 23.0203 29.3334 22.6667V9.33333C29.3334 8.97971 29.1929 8.64057 28.9429 8.39052C28.6928 8.14047 28.3537 8 28.0001 8Z" fill="#818CF8" />
                </svg>
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Multiple layouts</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Smaller components are easier to maintain. Program can be divided</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.66658 1.33331H2.66659C2.31296 1.33331 1.97382 1.47379 1.72378 1.72384C1.47373 1.97388 1.33325 2.31302 1.33325 2.66665V29.3333C1.33325 29.6869 1.47373 30.0261 1.72378 30.2761C1.97382 30.5262 2.31296 30.6666 2.66659 30.6666H6.66658V1.33331Z" fill="#C7D2FE" />
                  <path
                    d="M9.33325 30.6666H22.6666V1.33331H9.33325V30.6666ZM15.9999 25.3333C15.6463 25.3333 15.3072 25.1928 15.0571 24.9428C14.8071 24.6927 14.6666 24.3536 14.6666 24C14.6666 23.6464 14.8071 23.3072 15.0571 23.0572C15.3072 22.8071 15.6463 22.6666 15.9999 22.6666C16.3535 22.6666 16.6927 22.8071 16.9427 23.0572C17.1928 23.3072 17.3333 23.6464 17.3333 24C17.3333 24.3536 17.1928 24.6927 16.9427 24.9428C16.6927 25.1928 16.3535 25.3333 15.9999 25.3333ZM15.9999 6.66665C16.3535 6.66665 16.6927 6.80712 16.9427 7.05717C17.1928 7.30722 17.3333 7.64636 17.3333 7.99998C17.3333 8.3536 17.1928 8.69274 16.9427 8.94279C16.6927 9.19284 16.3535 9.33331 15.9999 9.33331C15.6463 9.33331 15.3072 9.19284 15.0571 8.94279C14.8071 8.69274 14.6666 8.3536 14.6666 7.99998C14.6666 7.64636 14.8071 7.30722 15.0571 7.05717C15.3072 6.80712 15.6463 6.66665 15.9999 6.66665ZM15.9999 14.6666C16.3535 14.6666 16.6927 14.8071 16.9427 15.0572C17.1928 15.3072 17.3333 15.6464 17.3333 16C17.3333 16.3536 17.1928 16.6927 16.9427 16.9428C16.6927 17.1928 16.3535 17.3333 15.9999 17.3333C15.6463 17.3333 15.3072 17.1928 15.0571 16.9428C14.8071 16.6927 14.6666 16.3536 14.6666 16C14.6666 15.6464 14.8071 15.3072 15.0571 15.0572C15.3072 14.8071 15.6463 14.6666 15.9999 14.6666Z"
                    fill="#818CF8"
                  />
                  <path d="M29.3333 1.33331H25.3333V30.6666H29.3333C29.6869 30.6666 30.026 30.5262 30.2761 30.2761C30.5261 30.0261 30.6666 29.6869 30.6666 29.3333V2.66665C30.6666 2.31302 30.5261 1.97388 30.2761 1.72384C30.026 1.47379 29.6869 1.33331 29.3333 1.33331Z" fill="#6366F1" />
                </svg>
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Better components</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>Component-based design makes front-end web development faster.</p>
              </div>
            </div>
            <div class="cursor-pointer hover:shadow py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
              <div class="mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15.2079 0.175992L0.781281 6.91599C0.68372 6.96073 0.601072 7.03256 0.543175 7.12294C0.485278 7.21331 0.454572 7.31842 0.454712 7.42575C0.454853 7.53308 0.485833 7.63811 0.543966 7.72833C0.6021 7.81856 0.684936 7.89017 0.782614 7.93466L15.3226 14.6253C15.7519 14.8227 16.2479 14.8227 16.6773 14.6253L31.2173 7.93466C31.315 7.8903 31.3979 7.81879 31.4562 7.72865C31.5145 7.6385 31.5456 7.53351 31.5459 7.42618C31.5461 7.31885 31.5156 7.2137 31.4578 7.12325C31.4 7.0328 31.3175 6.96086 31.2199 6.91599L16.792 0.175992C16.544 0.0601174 16.2736 6.10352e-05 15.9999 6.10352e-05C15.7263 6.10352e-05 15.4559 0.0601174 15.2079 0.175992Z"
                    fill="#818CF8"
                  />
                  <path
                    d="M31.22 15.568L28.24 14.176C28.0266 14.0763 27.794 14.0243 27.5584 14.0236C27.3229 14.0229 27.09 14.0735 26.876 14.172L16.6773 18.8653C16.4649 18.963 16.2338 19.0136 16 19.0136C15.7662 19.0136 15.5351 18.963 15.3227 18.8653L5.12267 14.172C4.90885 14.0737 4.67621 14.0232 4.4409 14.0239C4.20559 14.0246 3.97324 14.0765 3.76001 14.176L0.780006 15.568C0.682503 15.6128 0.599949 15.6848 0.54217 15.7752C0.48439 15.8657 0.453823 15.9708 0.454103 16.0782C0.454384 16.1855 0.485502 16.2905 0.543754 16.3806C0.602006 16.4708 0.684937 16.5423 0.782674 16.5866L15.3227 23.276C15.535 23.3742 15.7661 23.4251 16 23.4251C16.2339 23.4251 16.465 23.3742 16.6773 23.276L31.2173 16.5866C31.3151 16.5423 31.398 16.4708 31.4563 16.3806C31.5145 16.2905 31.5456 16.1855 31.5459 16.0782C31.5462 15.9708 31.5156 15.8657 31.4578 15.7752C31.4001 15.6848 31.3175 15.6128 31.22 15.568Z"
                    fill="#C7D2FE"
                  />
                  <path
                    d="M31.22 24.144L28.24 22.752C28.0266 22.6522 27.794 22.6002 27.5585 22.5995C27.3229 22.5989 27.09 22.6495 26.876 22.748L16.6774 27.44C16.4649 27.5376 16.2338 27.5882 16 27.5882C15.7662 27.5882 15.5351 27.5376 15.3227 27.44L5.12269 22.7466C4.90887 22.6484 4.67623 22.5978 4.44091 22.5985C4.2056 22.5992 3.97326 22.6511 3.76002 22.7506L0.780019 24.144C0.682891 24.189 0.600708 24.2609 0.543205 24.3512C0.485701 24.4415 0.455288 24.5464 0.455568 24.6535C0.455849 24.7605 0.486813 24.8653 0.544789 24.9553C0.602765 25.0453 0.685324 25.1168 0.782686 25.1613L15.3227 31.852C15.752 32.0493 16.248 32.0493 16.6774 31.852L31.2174 25.1613C31.3147 25.1168 31.3973 25.0453 31.4553 24.9553C31.5132 24.8653 31.5442 24.7605 31.5445 24.6535C31.5448 24.5464 31.5143 24.4415 31.4568 24.3512C31.3993 24.2609 31.3172 24.189 31.22 24.144Z"
                    fill="#6366F1"
                  />
                </svg>
              </div>
              <div class="text-gray-800 dark:text-white text-2xl font-semibold text-center">
                <h2>Well organised</h2>
              </div>
              <div class="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                <p>No more running around looking for things.When you write things and plan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>
  
</template>

<script>
export default {
    name: "component",
    data(){
        return{
            counter:1,
            rotateimg:false,
            show: false,
            windowWidth: window.innerWidth               
        }
    },
    methods:{
          plus() {
                this.counter
                this.counter=this.counter + 1;
            },
      
             minus() {
                var preValue = document.getElementById("counter").value;
                if (parseInt(preValue) != 0) {
                    this.counter=this.counter - 1;
                }
            },
      
             rotate() {
                if(this.rotateimg==true){
                    this.rotateimg=false
                }else{
                    this.rotateimg=true
                }
            },
            
        },
        mounted() {
        if(this.windowWidth > 1280){
            this.show = true
        }
    },
};
</script>

<style>

</style>

