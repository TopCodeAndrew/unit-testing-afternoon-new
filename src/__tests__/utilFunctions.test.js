import { shortenText } from '../../src/utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData'

test('shortenText will not alter a string under 100 characters', () => {

    expect(shortenText(shortText)).toHaveLength(shortText.length)
})

test('shortenText will shorten text over 100 characters and add ellipses', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount will correctly count words in phrase', () => {
    expect(wordCount(posts)).toBe(233);
})

test('attachUserName will displayName for every user+post sent in', () => {
    const newPosts = attachUserName(users, posts)
    expect(newPosts[0]).toHaveProperty('displayName');
})

test('remove posts with no matching user', () => {
    const newPosts = attachUserName(users, posts)
    let deletedPost
    posts.push(deletedPost)
    expect(newPosts).not.toContainEqual(deletedPost);
})

