'use client'

import {useAuth} from "queicloco-nextjs";

export default function HomePage() {
    const {profile} = useAuth();

    return (
        <main>
            <h1>{JSON.stringify(profile)}</h1>
            <h2>On client side</h2>
        </main>
    );
}
