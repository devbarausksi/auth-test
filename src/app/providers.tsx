"use client";

import {PropsWithChildren, Suspense} from "react";
import {AuthProvider, AuthProviderProps} from "queicloco-nextjs";

const keycloakConfig = {
    url: process.env.NEXT_PUBLIC_KEYCLOAK_URL!,
    realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM!,
    clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID!,
};

export function Providers({children}: PropsWithChildren) {
    const authProps: Omit<AuthProviderProps, "children"> = {
        config: keycloakConfig,
        init: {
          flow: 'standard'
        },
        profile: (
            {username, firstName, lastName, email}, //KeycloakProfile,
            {realm_access, resource_access, sub} //KeycloakTokenParsed,
        ) => {
            return {
                id: sub,
                username,
                firstName,
                lastName,
                email,
                realm_access,
                resource_access,
            };
        },
    };

    return (
        <AuthProvider {...authProps} >
            <Suspense>{children} </Suspense>
        </AuthProvider>
    );
}