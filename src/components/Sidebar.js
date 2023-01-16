import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, useDisclosure } from "@chakra-ui/react"
import React from "react"

export default function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <Box>
      <Box ref={btnRef} onClick={onOpen}>
        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.19119 3.15595C7.30475 2.94802 6.38222 2.94802 5.49578 3.15595C4.33479 3.42828 3.42828 4.33479 3.15595 5.49578C2.94802 6.38222 2.94802 7.30475 3.15595 8.19119C3.42828 9.35218 4.33479 10.2587 5.49578 10.531C6.38222 10.739 7.30475 10.739 8.19119 10.531C9.35218 10.2587 10.2587 9.35218 10.531 8.19119C10.739 7.30475 10.739 6.38222 10.531 5.49578C10.2587 4.33479 9.35218 3.42828 8.19119 3.15595Z" fill="#000" />
          <path d="M8.19119 13.469C7.30475 13.261 6.38222 13.261 5.49578 13.469C4.33479 13.7413 3.42828 14.6478 3.15595 15.8088C2.94802 16.6952 2.94802 17.6178 3.15595 18.5042C3.42828 19.6652 4.33479 20.5717 5.49578 20.8441C6.38222 21.052 7.30475 21.052 8.19119 20.8441C9.35218 20.5717 10.2587 19.6652 10.531 18.5042C10.739 17.6178 10.739 16.6952 10.531 15.8088C10.2587 14.6478 9.35218 13.7413 8.19119 13.469Z" fill="#000" />
          <path d="M18.5042 3.15595C17.6178 2.94802 16.6952 2.94802 15.8088 3.15595C14.6478 3.42828 13.7413 4.33479 13.469 5.49578C13.261 6.38222 13.261 7.30475 13.469 8.19119C13.7413 9.35218 14.6478 10.2587 15.8088 10.531C16.6952 10.739 17.6178 10.739 18.5042 10.531C19.6652 10.2587 20.5717 9.35218 20.8441 8.19119C21.052 7.30475 21.052 6.38222 20.8441 5.49578C20.5717 4.33479 19.6652 3.42828 18.5042 3.15595Z" fill="#000" />
          <path d="M18.5042 13.469C17.6178 13.261 16.6952 13.261 15.8088 13.469C14.6478 13.7413 13.7413 14.6478 13.469 15.8088C13.261 16.6952 13.261 17.6178 13.469 18.5042C13.7413 19.6652 14.6478 20.5717 15.8088 20.8441C16.6952 21.052 17.6178 21.052 18.5042 20.8441C19.6652 20.5717 20.5717 19.6652 20.8441 18.5042C21.052 17.6178 21.052 16.6952 20.8441 15.8088C20.5717 14.6478 19.6652 13.7413 18.5042 13.469Z" fill="#000" />
        </svg>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}