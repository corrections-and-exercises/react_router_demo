import {Link, Outlet, useLoaderData} from 'react-router-dom';

export async function loader() {
    try {
        const resTwo = await fetch('https://fakestoreapi.com/products');
        const products = await resTwo.json();

        return products;
    } catch (error) {
        console.log(error);
    }
}

export default function Home() {
    const products = useLoaderData();
    return (
        <>
            <h1>Home</h1>
            <div>
                {products.map((product) => (
                    <p key={product.id}>{product.title}</p>
                ))}
            </div>
            <Outlet />
        </>
    );
}
