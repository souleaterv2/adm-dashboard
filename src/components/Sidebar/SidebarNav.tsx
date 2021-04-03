import Link from "next/link";

import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

import { Box, Stack, Text, Link as ChakraLink, Icon, useMenuItem } from "@chakra-ui/react";

const sidebarConfig = [
  {
    sectionName: "geral",
    itens: [
      {
        name: "DashBoard",
        icon: RiDashboardLine,
        link: "dashboard",
      },
      {
        name: "Usuarios",
        icon: RiContactsLine,
        link: "users",
      },
    ],
  },
  {
    sectionName: "Automação",
    itens: [
      {
        name: "Formulários",
        icon: RiInputMethodLine,
        link: "form",

      },
      {
        name: "Automação",
        icon: RiGitMergeLine,
        link: "aut",
      },
    ],
  },
];

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      {sidebarConfig.map((section) => (
        <Box key={section.sectionName}>
          <Text fontWeight="bold" color="gray.400" fontSize="small">
            {section.sectionName.toUpperCase()}
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            {section.itens.map((item) => (
              <Link href={`/${item.link}`} passHref>
                <ChakraLink key={item.name} display="flex" align="center">
                  <Icon as={item.icon} fontSize="20" />
                  <Text ml="4" fontWeight="medium">
                    {item.name}
                  </Text>
                </ChakraLink>
              </Link>
            ))}
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
