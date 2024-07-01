import {Outlet, useLoaderData, Link} from 'react-router-dom';

export async function loader() {
    return fetch('https://fakestoreapi.com/products/categories');
}
export default function Root() {
    const data = useLoaderData();

    return (
        <div>
            <div>
                <Link to='/'>Home</Link>
                {data.map((category) => (
                    <Link key={category} to={`categories/${category}`}>
                        {category}
                    </Link>
                ))}
            </div>
            <Outlet />
        </div>
    );
}
