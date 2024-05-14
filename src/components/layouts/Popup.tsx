import React, {
  cloneElement,
  ReactNode,
} from 'react';

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';

type Props = {
  children: ReactNode;
  body: ReactNode;
  title: string | ReactNode;
  size?: "sm" | "md" | "lg" | "2xl" | "3xl" | "4xl" | "full";
};

export default function Popup({ children, body, title, size }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  const triggerElement = cloneElement(children as any, {
    onClick: handleOpen,
  });

  return (
    <>
      <div className="flex flex-wrap gap-3">{triggerElement}</div>
      <Modal
        isDismissable={false}
        backdrop="opaque"
        size={size || "lg"}
        isOpen={isOpen}
        onClose={onClose}
        classNames={{
          wrapper: "z-[200]",
        }}
      >
        <ModalContent className="rounded-bl-none rounded-br-none md:rounded-md m-0">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
              <ModalBody>{body}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
