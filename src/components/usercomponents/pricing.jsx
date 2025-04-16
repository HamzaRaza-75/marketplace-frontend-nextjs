'use client'
import Stepper from "awesome-react-stepper"

const Pricing = () => {
    return (
        <>
            <Stepper
                strokeColor="#0790b3ff"
                fillStroke="#0790b3ff"
                activeColor="#0790b3ff"
                activeProgressBorder="2px solid #0790b3ff"
                submitBtn={<button className="stepperBtn"></button>}
                continueBtn={<button className="stepperBtn"></button>}
                backBtn={<button className="stepperBtn"></button>}
                onSubmit={
                    (step) => alert(`Thank you!!! Final Step -> ${step}`)
                }
            >
                {/* Pricing tab 1 */}
                <div className="min-h-[90vh] flex justify-center items-center">
                    <div className="relative flex flex-col h-full p-6 border shadow rounded-2xl dark:bg-slate-900 border-slate-200 dark:border-slate-900 shadow-slate-950/5">
                        <div className="mb-5">
                            <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">Essential</div>
                            <div className="inline-flex items-baseline mb-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">$</span>
                                <span className="text-4xl font-bold text-slate-900 dark:text-slate-200">29</span>
                                <span className="font-medium text-slate-500">/mo</span>
                            </div>
                            <div className="mb-5 text-sm text-slate-500">There are many variations available, but the majority have suffered.</div>
                            <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                Purchase Plan
                            </a>
                        </div>
                        <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">Includes:</div>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 grow">
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Unlimited placeholder texts</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Consectetur adipiscing elit</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Excepteur sint occaecat cupidatat</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Officia deserunt mollit anim</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Pricing tab 2 */}
                <div className="min-h-[90vh]  flex justify-center items-center">
                    <div className="relative flex flex-col h-full p-6 border shadow bg-cyan-700 rounded-2xl dark:bg-slate-900 border-slate-200 dark:border-slate-900 shadow-slate-950/5">
                        <div className="absolute top-0 right-0 mr-6 -mt-4">
                            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
                        </div>
                        <div className="mb-5 text-white">
                            <div className="mb-1 font-semibold text-white dark:text-slate-200">Perform</div>
                            <div className="inline-flex items-baseline mb-2">
                                <span className="text-3xl font-bold text-white dark:text-slate-200">$</span>
                                <span className="text-4xl font-bold text-white dark:text-slate-200">49</span>
                                <span className="font-medium text-white">/mo</span>
                            </div>
                            <div className="mb-5 text-sm text-white-900">There are many variations available, but the majority have suffered.</div>
                            <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                Purchase Plan
                            </a>
                        </div>
                        <div className="mb-3 font-medium text-white dark:text-slate-200">Includes:</div>
                        <ul className="space-y-3 text-sm text-white dark:text-slate-400 grow">
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Unlimited placeholder texts</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Consectetur adipiscing elit</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Excepteur sint occaecat cupidatat</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Officia deserunt mollit anim</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Predefined chunks as necessary</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Pricing tab 3 */}
                <div className="min-h-[90vh]  flex justify-center items-center">
                    <div className="relative flex flex-col h-full p-6 bg-white border shadow rounded-2xl dark:bg-slate-900 border-slate-200 dark:border-slate-900 shadow-slate-950/5">
                        <div className="mb-5">
                            <div className="mb-1 font-semibold text-slate-900 dark:text-slate-200">Enterprise</div>
                            <div className="inline-flex items-baseline mb-2">
                                <span className="text-3xl font-bold text-slate-900 dark:text-slate-200">$</span>
                                <span className="text-4xl font-bold text-slate-900 dark:text-slate-200">79</span>
                                <span className="font-medium text-slate-500">/mo</span>
                            </div>
                            <div className="mb-5 text-sm text-slate-500">There are many variations available, but the majority have suffered.</div>
                            <a className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
                                Purchase Plan
                            </a>
                        </div>
                        <div className="mb-3 font-medium text-slate-900 dark:text-slate-200">Includes:</div>
                        <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-400 grow">
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Unlimited placeholder texts</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Consectetur adipiscing elit</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Excepteur sint occaecat cupidatat</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Officia deserunt mollit anim</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Predefined chunks as necessary</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-3 h-3 mr-3 fill-emerald-500 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                                </svg>
                                <span>Free from repetition</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Stepper >
        </>
    )
}

export default Pricing