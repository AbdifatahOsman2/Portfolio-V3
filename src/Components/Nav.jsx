import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { ListItem } from "@mui/material";
import { useEffect } from "react";
import PopUp from "../Components/PopUp";
import Aos from "aos";

const Nav = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    Aos.init({
      duration: 3000,
      offset: 500,
    });
  }, []);

  return (
    <AppBar
      position="absolute"
      style={{
        background: "transparent",
        boxShadow: "none",
        marginTop: "15px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters data-aos="slide-down" data-aos-delay="300">
          <Typography
            id="logo-text"
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            Abdifatah Osman
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
                style={{ display: "flex" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  <Button style={{ color: "#000" }} href='https://pdfhost.io/v/qQ~riZq1w_res2'>
                  <ListItem>Resume</ListItem>
                  </Button>
                </Typography>
              </MenuItem>
              <MenuItem
                style={{ display: "flex" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  <Button style={{ color: "#000" }} href="#projects">
                    <ListItem>Projects</ListItem>
                  </Button>
                </Typography>
              </MenuItem>
              <MenuItem
                style={{ display: "flex" }}
                onClick={handleCloseNavMenu}
              >
                <Typography textAlign="center">
                  <Button style={{ color: "#000" }} href="#about-me">
                    <ListItem>About</ListItem>
                  </Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            id="logo-text"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Abdifatah Osman
          </Typography>
          <Box
            style={{}}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            <PopUp />
            <Button
              href="#projects"
              style={{ color: "white", marginLeft: "15px" }}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Projects
            </Button>
            <Button
              style={{ color: "white", marginLeft: "15px" }}
              onClick={handleCloseNavMenu}
              href="#about-me"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              About
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Nav;
