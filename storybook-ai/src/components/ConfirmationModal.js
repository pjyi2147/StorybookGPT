import { Button, Modal } from 'flowbite-react'
import { ModalBody } from 'flowbite-react/lib/esm/components/Modal/ModalBody'
import { ModalHeader } from 'flowbite-react/lib/esm/components/Modal/ModalHeader'
import { HiOutlineExclamationCircle } from 'react-icons/hi'

const ConfirmationModal = ({ show, onClose, text, method }) => {
  const content = (
    <>
      <Modal show={show} size='md' popup onClose={onClose} dismissible className='bg-white p-5'>
        <ModalHeader />
        <ModalBody>
          <div className='text-center'>
            <HiOutlineExclamationCircle className='mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200' />
            <h3 className='mb-5 text-lg font-normal'>
              {text}
            </h3>
            <div className='flex justify-center gap-4'>
              <Button className='!bg-red-500 hover:brightness-75' onClick={method}>
                Confirm
              </Button>
              <Button className='!bg-gray-500 hover:brightness-75' onClick={onClose}>
                Cancel
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </>
  )
  return content
}

export default ConfirmationModal