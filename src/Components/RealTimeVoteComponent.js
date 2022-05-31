import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import socketIoClient from "socket.io-client";

const websocket = process.env.REACT_APP_SOCKET_URI;

export const RealTimeVoteComponent = () => {
    const [regy, setRegy] = useState([]);

    useEffect(() => {
        const socket = socketIoClient(websocket);
        socket.on("voteMessage", (data) => {
            if (regy.length >= 5) {
                regy.shift();
                return setRegy([...regy, data]);
            }
            setRegy([...regy, data]);
        });
    }, [regy]);

    return (
        <div>
            {regy.map((item) => (
                <Box
                    key={item.id}
                    className="notification"
                    style={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: "5px",
                        padding: "6px",
                        margin: "6px",
                        width: "auto",
                    }}
                >
                    <Typography
                        variant="h6"
                        style={{
                            fontWeight: "bold",
                            color: "black",
                            fontSize: "0.7rem",
                        }}
                    >
                        {item}
                    </Typography>
                </Box>
            ))}
        </div>
    );
};
