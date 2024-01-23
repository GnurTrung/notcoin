import { Avatar, Box } from "@mui/material";
import { AnimatedCounter } from "react-animated-counter";
import CountUp from "react-countup";

export type BalanceProps = {
  count: number;
};
export const Balance = ({ count }: BalanceProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginTop: "20vh",
      }}
    >
      <Avatar
        src="logo.png"
        sx={{ width: "30px", height: "30px", marginTop: "5px" }}
      />
      <CountUp
        end={1000}
        start={0}
        duration={7200}
        style={{ fontSize: 40 }}
      />
    </Box>
  );
};
