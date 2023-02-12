import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { InputLabel } from "@mui/material";
import { makeStyles } from "@mui/styles";

import React from "react";

type Props = {
  options: String[];
};

const SelectInput = ({ options }: Props) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
      <Select
        labelId="demo-controlled-open-select-label"
        id="demo-controlled-open-select"
        sx={{
          backgroundColor: "red",
          "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            fontSize: "5em",
            color: "yellow",
          },
        }}
        //   open={open}
        //   onClose={handleClose}
        //   onOpen={handleOpen}
        //   value={age}
        label="Age"
        //   onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};

export default SelectInput;
