import React from 'react'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import { Route } from "react-router-dom";

const Customer = () => {
  return (
    <div>

<div>
      <Box
        component="section"
        sx={{
          bgcolor: "#bc7FFF",
          height: "100 xl",
          p: 2,
          textAlign: "center",
          margin: 10,
          borderRadius: "50px",
        }}
      >
        <Typography variant="h3" component="h2">
          Customers
        </Typography>
      </Box>

      <Box
  sx={{
    display: 'flex',
    justifyContent: 'flex-end',
    mr: 10,
    mb: 2
  }}
>

  
   <Button variant="contained" size="large">
    Add Customer
  </Button>
  


  
</Box>

     
<TableContainer component={Paper}  sx={{
    width: '90%',
    margin: '30px auto',
    borderRadius: 3
  }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow
              className="MuiTableRow-hover"
              sx={{ bgcolor: "#f5f5f5", border: "2 px solid black" }}
            >
              <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Operations</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Phone</TableCell>
              <TableCell align="right"sx={{ fontWeight: 'bold' }}>Address</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>GSTIN</TableCell>
      
            </TableRow>
          </TableHead>

          <TableBody>
            {customers.map((item) => (
              <TableRow
                key={item.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{ display: "flex", gap: 4, p: 4 }}
                  align="center"
                  component="th"
                  scope="row"
                >
                  {item.name}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Box>
                    <IconButton color="success">
                      <EditIcon />
                    </IconButton>

                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                    <IconButton color="success">
                      <InfoIcon />
                    </IconButton>
                  </Box>
                </TableCell>
       
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.phone}</TableCell>
                <TableCell align="right">{item.address}</TableCell>
                <TableCell align="right">{item.gstin}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
      
    </div>
  )
}

export default Customer

const customers = [
    {
      "name": "Rahul Traders",
      "email": "rahultraders@gmail.com",
      "phone": "9876543210",
      "address": "12 Anna Nagar, Chennai",
      "gstin": "33ABCDE1234F1Z5"
    },
    {
      "name": "Priya Stores",
      "email": "priyastores@gmail.com",
      "phone": "9123456780",
      "address": "45 MG Road, Bengaluru",
      "gstin": "29PQRSX5678K2Z1"
    },
    {
      "name": "Arun Enterprises",
      "email": "arunenterprises@gmail.com",
      "phone": "9988776655",
      "address": "78 T Nagar, Chennai",
      "gstin": ""
    }
  ]
