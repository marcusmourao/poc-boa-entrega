import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function MonthlyRevenue({ monthlyRevenue }) {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Receita Líquida no mês
      </Typography>
      <Typography component="p" variant="h4">
        {new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(monthlyRevenue.value)}
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {new Intl.DateTimeFormat("pt-BR").format(new Date(monthlyRevenue.date))}
      </Typography>
      <div>
        <Link color="primary" href="#">
          Visualizar relatório completo
        </Link>
      </div>
    </React.Fragment>
  );
}
