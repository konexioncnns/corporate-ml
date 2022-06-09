import React from 'react'

export const CardFormation = ({title,descrition,click}) => {
  return (
    <Box
    key={index}
    mt={2}
    mx={1}
    bgcolor="#FFFFFF"
    sx={{
        minHeight: 320,
      xs:{mx:1, width: '98%',justifyContent:'center'},
        width: 260,
     
        borderWidth: 0.1,
        borderColor: "#d3cfcf",
    }}
>
    <Typography textAlign="left">
        Formation
    </Typography>
    <Typography
        variant="h6"
        fontWeight="600"
        fontFamily="Inter"
        textAlign="left"
    >
        {title}
    </Typography>
    <Typography textAlign="left" py={1} >
     x
    </Typography>
    <Typography
        variant="body2"
        textAlign="center"

    >
        {item.desc}
    </Typography>
    <Box sx={{ marginBottom: 2 }}>
        <Button
            variant="outlined"
            sx={{
                marginTop: 5,
                width: 180,
                height: 50,
                borderRadius: 20,
                alignContent: "end",
            }}
            onClick={click}
        >
            En savoir plus
            <ArrowCircleRight />
        </Button>
    </Box>
</Box>
  )
}
