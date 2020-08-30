// == Import npm
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import axios from 'axios';
import Disqus from 'disqus-react';

// == Import local
import Layout from '../components/Layout';

// == Component
const BlogDetails = (props) => {
  const [content, setContent] = useState('');
  const blogId = props.match.params.id;
  const blogFile = props.match.params.title;

  useEffect(() => {
    axios.get(require(`../blog/${blogFile}.md`)).then((result) => {
      setContent(result.data);
    });
  }, [content, blogFile]);

  const disqusShortname = '#'; //found in your Disqus.com dashboard
  const disqusConfig = {
    url: '#', //Homepage link of this site.
    identifier: blogId,
    title: blogFile,
  };

  return (
    <Layout>
      <div className="mi-blog-details mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
          <div className="mi-blog-details-comments mt-30">
            <Disqus.DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

// == Export default
export default BlogDetails;
