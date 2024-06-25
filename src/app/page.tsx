import {useServerAuth} from "queicloco-nextjs/server";
import Link from "next/link";

export default async function HomePage() {
    const {profile} = await useServerAuth();

    return (
          <main>
              <h1>{JSON.stringify(profile)}</h1>
              <h2>On server side</h2>
              <Link href={'/'}>Goto client side</Link>
          </main>
    );
}
