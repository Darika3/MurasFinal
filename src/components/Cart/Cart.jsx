import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCart } from "../../context/CartContextProvider";
import { useEffect } from "react";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const { getCart, cart, changeProductCount, deleteCartProduct } = useCart();
  // console.log(cart);
  useEffect(() => {
    getCart();
  }, []);

  // const cartCleaner= ()=>{
  //     localStorage.removeItem("cart");
  //     getCart();
  // }

  return (
    <TableContainer
      sx={{ width: "90%", margin: "20px auto" }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow
            sx={{
              dispaly: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
              textAlign: "center",
            }}
          >
            <StyledTableCell sx={{ textAlign: "center" }}>
              Picture
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "center" }} align="right">
              Name
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "center" }} align="right">
              Category
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "center" }} align="right">
              Description
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "center" }} align="right">
              Price
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "center" }} align="right">
              SubPrice
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "center" }} align="right">
              -
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart?.products.map((row) => (
            <StyledTableRow key={row.item.id}>
              <StyledTableCell component="th" scope="row">
                <img src={row.item.picture} width="70" height="70" alt="" />
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.name}</StyledTableCell>
              <StyledTableCell align="right">
                {row.item.category}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.item.description}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item.price}</StyledTableCell>
              <StyledTableCell align="right">
                <input
                  type="number"
                  onChange={(e) =>
                    changeProductCount(e.target.value, row.item.id)
                  }
                  value={row.count}
                />
              </StyledTableCell>
              <button onClick={() => deleteCartProduct(row.item.id)}>
                DELETE
              </button>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
