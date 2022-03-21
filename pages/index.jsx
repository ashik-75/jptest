import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Racket from '../components/Racket';

const index = () => {
    const [data, setData] = useState([]);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(process.env.NEXT_PUBLIC_root_url);

                setData(response?.data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="p-5">
            {error && <div>{error}</div>}
            <Racket posts={data} />
        </div>
    );
};

export default index;

// export async function getServerSideProps() {
//     const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');

//     return {
//         props: {
//             posts: posts?.data,
//         },
//     };
// }
