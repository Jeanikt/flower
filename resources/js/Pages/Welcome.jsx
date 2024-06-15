import { Link, Head } from '@inertiajs/react';
import logo from '@/img/logo-verde.ico';
import logo2 from '@/img/logo-branca.ico';
import logo3 from '@/img/logo-rosa.ico';
import logo4 from '@/img/logo-fullrosa.ico';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Início" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-gradient-to-r from-rose-500 to-purple-500 selection:bg-green-700 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-200 hover:text-gray-700  focus:outline focus:outline-2 focus:rounded-sm focus:outline-purple-500"
                        >
                            Retornar
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-200 hover:text-gray-700  focus:outline focus:outline-2 focus:rounded-sm focus:outline-purple-500"
                            >
                                Entrar
                            </Link>
                        </>
                    )}
                </div>
                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center items-center">
                        <img src={logo4} alt="logo" className='w-48' />
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-gray-200 font-bold font-poppins text-2xl">FLOWERS</p>
                    </div>

                    <div className="mt-16">
                        <div className="flex justify-center">
                            <a
                                href={route('register')}
                                className="scale-100 p-6 bg-white dark:bg-gray-800/50 dark:bg-gradient-to-bl from-gray-700/50 via-transparent dark:ring-1 dark:ring-inset dark:ring-white/5 rounded-lg shadow-2xl shadow-gray-500/20 dark:shadow-none flex motion-safe:hover:scale-[1.01] transition-all duration-250 focus:outline focus:outline-2 focus:outline-rose-200"
                            >
                                <div>
                                    <div className="h-16 w-24 bg-purple-600/20 flex items-center justify-center rounded-full">
                                        <img src={logo2} alt='log-branca' className='w-14' />
                                    </div>

                                    <h2 className="mt-6 text-xl font-semibold text-gray-900 dark:text-white">
                                        Primeira vez o app <a className='text-rose-400'>Flowers</a>?
                                    </h2>
                                    <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                                        O <a className='text-rose-400'>Flowers!</a> é um app essencial para acompanhar seu ciclo menstrual. Registre datas, sintomas e humores, e receba previsões precisas e dicas de saúde. Experimente o Flowers e veja como ele pode facilitar seu dia a dia!
                                    </p>
                                </div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    className="self-center shrink-0 stroke-purple-300 w-6 h-6 mx-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-center">
                        <div className="text-center sm:text-start">&nbsp;</div>
                        <div className="text-center text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0">
                            <a target='_blank' href='www.instagram.com/jewknd' className='text-sky-100 hover:text-amber-600 font-bold text-xl'>Jeazy</a> <br />
                            <p className='font-semibold text-gray-300 text-center text-xs'>v0.1.0</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
