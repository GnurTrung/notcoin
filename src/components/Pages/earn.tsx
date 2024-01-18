import { Box, Button, Card, Typography } from "@mui/material";
import { Balance } from "../Balance";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { BackButton, useWebApp } from "@vkruglikov/react-telegram-web-app";

export type EarnPageProps = {
  count: number;
};
export const EarnPage: FC<EarnPageProps> = ({ count }) => {
  const navigate = useNavigate();
  const WebApp = useWebApp();
  return (
    <>
      <BackButton
        onClick={() => {
          navigate("/");
        }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background:
            "linear-gradient(0deg, rgba(185, 123, 0, 0.74) -70.7%, #000 35.94%)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
          color: "white",
          minHeight: "100vh",
        }}
      >
        <Balance count={count} />
        <Typography sx={{ marginTop: "10px" }}>Your balance</Typography>
        <Typography variant="h4" sx={{ marginTop: "100px" }}>
          🚀 {WebApp?.initDataUnsafe?.user?.username} 🚀
        </Typography>
        <Typography variant="h4" sx={{ marginTop: "15px" }}>
          Coming soon!
        </Typography>
      </Box>
    </>
  );
};
