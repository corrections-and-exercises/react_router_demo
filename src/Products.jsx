import {useLoaderData, useParams} from 'react-router-dom';

export async function loader({params}) {
    return fetch(
        `https://fakestoreapi.com/products/category/${params.category}`
    );
}

export default function Products() {
    const data = useLoaderData();
    const {category} = useParams();

    return (
        <>
            <h1>{category}</h1>
            {data.map((el) => (
                <p key={el.title}>{el.title}</p>
            ))}
        </>
    );
}
