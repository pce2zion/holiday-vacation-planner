import { createTheme } from "@mui/material";

const theme = createTheme({
    components:{
       MuiTypography: {
        variants: [
            {
                props:{
                    variant: "body2"
                },
                style:{
                    fontSize:"9px"
                }
            },

            {
                props:{
                    variant: "h6"
                },
                style:{
                    fontSize: "16px",
                    fontWeight:"bold"
                }
            },

            {
                props:{
                    variant: "subtitle1"
                },
                style:{
                    fontSize: "13px",
                    fontWeight:"bold"
                }
            }

        ]
       }

    }
})

export default theme;