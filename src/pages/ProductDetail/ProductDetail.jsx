import { useLoaderData } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function ProductDetail() {
  // const post = useLoaderData();
  const { productId } = useParams();

  // console.log(productId);

  return <div>ProductDetail</div>;
}

export default ProductDetail;

// GET (READ)
// export async function loader({ request, params }) {
//   console.log('디테일 로더');
//   const response = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${params.id}`
//   );

//   if (!response.ok) {
//     throw new Error({ message: 'Sever Error', status: 500 });
//   }

//   // Promise<T>
//   return response.json();
// }
