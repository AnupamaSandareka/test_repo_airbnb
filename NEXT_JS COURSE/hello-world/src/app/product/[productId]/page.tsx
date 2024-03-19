export default function ProductDetails( { 
    params,
}: {
    params: { productId: string}
} ){
    return <h1>Derails about product {params.productId}</h1>
}