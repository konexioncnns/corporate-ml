import { Box, Typography } from "@mui/material";

/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
    return (
        <>
            {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
            <Box bgcolor="#F1F5FD" mt={-8}>
                <div className="max-w-7xl mx-auto px-4 py-16 text-center sm:px-6 sm:py-24 lg:px-8 lg:py-15">
                    <Typography color="error" fontSize={36} variant="h3" fontFamily="Inter">
                        1SIMPLE1 TOUJOURS PLUS LOIN
                    </Typography>
                    <p className="mt-2 text-lg font-medium text-black text-opacity-50">
                    Vous avez des questions concernant notre gamme de formations ou de services ?
                    </p>
                    <p className="mt-2 text-lg font-medium text-black text-opacity-50">Pour toute question ou demande d'information, vous pouvez nous appeler ou nous contacter avec le formulaire ci-dessous.</p>
                    </div>
            </Box>
        </>
    );
}
