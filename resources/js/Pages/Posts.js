import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Container,
    FormControl,
    FormControlLabel,
    Grid,
    ListItem,
    Pagination,
    Radio,
    RadioGroup,
    Stack,
    Typography,
} from "@mui/material";

import {
    RibbonContainer,
    RightCornerLargeRibbon,
    RightCornerRibbon,
} from "react-ribbons";
import iso from "../assets/images/iso2.png";
import { InertiaLink, Link, useForm, usePage } from "@inertiajs/inertia-react";
import { PostAddSharp } from "@mui/icons-material";
import Lang from "lang.js";
import { Inertia } from "@inertiajs/inertia";
import { pink } from "@mui/material/colors";
import FilterPost from "./FilterPost";
import { AnimatePresence, motion } from "framer-motion";
const currentLang = new Lang();

const Posts = ({ posts,postsData }) => {
    //const {posts  } = usePage().props

    const [post, setData] = useState();
    const [filteredPost, setFilteredPost] = useState([]);
    const [active, setActive] = useState(0);

    /* 
    console.log(posts)
    useEffect(() => {
      console.log("Redux:",first)
    }, []) */

    useEffect(() => {
        fetchPost();
    }, []);
    console.log("Data with fetch:", filteredPost);
    const fetchPost = () => {
        setData(posts);
        setFilteredPost(posts.data);
    };

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        window.location.href = `http://127.0.0.1:8000/articles?page=${value}`;
    };

    return (
        <Box mb={20}>
            <Box>
                <Typography color="red" variant="h4" fontFamily="Inter">
                    Retrouvez notre selection de publications TI élaborées par
                    notre equipe
                </Typography>
            </Box>{" "}
            <Box justifyContent="center" width="100%"></Box>
            <Container>
                <Box
                    height="10vh"
                    justifyContent="flex-start"
                    my={5}
                    sx={{ borderRadius: 5 }}
                    alignItems="center"
                    /* bgcolor="#ed8484" */
                    display="flex"
                >
                    <Typography
                        textAlign="left"
                        fontFamily="Inter"
                        color="red"
                        variant="h6"
                        mx={2}
                    >
                        Filtrer par
                    </Typography>
                  <FilterPost post={post} setFilteredPost={setFilteredPost} active={active} setActive={setActive} />
                     {/*  <FormControl>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >
                            <ListItem sx={{ padding: 0 }}>
                                <FormControlLabel
                                    control={
                                        <Radio
                                            value="video"
                                            sx={{
                                                color: "white",
                                                "&.Mui-checked": {
                                                    color: "white",
                                                },
                                            }}
                                        />
                                    }
                                    label="Videos"
                                />
                                <FormControlLabel
                                    control={
                                        <Radio
                                            value="archive"
                                            sx={{
                                                color: "white",
                                                "&.Mui-checked": {
                                                    color: "white",
                                                },
                                            }}
                                        />
                                    }
                                    label="Archives"
                                />
                            </ListItem>
                        </RadioGroup>
                    </FormControl> */}
                </Box>
                 
                <Grid  container spacing={5}>
                    <AnimatePresence>
                    {filteredPost
                        ? filteredPost.map((item, i) => {
                              return (
                                  <Grid component={motion.div} Layout  whileHover={{
                                    scale: 1.2,
                                    transition: { duration: 0.3 }
                                  }}
                                  
                                item xs={12} sm={3} key={i}>
                                      <RibbonContainer className="custom-class">
                                          <RightCornerLargeRibbon
                                              backgroundColor="#cc0000"
                                              color="#f0f0f0"
                                              fontFamily="Arial"
                                          >
                                              1SIMPLE1
                                          </RightCornerLargeRibbon>
                                          <Card
                                              sx={{
                                                  xs: { mx: 2 },
                                                  maxWidth: 350,
                                                  minHeight: 320,
                                              }}
                                              elevation={2}
                                          >
                                              {/*   <CardMedia component="img" height={100} src={`../img/posts/${item.image}`} /> */}
                                              <img
                                                  src={`../img/posts/${item.image}`}
                                                  style={{
                                                      width: "100vh",
                                                      height: 150,
                                                  }}
                                              />

                                              <CardContent>
                                                  {currentLang.getLocale() ===
                                                  "en" ? (
                                                      <Typography
                                                          mb={1}
                                                          fontFamily="Inter"
                                                          color="red"
                                                      >
                                                          {" "}
                                                          {item.title.en}{" "}
                                                      </Typography>
                                                  ) : (
                                                      <Typography
                                                          mb={1}
                                                          fontFamily="Inter"
                                                          color="red"
                                                      >
                                                          {" "}
                                                          {item.title.fr}{" "}
                                                      </Typography>
                                                  )}

                                                  <Typography
                                                      fontFamily="Inter-Regular"
                                                      textAlign="left"
                                                  >
                                                      {currentLang.getLocale() ===
                                                      "en" ? (
                                                          <Typography
                                                              mb={1}
                                                              fontFamily="Inter-Regular"
                                                              sx={{
                                                                  display:
                                                                      "-webkit-box",
                                                                  overflow:
                                                                      "hidden",
                                                                  WebkitBoxOrient:
                                                                      "vertical",
                                                                  WebkitLineClamp: 3,
                                                              }}
                                                          >
                                                              {" "}
                                                              {
                                                                  item
                                                                      .description
                                                                      .en
                                                              }{" "}
                                                          </Typography>
                                                      ) : (
                                                          <Typography
                                                              mb={1}
                                                              fontFamily="Inter-Regular"
                                                              sx={{
                                                                  display:
                                                                      "-webkit-box",
                                                                  overflow:
                                                                      "hidden",
                                                                  WebkitBoxOrient:
                                                                      "vertical",
                                                                  WebkitLineClamp: 3,
                                                              }}
                                                          >
                                                              {" "}
                                                              {
                                                                  item
                                                                      .description
                                                                      .fr
                                                              }{" "}
                                                          </Typography>
                                                      )}
                                                  </Typography>
                                                  <Button
                                                      variant="contained"
                                                      sx={{
                                                          bgcolor: "red",
                                                          position: "relative",
                                                      }}
                                                  >
                                                      <InertiaLink
                                                          href={`/article/${item.id}`}
                                                      >
                                                          Lire plus
                                                      </InertiaLink>
                                                  </Button>
                                              </CardContent>
                                              <Box
                                                  display="flex"
                                                  justifyContent="space-between"
                                                  alignItems="center"
                                                  sx={{
                                                      height: "40px",
                                                      backgroundColor:
                                                          "#f6f6f6",
                                                  }}
                                              >
                                                  <Typography
                                                      textAlign="left"
                                                      variant="body2"
                                                      fontSize={11}
                                                      fontFamily="Inter-Regular"
                                                  >
                                                      Juin 2022
                                                  </Typography>
                                                  <Typography fontSize={11}>
                                                      Category:
                                                      {item.category.title.fr}
                                                  </Typography>

                                                  <Typography
                                                      variant="body2"
                                                      fontSize={11}
                                                      fontFamily="Inter-Regular"
                                                  >
                                                      publier par:1SIMPLE1
                                                  </Typography>
                                              </Box>
                                          </Card>{" "}
                                      </RibbonContainer>
                                  </Grid>
                              );
                          })
                        : "Loading..."}
                        </AnimatePresence>
                </Grid> 
            </Container>
            <Box
                mt={10}
                display="flex"
                alignItems="center"
                flexDirection="column"
            >
                <Pagination
                    size="large"
                    color="error"
                    count={posts.total / posts.per_page}
                    page={posts.current_page}
                    onChange={handleChange}
                />
            </Box>
        </Box>
    );
};

export default Posts;
