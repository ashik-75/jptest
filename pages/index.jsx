import axios from 'axios';
import React from 'react';
import Racket from '../components/Racket';

const index = ({ posts }) => {
    return (
        <div className="p-5">
            <Racket posts={posts} />
        </div>
    );
};

export default index;

export async function getServerSideProps() {
    const posts = await axios.get(process.env.NEXT_PUBLIC_root_url);

    return {
        props: {
            posts: posts?.data,
        },
    };
}
