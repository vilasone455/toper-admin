import React, { FC, useState } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import Popup from "./Popup";

export interface ModalProp {
  title?: string
  isOpen: boolean,
  saveTitle ?: string
  closeTitle ?: string
  onClose: () => void,
  onAccept?: () => void
  hideFooter ?: boolean
}

export interface BaseModalProp<T> extends ModalProp {
  data: T
  onSave: (data: T) => void
}

export const BaseModal: FC<ModalProp> = ({ isOpen, onClose, onAccept, children, title , saveTitle , closeTitle , hideFooter }) => {

    const onAcceptTrigger = () => {
        if(onAccept) onAccept()
    }

  return (
    <Popup isOpen={isOpen} onClose={() => onClose()} title={title || ""}>

      <ModalBody className="mt-4 mb-2">
        {children}
      </ModalBody>
      {hideFooter ? <></> : <ModalFooter>
        <Button className="w-full sm:w-auto" layout="outline" onClick={() => onClose()}>
          {closeTitle ? closeTitle : "Close"}
        </Button>
        <Button className="w-full sm:w-auto" onClick={() => onAcceptTrigger()}>{saveTitle ? saveTitle : "Save"}</Button>
      </ModalFooter>}
      
    </Popup>

  )
}