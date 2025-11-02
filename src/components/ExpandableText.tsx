import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  children: string;
};

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  const summary = expanded ? children : children.substring(0, limit) + "...";

  if (!children) return null;

  if (children.length < limit) return <Text>{children}</Text>;

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        colorScheme="yellow"
        size={"xs"}
        fontWeight={"bold"}
        marginLeft={1}
      >
        {expanded ? "Show Less" : "Read More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
