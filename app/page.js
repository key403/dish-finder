import Categories from "./components/Categories";
import Favorites from "./components/Favorites";

export default function Home() {
  return (
    <main className="pb-14 flex flex-col min-h-screen">
      <Favorites/>
      <Categories/>
    </main>
  )
}
