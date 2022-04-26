const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        getProducts: (limit, offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
        allProducts: `${API}/api/${VERSION}/products/`,
        addProducts: `${API}/api/${VERSION}/products/`,
        updateProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
        deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}/`,
    },
    categories: {
        getCategoriesList: `${API}/api/${VERSION}/categories/`,
        addCategory: `${API}/api/${VERSION}/categories/`,
        getCategoryItems: (id) => `${API}/api/${VERSION}/categories/${id}/products/`,
        updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
    },
    files: {
        addImage: `${API}/api/${VERSION}/files/upload`,
        getImage: (fileName) => `${API}/api/${VERSION}/${fileName}`,
    },
    users: {
        getUsers: `${API}/api/${VERSION}/users`,
        postUsers: `${API}/api/${VERSION}/users`,
    },
};

export default endPoints;
