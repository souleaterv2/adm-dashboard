import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  name: string;
  email: string;
  showProfileData?: boolean;
}

export default function Profile({
  email,
  name,
  showProfileData = true,
}: ProfileProps) {
  return (

    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{name}</Text>
          <Text color="gray.300">{email}</Text>
        </Box>
      )}

      <Avatar size="md" name="Rodrigo Silva" />
      
    </Flex>
  );
}
