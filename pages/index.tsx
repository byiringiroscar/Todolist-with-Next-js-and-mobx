import Image from 'next/image'
import { Inter } from 'next/font/google'
import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import TopBar from './components/TopBar';
import TodoAdd from './components/TodoAdd';
import TodoList from './components/TodoList';


export default function Home() {
  return (
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
        <TopBar />
        <TodoList />
        <TodoAdd />
      </Box>
    </ChakraProvider>
  );
}
