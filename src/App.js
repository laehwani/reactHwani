import React from "react";
import { Button, useToast } from "@chakra-ui/react";

function App() {
  const toast = useToast();
  return (
    <div>
      <Button
        onClick={() =>
          toast({
            title: "저장 완료",
            description: "게시물이 저장되었습니다.",
            duration: 2000,
            position: "top-right",
            isClosable: true,
            status: "error",
          })
        }
      >
        토스트 띄우기
      </Button>
    </div>
  );
}

export default App;
