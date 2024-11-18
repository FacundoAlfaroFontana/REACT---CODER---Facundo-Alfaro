import { ItemListContainer, Loader } from "../components";

import { useItems } from "../hooks";

// DRY ---- CleanCode ---- Don't repeat yourself

// Complexity is 5 Everything is cool!
export const Home = () => {
    const { productsData, loading } = useItems();

    return loading ? <Loader /> : <ItemListContainer products={productsData} />;
};
