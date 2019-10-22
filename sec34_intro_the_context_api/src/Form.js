import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Paper from "@material-ui/core/Paper";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/FormStyle";
class Form extends Component {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper} margin="regular">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h6">Sign In</Typography>
          <Select value="English">
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Spanish">Spanish</MenuItem>
            <MenuItem value="Chinese">Chinese</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input name="email" type="text" id="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input name="password" type="password" id="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="Remeber Me"
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className="classes.submit"
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);
