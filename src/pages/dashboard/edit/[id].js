import FormProduct from '@components/FormProduct';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import endPoints from '@services/api';

export default function Edit() {
    const [product, setProduct] = useState({});
    const router = useRouter();

    useEffect(() => {
        const { id } = router.query;
        if(!router.isReady) return;
        async function getProduct() {
            try {
                const response = await axios.get(endPoints.products.getProduct(id));
                setProduct(response.data);
            } catch (error) {
                alert(`
                Product doesn't exist.
                (${error})`);
            }
        }
        getProduct();

    }, [router?.isReady]);

    return (
        <FormProduct product={product}/>
    );
};