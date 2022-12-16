import { Box, Typography } from "@mui/material"
import { FolderArrow, FolderIcon } from "components/UI/Icons"

export default function FolderText({color, text}) {
    return (
        <Box display='flex' columnGap='10px' alignItems='center' width='100%'>
            <FolderArrow />
            <FolderIcon color={color}/>
            <Typography variant='h5'>{text}</Typography>
        </Box>
    )
}