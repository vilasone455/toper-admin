import { FC, useEffect, useState } from "react";
import { createPortal } from 'react-dom'
import { Transition , Backdrop } from '@windmill/react-ui'
import FocusLock from 'react-focus-lock'
import React from "react";

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    onClose: () => void
    isOpen: boolean
    title : string
}
  
  const Popup = React.forwardRef<HTMLDivElement, ModalProps>(function Modal(props, ref) {
    const { children, onClose, isOpen, title , ...other } = props

  
    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Esc' || e.key === 'Escape') {
        onClose()
      }
    }
  
    useEffect(() => {
      document.addEventListener('keydown', handleEsc, { capture: true })
      return () => {
        document.removeEventListener('keydown', handleEsc)
      }
    })
  
    const [mounted, setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    const modalComponent = (
      <Transition show={isOpen}>
        <>
          <Transition
            enter="transition ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Backdrop onClick={onClose}>
              <Transition
                enter="transition ease-out duration-150"
                enterFrom="opacity-0 transform translate-y-1/2"
                enterTo="opacity-100"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0  transform translate-y-1/2"
              >
                <div
                  className="w-full px-6 py-4 overflow-y-auto hmodal bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl"
                  role="dialog"
                  onClick={(e) => e.stopPropagation()}
                  ref={ref}
                  {...other}
                >
                  <FocusLock returnFocus>
                    <header className="flex justify-between">
                        <div className="text-lg font-semibold text-gray-700 dark:text-gray-300">{title ? title : "My modal"}</div>
                      <button
                        className="inline-flex items-center justify-center w-6 h-6 text-gray-400 transition-colors duration-150 rounded dark:hover:text-gray-200 hover: hover:text-gray-700"
                        aria-label="close"
                        onClick={onClose}
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          role="img"
                          aria-hidden="true"
                        >
                          <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </header>
                    {children}
                  </FocusLock>
                </div>
              </Transition>
            </Backdrop>
          </Transition>
        </>
      </Transition>
    )
  
    return mounted ? createPortal(modalComponent, document.body) : null
  })
  
  export default Popup