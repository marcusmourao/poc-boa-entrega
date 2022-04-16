import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

const DeliveryItems = ({ items, style }) => (
  <Table style={style}>
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Nome</TableCell>
        <TableCell>Quantidade</TableCell>
        <TableCell>Valor unitário</TableCell>
        <TableCell>Valor total</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {items.map((item) => (
        <TableRow key={item.id}>
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.quantity}</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.value)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(item.value * item.quantity)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default DeliveryItems;
