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
import { LanguageContext } from "./context/LanguageContext";

const words = {
  english: {
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    remember: "Remeber Me"
  },
  chinese: {
    email: "电子邮箱",
    password: "密码",
    signIn: "登录",
    remember: "保存信息"
  }
};
class Form extends Component {
  static contextType = LanguageContext;
  render() {
    const { classes } = this.props;
    const { language, changeLanguage } = this.context;
    const { email, password, signIn, remember } = words[language];
    return (
      <main className={classes.main}>
        <Paper className={classes.paper} margin="regular">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant="h6">{signIn}</Typography>
          <Select value={language} onChange={changeLanguage}>
            <MenuItem value="english">English</MenuItem>
            <MenuItem value="chinese">Chinese</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="email">{email}</InputLabel>
              <Input name="email" type="text" id="email" autoFocus />
            </FormControl>
            <FormControl margin="normal" fullWidth required>
              <InputLabel htmlFor="password">{password}</InputLabel>
              <Input name="password" type="password" id="password" autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={remember}
            />
            <Button
              variant="contained"
              type="submit"
              fullWidth
              color="primary"
              className="classes.submit"
            >
              {signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
export default withStyles(styles)(Form);
