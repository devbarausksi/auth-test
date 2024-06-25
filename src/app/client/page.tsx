'use client'

import {useAuth} from "queicloco-nextjs";
import Link from "next/link";

export default function HomePage() {
    const {profile, logout} = useAuth();

    return (
        <main>
            <h1>{JSON.stringify(profile)}</h1>
            <h2>On client side</h2>
            <Link href={'/'}>Goto server side</Link>
            <button onClick={() => logout()}>Logout</button>
        </main>
    );
}
