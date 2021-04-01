import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";

const sidebarConfig = [
  {
    sectionName: "geral",
    itens: [
      {
        name: "DashBoard",
        icon: RiDashboardLine,
      },
      {
        name: "Usuários",
        icon: RiContactsLine,
      },
    ],
  },
  {
    sectionName: "Automação",
    itens: [
      {
        name: "Formulários",
        icon: RiInputMethodLine,
      },
      {
        name: "Automação",
        icon: RiGitMergeLine,
      },
    ],
  },
];

export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        {sidebarConfig.map((section) => (
          <Box key={section.sectionName}>
            <Text fontWeight="bold" color="gray.400" fontSize="small">
              {section.sectionName.toUpperCase()}
            </Text>
            <Stack spacing="4" mt="8" align="stretch">
              {section.itens.map((item) => (
                <Link key={item.name} display="flex" align="center">
                  <Icon as={item.icon} fontSize="20" />
                  <Text ml="4" fontWeight="medium">
                    {item.name}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
