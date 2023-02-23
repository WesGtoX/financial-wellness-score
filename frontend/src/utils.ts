import { IResultBarLevelProps } from "./types"

export const resultBarLevelBackground = (e: IResultBarLevelProps) => {
  if (e.currentStatus === "healthy") {
    return "#04C761"
  } else if (e.currentStatus === "medium") {
    return ["medium", "low"].includes(e.status) ? "#FFC032" : "#E9EEF2"
  } else if (e.currentStatus === "low") {
    return e.status === "low" ? "#D32A36" : "#E9EEF2"
  }

  return "#E9EEF2"
}
