import React from "react";
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

const Products = () => {
  return (
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
          Products
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
    Add Product
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
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>SKU</TableCell>
              <TableCell align="right"sx={{ fontWeight: 'bold' }}>Category</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Price</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>In Stock</TableCell>
              <TableCell align="right" sx={{ fontWeight: 'bold' }}>Reorder F</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((item) => (
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
                  {item.productName}
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
                <TableCell align="right">{item.sku}</TableCell>
                <TableCell align="right">{item.category}</TableCell>
                <TableCell align="right">{item.unitPrice}</TableCell>
                <TableCell align="right">{item.currentStock}</TableCell>
                <TableCell align="right">{item.reorderLevel}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Products;

const products = [
  {
    id: 1,
    productName: "Wireless Mouse",
    sku: "ELEC-1001",
    category: "Electronics",
    unitPrice: 799,
    currentStock: 45,
    reorderLevel: 10,
  },
  {
    id: 2,
    productName: "Mechanical Keyboard",
    sku: "ELEC-1002",
    category: "Electronics",
    unitPrice: 2499,
    currentStock: 18,
    reorderLevel: 8,
  },
  {
    id: 3,
    productName: "Office Chair",
    sku: "FURN-2001",
    category: "Furniture",
    unitPrice: 5999,
    currentStock: 7,
    reorderLevel: 5,
  },
  {
    id: 4,
    productName: "Notebook A5",
    sku: "STAT-3001",
    category: "Stationery",
    unitPrice: 99,
    currentStock: 120,
    reorderLevel: 30,
  },
  {
    id: 5,
    productName: "Ball Pen Pack",
    sku: "STAT-3002",
    category: "Stationery",
    unitPrice: 149,
    currentStock: 75,
    reorderLevel: 20,
  },
  {
    id: 6,
    productName: "USB Flash Drive 64GB",
    sku: "ELEC-1003",
    category: "Electronics",
    unitPrice: 699,
    currentStock: 12,
    reorderLevel: 15,
  },
  {
    id: 7,
    productName: "Water Bottle",
    sku: "HOME-4001",
    category: "Home",
    unitPrice: 349,
    currentStock: 50,
    reorderLevel: 12,
  },
  {
    id: 8,
    productName: "Desk Lamp",
    sku: "HOME-4002",
    category: "Home",
    unitPrice: 1299,
    currentStock: 9,
    reorderLevel: 10,
  },
  {
    id: 9,
    productName: "Printer Paper Ream",
    sku: "STAT-3003",
    category: "Stationery",
    unitPrice: 299,
    currentStock: 60,
    reorderLevel: 25,
  },
  {
    id: 10,
    productName: "Laptop Stand",
    sku: "ELEC-1004",
    category: "Electronics",
    unitPrice: 1799,
    currentStock: 14,
    reorderLevel: 6,
  },
];
