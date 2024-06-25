import {useServerAuth} from "queicloco-nextjs/server";

export default async function HomePage() {
    const {profile} = await useServerAuth();

    return (
          <main>
              <h1>{JSON.stringify(profile)}</h1>
              <h2>On server side</h2>
          </main>
    );
}
