import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { ApiData } from '../../Features/FeaturesSlice'
import { addToCart } from '../../Features/CartSlice'

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const { data, loading, error } = useSelector(state => state.Api_data);

    const itemsPerPage = 15;

    useEffect(() => {
        dispatch(ApiData());
    }, [dispatch]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-60">
                <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
            </div>
        );
    }

    if (error) return <h1 className="text-2xl text-center mt-10 text-red-600">Something went wrong!</h1>;

    const HandleAddToCart = (item) => {
        dispatch(addToCart(item));
        navigate('/cart');
    };

    const totalPages = Math.ceil(data.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="container mx-auto px-4 py-16">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentItems.map(item => (
                    <div
                        key={item.id}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4 flex flex-col items-center hover:bg-cyan-200"
                    >
                        <div className="w-full h-48 flex items-center justify-center mb-4">
                            <img
                                src={item.images}
                                alt={item.title}
                                className="max-h-full object-contain"
                            />
                        </div>

                        <h4 className="text-sm text-gray-500 mb-1">
                            Category: {item.category}
                        </h4>

                        <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
                            {item.title}
                        </h3>

                        <p className="text-gray-700 mb-1">
                            Remaining: {item.stock}
                        </p>

                        <p className="text-gray-700 mb-1">
                            Price: ${item.price}
                        </p>

                        <p className={`text-sm font-medium ${
                            item.availabilityStatus === 'In Stock'
                                ? 'text-green-600'
                                : 'text-red-600'
                        }`}>
                            {item.availabilityStatus}
                        </p>

                        <button
                            onClick={() => HandleAddToCart(item)}
                            className="mt-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
                <button
                    onClick={() => setCurrentPage(prev => prev - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Prev
                </button>

                {[...Array(totalPages)].map((_,page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page + 1)}
                        className={`px-4 py-2 rounded ${
                            currentPage === page + 1
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-200'
                        }`}
                    >
                        {page + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage(prev => prev + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Home;
