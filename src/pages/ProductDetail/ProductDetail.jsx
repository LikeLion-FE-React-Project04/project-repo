import { useLoaderData, useParams, Link } from 'react-router-dom';

function ProductDetail() {
  const post = useLoaderData();
  const { productId } = useParams();

  console.log({ productId, post });

  return (
    <div>
      <h2>ProductDetail {productId}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default ProductDetail;

// GET (READ)
export async function loader({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.productId}`
  );

  if (!response.ok) {
    throw new Error({ message: '서버 오류', status: 500 });
  }

  return response.json();
}
