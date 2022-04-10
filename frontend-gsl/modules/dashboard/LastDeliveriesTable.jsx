import {
  Chip,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import RenderWithRoles from "../../components/RenderWithRoles";

const getLabelByStatus = (status) =>
  ({
    finished: "Finalizado",
    pending: "Pendente",
    "out-of-date": "Atrasado",
  }[status]);

const getColorByStatus = (status) =>
  ({
    finished: "success",
    pending: "warning",
    "out-of-date": "error",
  }[status]);

const DeliveryStatus = ({ status }) => (
  <Chip label={getLabelByStatus(status)} color={getColorByStatus(status)} />
);

const LastDeliveriesTable = ({ deliveries }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Cliente</TableCell>
        <TableCell>Previsão de Entrega</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Ações</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {deliveries.map((delivery) => (
        <TableRow key={delivery.id}>
          <TableCell>{delivery.id}</TableCell>
          <TableCell>{delivery.client}</TableCell>
          <TableCell>
            {new Intl.DateTimeFormat("pt-BR").format(
              new Date(delivery.deliveryPrevisionDate)
            )}
          </TableCell>
          <TableCell>
            <DeliveryStatus status={delivery.status} />
          </TableCell>
          <TableCell>
            <IconButton>
              <VisibilityIcon />
            </IconButton>
            <RenderWithRoles roles={["suporte", "administrador"]}>
              <IconButton>
                <EditIcon />
              </IconButton>
            </RenderWithRoles>
            <RenderWithRoles roles={["suporte", "administrador"]}>
              <IconButton>
                <DeleteIcon />
              </IconButton>
            </RenderWithRoles>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default LastDeliveriesTable;
