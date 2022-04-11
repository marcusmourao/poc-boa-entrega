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
import { deleteClientById } from "./clientService";

const getLabelByStatus = (deleted) => (deleted ? "Inativo" : "Ativo");

const getColorByStatus = (deleted) => (deleted ? "error" : "success");

const ClientStatus = ({ deleted }) => (
  <Chip label={getLabelByStatus(deleted)} color={getColorByStatus(deleted)} />
);

const deleteClient = (id) => {
  if (confirm("Deseja mesmo deletar este cliente?")) {
    deleteClientById(id).then(() => window.location.reload());
  }
};

const editClient = (id) => (window.location.href = `clientes/editar/${id}`);

const ClientsTable = ({ clients }) => (
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Id</TableCell>
        <TableCell>Nome</TableCell>
        <TableCell>Telefone</TableCell>
        <TableCell>E-mail</TableCell>
        <TableCell>Status</TableCell>
        <TableCell>Ações</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {clients.map((client) => (
        <TableRow key={client.id}>
          <TableCell>{client.id}</TableCell>
          <TableCell>{client.name}</TableCell>
          <TableCell>{client.phone}</TableCell>
          <TableCell>{client.email}</TableCell>
          <TableCell>
            <ClientStatus deleted={client.deleted} />
          </TableCell>
          <TableCell>
            <IconButton>
              <VisibilityIcon />
            </IconButton>
            <RenderWithRoles roles={["suporte", "administrador"]}>
              <IconButton>
                <EditIcon onClick={() => editClient(client.id)} />
              </IconButton>
            </RenderWithRoles>
            <RenderWithRoles roles={["suporte", "administrador"]}>
              <IconButton onClick={() => deleteClient(client.id)}>
                <DeleteIcon />
              </IconButton>
            </RenderWithRoles>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default ClientsTable;
