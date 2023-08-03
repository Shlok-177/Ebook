import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { List, ListItem, ListItemText, ListItemIcon } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
};

const initialValues = {
  email: "",
  pass: "",
};

const loginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  pass: Yup.string().min(6).required("Pleaase enter password with min 6 char"),
});
const Login = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values) => {
        console.log("form vals", values);
        alert("sucessfull");
      },
    });

  return (
    <Container maxWidth="lg" sx={{margin:"1.5rem auto"}} style={{fontFamily: "Work Sans"}}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          variant="h4"
          gutterBottom
          style={{ fontWeight: 600 , fontFamily: "Work Sans"}}
          textAlign="center"
        >
         Login or Create An Account
        </Typography>

        <Grid container spacing={5} style={{fontFamily: "Work Sans"}}>
          <Grid item md={6} xs={12}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 , fontFamily: "Work Sans" }}>
              New Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey" style={{fontFamily: "Work Sans"}}>
              Registration is free and easy
            </Typography>
            <List >
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText>Faster Checkout</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" }} />
                </ListItemIcon>
                <ListItemText style={{fontFamily: "Work Sans"}}>Save multiple Shipping Addresses</ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon sx={{ width: "10px" }}>
                  <CircleIcon sx={{ color: "black", fontSize: "small" , fontFamily: "Work Sans" }} />
                </ListItemIcon>
                <ListItemText>View and track orers and more</ListItemText>
              </ListItem>
            </List>
            <Link to="/register" style={linkStyle}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#1976d2",
                  fontWeight: "600",
                  fontFamily: "Work Sans"
                }}
              >
                Create an Account
              </Button>
            </Link>
          </Grid>
          <Grid item md={6} xs={12} style={{fontFamily: "Work Sans"}}>
            <Typography variant="h6" gutterBottom style={{ fontWeight: 600 , fontFamily: "Work Sans" }}>
              Registered Customers
            </Typography>
            <hr />
            <Typography variant="body1" gutterBottom color="grey" style={{fontFamily: "Work Sans"}}>
              If you have an account with us please log in
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom style={{fontFamily: "Work Sans"}}>
                    Email Address *
                  </Typography>
                  <TextField
                    type="email"
                    size="small"
                    fullWidth
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                    error={errors.email && touched.email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1" gutterBottom style={{fontFamily: "Work Sans"}}>
                    Password *
                  </Typography>
                  <TextField
                    type="password"
                    size="small"
                    fullWidth
                    name="pass"
                    value={values.pass}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={
                      errors.pass && touched.pass ? errors.pass : null
                    }
                    error={errors.pass && touched.pass}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    sx={{
                      textTransform: "capitalize",
                      backgroundColor: "#1976d2",
                      fontWeight: "600",
                      fontFamily: "Work Sans"
                    }}
                  >
                    Login
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
