import TextField, { TextFieldProps } from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

type Props = Pick<
  TextFieldProps,
  "sx" | "onClick" | "onFocus" | "onChange" | "value"
>;

const SearchHeaderInput = (props: Props) => {
  return (
    <TextField
      placeholder="Pesquise aqui"
      color="secondary"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

export { SearchHeaderInput };
