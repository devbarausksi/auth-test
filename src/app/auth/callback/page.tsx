"use client";

import {useAuth} from "queicloco-nextjs"
import * as React from "react";
import {useRouter, useSearchParams} from "next/navigation";

export default function CallbackPage() {
    const router = useRouter();
    const auth = useAuth();
    const searchParams = useSearchParams();

    React.useEffect(() => {
        if (auth.instance?.authenticated) {
            const redirectUrl = searchParams.get("redirect") ?? "/";

            console.log('redirect', redirectUrl)

            if (redirectUrl.startsWith("/")) {
                return router.push(redirectUrl);
            }

            return router.push("/");
        }
    }, [auth]);

    return null;
}
