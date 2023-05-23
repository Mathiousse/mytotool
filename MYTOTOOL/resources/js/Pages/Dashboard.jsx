import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Tasks from '@/Components/Tasks';
import Form from '@/Components/Form';
import { usePage } from '@inertiajs/react'
import TasksCompleted from '@/Components/TasksCompleted';

export default function Dashboard({ auth, tasks }) {
    const { success } = usePage().props
    success ? console.log(success) : ""
    const closeToast = () => {
        const targetEl = document.querySelector('#toast-target');

        const triggerEl = document.querySelector('#toast-trigger');

        const options = {
            transition: 'transition-opacity',
            duration: 1000,
            timing: 'ease-out',

            onHide: (context, targetEl) => {
                console.log('element has been dismissed')
            }
        };

        const dismiss = new Dismiss(targetEl, triggerEl, options);

        dismiss.hide()
    }
    return (

        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">MYTOTOOL</h2>}
        >
            <Head title="MYTOTOOL" />
            <div className=" bg-gradient-to-br from-pinkbg to-pinkbg2 py-12 w-90 m-auto mt-10 mb-10 rounded-2xl shadow-based">
                <h2 className='font-sans text-white font-extrabold text-4xl text-center mb-10'>Vos tâches</h2>
                <div className="ml-10 p-6 mr-10 bg-white border-b border-gray-200 font-sans rounded-2xl">
                    <div className="form">
                        <Form />
                    </div>
                    <Tasks tasks={tasks} />
                </div>
                <h2 className='font-sans text-white font-extrabold text-4xl text-center mt-10'>Vos tâches terminées</h2>
                <div className="mt-10 ml-10 p-6 mr-10 bg-white border-b border-gray-200 font-sans rounded-2xl">
                    <TasksCompleted tasks={tasks} />
                </div>

            </div>

            {
                success ? (<div id="toast-target"
                    className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800 fixed bottom-5 right-5"
                    role="alert">
                    <div
                        className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"></path>
                        </svg>
                        <span className="sr-only">Check icon</span>
                    </div>
                    <div className="ml-3 text-sm font-normal"> lol</div>
                    <button type="button" onClick={closeToast} id="toast-trigger"
                        className="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                        aria-label="Close">
                        <span className="sr-only">Close</span>
                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"></path>
                        </svg>
                    </button>
                </div>) : (<></>)
            }


        </AuthenticatedLayout>
    );
}
