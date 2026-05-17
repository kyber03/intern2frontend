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

const Supplier = () => {
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
          Suppliers
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
    Add Supplier
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

              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Email</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Phone</TableCell>
              <TableCell align="right"sx={{ fontWeight: 'bold' }}>Address</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>GSTIN</TableCell>
      
            </TableRow>
          </TableHead>

          <TableBody>
            {suppliers.map((item) => (
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

export default Supplier

const suppliers = [
    {
      "name": "ABC Wholesale Pvt Ltd",
      "email": "contact@abcwholesale.com",
      "phone": "9001122334",
      "address": "Industrial Area, Hyderabad",
      "gstin": "36AAECS7890L1Z2"
    },
    {
      "name": "Global Distributors",
      "email": "sales@globaldist.com",
      "phone": "9556677889",
      "address": "Sector 18, Noida",
      "gstin": "09LMNOP4321Q1Z7"
    },
    {
      "name": "Fresh Supply Co",
      "email": "support@freshsupply.com",
      "phone": "9445566778",
      "address": "Kochi Market Road, Kerala",
      "gstin": ""
    }
  ]


