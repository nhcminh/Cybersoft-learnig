import theme from "../../Theme";

const styles = {
  bgDark: {
    minHeight: "100vh",
  },
  title: {
    marginTop: 20,
    fontStyle: "italic",
    // màn hình dưới 1280px
    [theme.breakpoints.down("md")]: {
      //.... style
      fontSize: theme.typography.h2.fontSize,
    },

    // màn hình dưới 960px
    [theme.breakpoints.down("sm")]: {
      //.... style
      fontSize: theme.typography.h3.fontSize,
    },

    // màn hình dưới 600px
    [theme.breakpoints.down("xs")]: {
      //.... style
      fontSize: theme.typography.h5.fontSize,
    },
  },
  btnDetail: {
    backgroundColor: theme.palette.c1.main,
    color: theme.palette.c1.contrastText,
    "&:hover": {
      backgroundColor: theme.palette.c1.dark,
    },
  },
};

export default styles;

// .bgDark{
//     background-color: red
// }
