import { Box, Card, Flex, Heading, Image, Link } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <>
      <h1 className="proj-title" style={{ fontSize: "3rem", marginTop: "5px" }}>
        Github Status
      </h1>
      <Box>
        <Box
          width={["330px", "450px", "870px"]}
          margin="auto"
          marginBottom="30px"
          // border={"1px solid black"}
        >
          <Card p={"15px"}>
            <GitHubCalendar
              username="mdfaizan973"
              className="react-activity-calendar"
            />
          </Card>
        </Box>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          margin={"1rem"}
          align={"center"}
          justify={"center"}
          gap="7"
        >
          <Box>
            <Link href="https://github.com/mdfaizan973" />
            <Image
              id="github-streak-stats"
              width="450px"
              src="https://github-readme-streak-stats.herokuapp.com/?user=mdfaizan973&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
            />
          </Box>
          <Box>
            <Link href="https://github.com/mdfaizan973" />
            <Image
              id="github-top-langs"
              width="450px"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=mdfaizan973&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
            />
          </Box>
          <Box>
            <Link href="https://github.com/mdfaizan973" />
            <Image
              width="450px"
              id="github-stats-card"
              src="https://github-readme-stats.vercel.app/api?username=mdfaizan973&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Github;
