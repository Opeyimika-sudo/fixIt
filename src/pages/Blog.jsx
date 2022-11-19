import React from 'react'
import styled from 'styled-components'
import PostSnippet from '../components/PostSnippet';
import Page from '../components/Page'
import Search from '../components/Search'

import post_img1 from '../images/blogposts/post_img1.png'
import post_img2 from '../images/blogposts/post_img2.png'
import post_img3 from '../images/blogposts/post_img3.png'
import post_img4 from '../images/blogposts/post_img4.png'
import post_img5 from '../images/blogposts/post_img5.png'
import post_img6 from '../images/blogposts/post_img6.png'
import post_img7 from '../images/blogposts/post_img7.png'
import post_img8 from '../images/blogposts/post_img8.png'
import post_img9 from '../images/blogposts/post_img9.png'
import post_img10 from '../images/blogposts/post_img10.png'

const StyledSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 30px auto;
  width: 90%;
`

function Blog() {
  let display;
  if (window.innerWidth < 768) {
    display = false
  } else {
    display = true
  }
  return (
    <>
      <Search 
        display = {display}
      />
      <StyledSection>
      <PostSnippet 
      img = {post_img1}
      title = "How to Do Defamation Removal Online"
      subtitle = "Defamation removal can be challenging. With our step-by-step guide, learn how to protect ..."
      display = {display}
      />
      <PostSnippet 
      img = {post_img2}
      title = "Why You Need An Online Reputation"
      subtitle = "If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and resources,,,"
      display = {display}
      />
      <PostSnippet 
      img = {post_img3}
      title = "How to Remove Info from Reddit"
      subtitle = "Fast People Search removal can help protect your privacy online. Learn how to complete the r/reddit.com ..."
      display = {display}
      />
      <PostSnippet 
      img = {post_img4}
      title = "5 Strategies for Customer Review Management in 2022"
      subtitle = "Since most customers will interact with as business for the first time on the internet, having an effective customer ...."
      display = {display}
      />
      <PostSnippet 
      img = {post_img5}
      title = "How to Remove Personal Information from Google"
      subtitle = "Having a great Google review management strategy is very important. They act as an icebreaker to...."
      display = {display}
      />
      <PostSnippet 
      img = {post_img6}
      title = "Reputation Management for Politicians: What to Know"
      subtitle = "Fast People Search removal can help protect your privacy online. Learn how to complete the FastPeopleSearch.com..."
      display = {display}
      />
      <PostSnippet 
      img = {post_img7}
      title = "How to Remove My Information from BeenVerified"
      subtitle = "Your public perception is known as your online reputation, telling others who you are, what …"
      display = {display}
      />
      <PostSnippet 
      img = {post_img8}
      title = "7 Software Development Models to Organize Your Team"
      subtitle = "If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time and..."
      display = {display}
      />
      <PostSnippet 
      img = {post_img9}
      title = "Why Dentists Need Online Reputation Management"
      subtitle = "If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time ..."
      display = {display}
      />
      {window.innerWidth < 768 && 
        <PostSnippet 
        img = {post_img10}
        title = "How to Stay Safe While Surfing the Internet"
        subtitle = "If you’re well known in your region, the United States, or the world, you’ve likely put a lot of time ..."
        display = {display}
        />
      }
      </StyledSection>
      <Page 
      display = {display}
      />
    </>
  )
}

export default Blog;