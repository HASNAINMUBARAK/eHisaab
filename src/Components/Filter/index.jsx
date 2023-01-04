import { Box, makeStyles } from "@material-ui/core";

const Filter = () => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.filterMain}>
        <select
          id="categories"
          name="categories"
          className={classes.filterSelection}
        >
          <option value="category" className={classes.filterOption}>
            Filter by Category
          </option>
          <option value="Iphone" className={classes.filterOption}>
            Iphone
          </option>
          <option value="Samsung" className={classes.filterOption}>
            Samsung
          </option>
          <option value="Oppo" className={classes.filterOption}>
            Oppo
          </option>
          <option value="Infinix" className={classes.filterOption}>
            Infinix
          </option>
          <option value="Plus1" className={classes.filterOption}>
            Plus1
          </option>
        </select>
      </Box>
    </>
  );
};
export default Filter;
const useStyles = makeStyles((theme) => ({
  filterMain: {
    border: "none",
  },
  filterSelection: {
    padding: "10px",
    border: "none",
    width: "170px",
    height: "40px",
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
    borderRadius: "5px",
  },
  filterOption: {
    backgroundColor: "#fff",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    fontFamily: "Nunito, sans-serif",
    fontWeight: "bold",
  },
}));
