import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// icons
import { 
  FaShopify, 
  FaWordpress,
  FaReact,
  FaNodeJs
} from 'react-icons/fa';
import { SiJavascript, SiPython } from 'react-icons/si';
import { IoMdApps } from 'react-icons/io';
import Section from "./Section";
import SectionHeader from "./SectionHeader";
// import githubApi from '../data/api/github';

function ClientsSection(props) {

  // const github = githubApi();
  // console.log({ github });
  const items = [
    {
      name: "React",
      image: <FaReact size="64px" />,
      width: "150px",
    },
    {
      name: "JavaScript",
      image: <SiJavascript size="64px" />,
      width: "135px",
    },
    {
      name: "Node.js",
      image: <FaNodeJs size="64px" />,
      width: "90px",
    },
    {
      name: "Shopify",
      image: <FaShopify size="64px" />,
      width: "135px",
    },
    {
      name: "Wordpress",
      image: <FaWordpress size="64px" />,
      width: "135px",
    },
  ];

  return (
    <Section
      bgColor={props.bgColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <Box textAlign="center">
          <SectionHeader
            title={props.title}
            subtitle={props.subtitle}
            size={4}
            textAlign="center"
          />
          <Grid container justifyContent="space-between">
            {items.map((item, index) => (
              <Grid item xs={12} md="auto" key={index}>
                <div style={{ margin:'20px' }}>
                  {item.image}
                </div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Section>
  );
}

export default ClientsSection;
