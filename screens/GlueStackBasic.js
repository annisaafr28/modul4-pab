import React from "react";
import { GlueStackUIProvider, Heading, Center } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const GlueStackUIBasic = () => {
    return (
        <GlueStackUIProvider config={config}>
            <Center flex={1}>
                <Heading>Gluestack UI</Heading>
            </Center>
        </GlueStackUIProvider>
    );
};

export default GlueStackUIBasic;