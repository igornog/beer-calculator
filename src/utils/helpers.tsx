import { TooltipProps, Tooltip, tooltipClasses } from "@mui/material"
import styled from "styled-components"

export const convertHexToRGBA = (hexCode: string, opacity = 1) => {
  let hex = hexCode.replace('#', '')

  if (hex.length === 3) {
    hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  if (opacity > 1 && opacity <= 100) {
    opacity = opacity / 100
  }

  return `rgba(${r},${g},${b},${opacity})`
}

export const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const calculateMyBeer = (invitees: number, duration: number, size: string, level: number) => {
  let mlPerPerson = 355

  return Math.floor(invitees * mlPerPerson * duration / parseInt(size) * (level))
}