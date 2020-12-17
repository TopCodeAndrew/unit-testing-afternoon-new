import React from 'react';
import { render } from '@testing-library/react';
import PostWidget from '../components/PostWidget'
import Post from '../views/Post';
import { shortenText } from '../utils/functions'
import { MemoryRouter } from 'react-router-dom';
import { posts } from './__data__/testData';

const longPost = posts[0];
const post = posts[1];

it('renders passed in post', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...post} />
        </MemoryRouter>
    );
    expect(container.textContent).toContain(post.text);
});

it('makes text shorter when "expanded" is false', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget {...longPost} />
        </MemoryRouter>
    );
    expect(container.textContent).toContain(shortenText(longPost.text));
});

it('keeps long text preserved when "expanded" is true', () => {
    const { container } = render(
        <MemoryRouter>
            <PostWidget expanded={true} {...longPost} />
        </MemoryRouter>
    );
    expect(container.textContent).toContain(longPost.text);
});
