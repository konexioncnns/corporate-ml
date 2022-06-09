import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function PostCard({image,title,description,click}) {
  return (

                    <Grid mt={5} item xs={12} sm={3}>
                        <Card elevation={3} sx={{width:280, height:380}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={image}
                                alt="post image"
                                sx={{ backgroundSize:'cover'}}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    fontFamily="Inter"
                                    fontSize={18}

                                    variant="h1"
                                    component="div"
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    textAlign="center"
                                    nowrap

                                    color="gray"
                                    fontFamily="Inter-Regular"
                                >
                                  {description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small" onClick={click}>En savoir plus</Button>
                            </CardActions>
                        </Card>
                    </Grid>



  )
}

export default PostCard
