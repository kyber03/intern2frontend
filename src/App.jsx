import { useState } from 'react'
import Products from './Components/Products';
import Customer from './Components/Customer';
import Supplier from './Components/Supplier';
import Purchaseorder from './Components/Purchaseorder';
import Salesorder from './Components/Salesorder';
import Dashboard from './Components/Dashboard';
import Invoice from './Components/Invoice';

import { Route, Routes, Link, useNavigate, useParams } from "react-router-dom";
import {List,ListItem,ListItemButton,ListItemText } from '@mui/material';

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";




// import './App.css'

function App() {
   

  return (
    <div className='flex h-screen overflow-hidden'>
      
     
      <Box
        component="section"
        sx={{
          width: "20%",
          bgcolor: "#1E293B",
          color: "white",
          height: "100vh",
          paddingTop: 4,
          display: "flex",
          flexDirection: "column",
        }}
      >
    <List>
    <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
            <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/suppliers">
            <ListItemText primary="Suppliers" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/customers">
            <ListItemText primary="Customers" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/purchaseorders">
            <ListItemText primary="Purchase Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/salesorders">
            <ListItemText primary="Sales Orders" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/invoicelist">
            <ListItemText primary="Invoice" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/summary">
            <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>


          </List>
      </Box>
       
      <Box
        sx={{
          width: "80%",
          height: "100vh",
          overflowY: "auto",
          padding: 4,
          bgcolor: "#F8FAFC",
        }}
      >
            <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/customers" element={<Customer />} />
        <Route path="/suppliers" element={<Supplier />} />
        <Route path="/salesorders" element={<Salesorder />} />
        <Route path="/purchaseorders" element={<Purchaseorder />} />
        <Route path="/invoicelist" element={<Invoice />} />
        <Route path="/summary" element={<Dashboard />} />
     
      </Routes>
      </Box>
     

</div>
  );
}

export default App
