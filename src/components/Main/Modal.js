import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function Modal({ isOpen, closeModal, project }) {
  const OpenLinkIcon = () => (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6 ml-2'
      fill='none'
      viewBox='0 0 24 24'
      stroke='#38a7ca'>
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
      />
    </svg>
  );
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-25'
          onClose={closeModal}>
          <div className='min-h-screen text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'>
              <Dialog.Overlay className='fixed inset-0' />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className='inline-block h-screen align-middle'
              aria-hidden='true'>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'>
              <div className='inline-block w-full max-w-4xl p-6 my-8 overflow-auto text-left align-middle transition-all transform bg-white shadow-classic rounded-2xl'>
                <div className='flex flex-col md:flex-row items-center'>
                  {project.logo && (
                    <img
                      src={project.logo}
                      className='project--logo my-4 md:mr-8'
                      alt=''
                    />
                  )}
                  <div>
                    <Dialog.Title
                      as='h3'
                      className='text-2xl font-medium leading-6 text-gray-900 my-2'>
                      {project.linkToProject ? (
                        <a
                          href={project.linkToProject}
                          className='inline-flex items-center'
                          target='_blank'
                          rel='noreferrer'>
                          {project.name}
                          <OpenLinkIcon />
                        </a>
                      ) : (
                        project.name
                      )}
                    </Dialog.Title>
                    <p className='text-lg font-body text-gray-500'>
                      {project.description}
                    </p>
                  </div>
                </div>
                <div id='project--description' className='mt-2'>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: project.longDescription,
                    }}
                    className='text-lg font-body text-gray-500'></div>
                  {project.linkToMedium && (
                    <p className='text-lg font-body text-gray-500'>
                      For a more extensive description of this project, you can
                      find a Medium article{' '}
                      <a
                        href={project.linkToMedium ?? 'http://medium.com/'}
                        target='_blank'
                        rel='noreferrer'
                        className='underline hover:cursor-pointer'>
                        here
                      </a>
                      .
                    </p>
                  )}
                </div>

                <div className='mt-4'>
                  <button
                    type='button'
                    className='inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500'
                    onClick={closeModal}>
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
