import React from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function MdodalCloseButton() {
  return null;
}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button onClick={onOpen}>모달 열기</Button>
      <Modal
        closeOnOverlayClick={false}
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        motionPreset="slideInTop"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>모달의 제목</ModalHeader>
          <MdodalCloseButton />
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            accusantium, aspernatur aut blanditiis consequatur dolorem eos, et
            explicabo illum itaque maxime nesciunt non nostrum odio pariatur
            placeat soluta tempora unde?
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={onClose}>
              버튼닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default App;
