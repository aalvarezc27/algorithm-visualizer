import Select from "@mui/material/Select";
import { fontFamily } from "@mui/system";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";

export default function SelectAlgorithm() {
  const [algorithmType, setAlgorithmType] = React.useState(1);

  const handleChange = (event) => {
    setAlgorithmType(event.target.value);
  };

  return (
    <Select
      sx={{
        backgroundColor: "hsl(210 100% 12%)",
        color: "hsl(180 100% 90%)",
        height:'40px',
        borderRadius:'0px'


      }}
      value={algorithmType}
      onChange={handleChange}
    >
      <MenuItem value={1}>Bubble Sort</MenuItem>
      <MenuItem value={2}>Merge Sort</MenuItem>
      <MenuItem value={3}>Quick Sort</MenuItem>
    </Select>
  );
}
