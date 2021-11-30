import React from 'react'
import BlogDetails from '../components/Blog/SinglePost/BlogDetails'
import Navigation from '../components/Blog/SinglePost/Navigation'
import Title from '../components/Blog/SinglePost/Title'

export default function singleBlog() {
    return (
        <div>
            <Title></Title>
            <BlogDetails></BlogDetails>
            <Navigation></Navigation>
        </div>
    )
}
