import React from "react"
import {Slider, SliderProps} from '@mui/material'
import Box from '@mui/material/Box';



const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}
export default SuperRange

