import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { FormControlLabel, Switch } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import {
  codeShareAutocompleteSelector,
  codeShareFontSizeSelector,
  codeShareLanguageSelector,
} from "../../../../store/selectors";
import {
  setCodeShareAutocompleteThunk,
  setCodeShareFontSizeThunk,
  setCodeShareLanguageThunk,
} from "../../../../store/thunks";
import { useDevLanguages } from "../../../../hooks/useDevLanguages";
import { IsUnlockedOnly } from "../../../IsUnlockedOnly";

const FONT_SIZES = [12, 14, 16, 18, 20, 22, 24];

export function EditorSettingsMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const language = useSelector(codeShareLanguageSelector);
  const fontSize = useSelector(codeShareFontSizeSelector);
  const autocomplete = useSelector(codeShareAutocompleteSelector);
  const languages = useDevLanguages();

  const handleClick = (e: any) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSelectLanguage = (e: any) => {
    if (language !== e.target.value) {
      dispatch(setCodeShareLanguageThunk(e.target.value));
      handleClose();
    }
  };

  const onChangeFontSize = (e: any) => {
    if (fontSize !== e.target.value) {
      dispatch(setCodeShareFontSizeThunk(e.target.value));
      handleClose();
    }
  };

  const onChangeAutocomplete = (e: any) => {
    if (autocomplete !== e.target.checked) {
      dispatch(setCodeShareAutocompleteThunk(e.target.checked));
      handleClose();
    }
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <span className={classes.langAndFontSize}>
        {language},{fontSize}px
      </span>
      <IsUnlockedOnly>
        <IconButton size="small" onClick={handleClick}>
          <Icon className={classes.settingsIcon}>settings</Icon>
        </IconButton>
      </IsUnlockedOnly>
      <Menu
        className={classes.menu}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>
          <TextField
            fullWidth
            label="Language"
            value={language}
            select
            onChange={onSelectLanguage}
          >
            {languages.map((lang) => (
              <MenuItem key={lang} value={lang}>
                {lang}
              </MenuItem>
            ))}
          </TextField>
        </MenuItem>
        <MenuItem>
          <TextField
            fullWidth
            label="Font Size"
            value={fontSize}
            select
            onChange={onChangeFontSize}
          >
            {FONT_SIZES.map((size) => (
              <MenuItem key={size} value={size}>
                {size}px
              </MenuItem>
            ))}
          </TextField>
        </MenuItem>
        {/*<MenuItem>*/}
        {/*  <FormControlLabel*/}
        {/*      control={*/}
        {/*        <Switch*/}
        {/*            checked={autocomplete}*/}
        {/*            onChange={onChangeAutocomplete}*/}
        {/*        />*/}
        {/*      }*/}
        {/*      label="Autocomplete"*/}
        {/*  />*/}
        {/*</MenuItem>*/}
      </Menu>
    </div>
  );
}
